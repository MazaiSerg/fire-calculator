import React, { useState } from 'react';
import { Input } from '../uikit/Input';
import { DefaultCalculation } from './DefaultCalculation';

export function Calculation() {
	const [currentAge, setCurrentAge] = useState(30);
	const [deathAge, setDeathAge] = useState(78);
	const [startWithMoney, setStartWithMoney] = useState(1_000_000);

	const [salary, setSalary] = useState(250_000);
	const [regionBonus, setRegionBonus] = useState(0);
	const [tax, setTax] = useState(6);

	const [moneyEat, setMoneyEat] = useState(40_000);
	const [moneyRent, setMoneyRent] = useState(50_000);
	const [moneyFlat, setMoneyFlat] = useState(5_000);
	const [moneyHealth, setMoneyHealth] = useState(20_000);
	const [moneyFun, setMoneyFun] = useState(20_000);

	const [inflation, setInflation] = useState(8);
	const [salaryGrown, setSalaryGrown] = useState(8);
	const [percentToSaving, setPercentToSaving] = useState(5);

	return (
		<div>
			<div>
				<h4 style={{ marginBlockEnd: '0.25em' }}>Личные данные</h4>
				<div style={{ display: 'flex', gap: '20px' }}>
					<Input
						label="Ваш текущий возраст"
						setValue={setCurrentAge}
						value={currentAge}
					/>
					<Input
						label="Предполагаемый возраст дожития"
						setValue={setDeathAge}
						value={deathAge}
					/>
					<Input
						label="Начальный капитал"
						setValue={setStartWithMoney}
						value={startWithMoney}
					/>
				</div>

				<h4 style={{ marginBlockEnd: '0.25em' }}>Данные о зарплате</h4>
				<div style={{ display: 'flex', gap: '20px' }}>
					<Input
						label="Ваша текущая зарплата"
						setValue={setSalary}
						value={salary}
					/>
					<Input
						label="Районный кофициент (в процентах)"
						setValue={setRegionBonus}
						value={regionBonus}
					/>
					<Input
						label="Процент отчислений с зарплаты"
						setValue={setTax}
						value={tax}
					/>
				</div>

				<h4 style={{ marginBlockEnd: '0.25em' }}>Данные о тратах</h4>
				<div style={{ display: 'flex', gap: '20px' }}>
					<Input
						label="Стоимость аренды"
						setValue={setMoneyRent}
						value={moneyRent}
					/>
					<Input
						label="Комунальные платежи"
						setValue={setMoneyFlat}
						value={moneyFlat}
					/>
					<Input label="Траты на еду" setValue={setMoneyEat} value={moneyEat} />
					<Input
						label="Траты на развлечения"
						setValue={setMoneyFun}
						value={moneyFun}
					/>
					<Input
						label="Траты на здоровье"
						setValue={setMoneyHealth}
						value={moneyHealth}
					/>
				</div>

				<h4 style={{ marginBlockEnd: '0.25em' }}>Средние изменения</h4>
				<div style={{ display: 'flex', gap: '20px' }}>
					<Input
						label="Предполагаемая инфляция"
						setValue={setInflation}
						value={inflation}
					/>
					<Input
						label="Предполагаемый рост зп"
						setValue={setSalaryGrown}
						value={salaryGrown}
					/>
					<Input
						label="Процент на остаток"
						setValue={setPercentToSaving}
						value={percentToSaving}
					/>
				</div>
			</div>
			<DefaultCalculation
				ages={{ currentAge, deathAge }}
				changes={{ inflation, salaryGrown, percentToSaving }}
				payments={{
					rent: moneyRent,
					flat: moneyFlat,
					eat: moneyEat,
					fun: moneyFun,
					health: moneyHealth,
				}}
				salary={{ salary, regionBonus, tax }}
				startWithMoney={startWithMoney}
			/>
		</div>
	);
}
