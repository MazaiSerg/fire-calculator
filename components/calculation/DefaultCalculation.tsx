import React from 'react'
import {Ages, Changes, Payments, Salary} from "./types"
import {MONEY_AFTER_TAX, YEARS_NEEDED} from "./const";
import {Grid} from "../uikit/Grid";

type Props = {
  ages: Ages
  salary: Salary
  payments: Payments
  changes: Changes
}

const headers = ['возраст', 'зп', 'платежи', 'остаток', 'накоплено за год', 'накоплено всего']

export const DefaultCalculation = ({ages, salary, payments, changes}: Props) => {

  const getPaymentsWithInflation = (payments: Payments, inflation: number): Payments => {
    const inflationCoef = 1 + inflation / 100
    return {
      rent: payments.rent * inflationCoef,
      flat: payments.flat * inflationCoef,
      eat: payments.eat * inflationCoef,
      fun: payments.fun * inflationCoef,
      health: payments.health * inflationCoef,
    }
  }

  const getSalaryGrown = (salary: Salary, grown: number): Salary => {
    const grownCoef = 1 + grown / 100;
    return {
      salary: salary.salary * grownCoef,
      regionBonus: salary.regionBonus
    }
  }

  const countAllPayment = (payments: Payments): number => {
    return payments.rent + payments.flat + payments.eat + payments.fun + payments.health
  }

  const data = [];
  let simulatingSalary = salary
  let simulatingPayments = payments
  let savingMoney = 0
  let simulatingAge = ages.currentAge;
  for ( ;simulatingAge < ages.deathAge; simulatingAge++) {
    const allPayments = countAllPayment(simulatingPayments)
    const saveMoney = simulatingSalary.salary * MONEY_AFTER_TAX - allPayments
    const saveMoneyYear = saveMoney * 12
    savingMoney += saveMoneyYear
    const row = [
      simulatingAge,
      simulatingSalary.salary,
      allPayments,
      saveMoney,
      saveMoneyYear,
      savingMoney
    ]
    data.push(row)
    simulatingSalary = getSalaryGrown(simulatingSalary, changes.salaryGrown)
    simulatingPayments = getPaymentsWithInflation(simulatingPayments, changes.inflation)

    const needMoney = allPayments * 12 * Math.min((ages.deathAge - simulatingAge), YEARS_NEEDED)
    if (needMoney < savingMoney) break;
  }

  return <div>
    <span>Можно выйти на пенсию в {simulatingAge}</span>
    <Grid headers={headers} rows={data} title="Процесс накопления"/>
  </div>
}