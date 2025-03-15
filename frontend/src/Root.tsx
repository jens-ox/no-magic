import { useQuery } from '@tanstack/react-query'
import { honoClient } from './utils/api'

export const RootComponent = () => {
  const { data } = useQuery({
    queryKey: ['title'],
    queryFn: async () => {
      const res = await honoClient.api.title.$get()
      return res.json()
    }
  })

  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  )
}
