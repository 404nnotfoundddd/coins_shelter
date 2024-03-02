import { z } from 'zod'
import { publicProcedure } from '../../trpc'

export const getExchange = publicProcedure
  .input(z.string())
  .query(async ({ input }) => {
    const data = await fetch(`https://api.coincap.io/v2/exchanges/${input}`)
    
    const json: {
      data: {
        id: string
        name: string
        rank: string
        percentTotalVolume: string
        volumeUsd: string
        tradingPairs: string
        socket: false
        exchangeUrl: string
        updated: number
      }
      timestamp: number
    } = await data.json()

    return json
  })
