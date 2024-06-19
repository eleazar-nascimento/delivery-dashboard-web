import { api } from '@/lib/axios'

export interface GetMonthRevenueAmountResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueAmountResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
