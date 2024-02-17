import { api } from '@/lib/axios'

type GetManagedRestaurantResponse = {
  id: string
  name: string
  managerID: string | null
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const { data } = await api.get('/managed-restaurant')

  return data
}
