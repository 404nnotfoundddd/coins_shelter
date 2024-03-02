import { z } from 'zod'
import { publicProcedure } from '../../trpc'

export const getAssetHistory = publicProcedure
  .input(
    z.object({
      id: z.string(),
      interval: z.enum([
        'm1',
        'm5',
        'm15',
        'm30',
        'h1',
        'h2',
        'h6',
        'h12',
        'd1',
      ]),
    }),
  )
  .query(async ({ input }) => {
    const { id, interval } = input

    const data = await fetch(
      `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`,
    )
    const json: {
      data: [
        {
          date: Date
          priceUsd: string
          time: number
        }[],
      ]
    } = await data.json()

    return json
  })
