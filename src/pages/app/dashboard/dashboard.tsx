import { Helmet } from 'react-helmet-async'

import { DayOrdersAmontCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmontCard } from './month-canceled-amont-card'
import { MonthOrdersAmountCard } from './month-orders-amount'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmontCard />
          <MonthCanceledOrdersAmontCard />
        </div>
      </div>
    </>
  )
}
