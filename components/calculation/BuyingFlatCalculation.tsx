import { Ages, Changes, Payments, Salary } from './types';
import { YEARS_NEEDED } from './const';
import { Grid } from '../uikit/Grid';

type Props = {
	ages: Ages;
	salary: Salary;
	payments: Payments;
	changes: Changes;
	startWithMoney: number;
	flatCost: number;
};

const headers = [
	'возраст',
	'зп',
	'платежи',
	'остаток',
	'накоплено за год',
	'процент по вкладу',
	'накоплено всего',
];

export function BuyingFlatCalculation({
	ages,
	salary,
	payments,
	changes,
	startWithMoney,
	flatCost,
}: Props) {
	const getPaymentsWithInflation = (
		payments: Payments,
		inflation: number,
	): Payments => {
		const inflationCoef = 1 + inflation / 100;
		return {
			rent: payments.rent * inflationCoef,
			flat: payments.flat * inflationCoef,
			eat: payments.eat * inflationCoef,
			fun: payments.fun * inflationCoef,
			health: payments.health * inflationCoef,
		};
	};

	const getSalaryGrown = (salary: Salary, grown: number): Salary => {
		const grownCoef = 1 + grown / 100;
		return {
			...salary,
			salary: salary.salary * grownCoef,
		};
	};

	const countAllPayment = (payments: Payments): number => {
		return (
			payments.rent +
			payments.flat +
			payments.eat +
			payments.fun +
			payments.health
		);
	};

	const data = [];
	let simulatingSalary = salary;
	let simulatingPayments = payments;
	let savingMoney = startWithMoney;
	let simulatingAge = ages.currentAge;
	let currentFlatCost = flatCost;
	let buingFlatAge = 0;
	for (; simulatingAge < ages.deathAge; simulatingAge++) {
		const allPayments = countAllPayment(simulatingPayments);
		const saveMoney =
			simulatingSalary.salary * (1 - simulatingSalary.tax / 100) - allPayments;
		const saveMoneyYear = saveMoney * 12;
		const additionalMoney = (savingMoney * changes.percentToSaving) / 100;
		savingMoney += saveMoneyYear + additionalMoney;
		currentFlatCost *= 1 + changes.inflation / 100;

		if (simulatingPayments.flat > 0 && savingMoney > currentFlatCost) {
			simulatingPayments.flat = 0;
			savingMoney -= currentFlatCost;
			buingFlatAge = simulatingAge;
		}

		const row = [
			simulatingAge,
			simulatingSalary.salary,
			allPayments,
			saveMoney,
			saveMoneyYear,
			additionalMoney,
			savingMoney,
		];
		data.push(row);
		simulatingSalary = getSalaryGrown(simulatingSalary, changes.salaryGrown);
		simulatingPayments = getPaymentsWithInflation(
			simulatingPayments,
			changes.inflation,
		);

		const needMoney =
			allPayments * 12 * Math.min(ages.deathAge - simulatingAge, YEARS_NEEDED);
		if (needMoney < savingMoney) break;
	}

	return (
		<div>
			<span>Можно выйти на пенсию в {simulatingAge}</span>
			<span>Квартира куплена в {buingFlatAge}</span>
			<Grid headers={headers} rows={data} title="Процесс накопления" />
		</div>
	);
}
