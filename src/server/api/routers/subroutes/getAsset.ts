import { z } from 'zod'
import { publicProcedure } from '../../trpc'

export const getAsset = publicProcedure
  .input(z.string())
  .query(async ({ input }) => {
    const data = await fetch(`https://api.coincap.io/v2/assets/${input}`)
    const json = await data.json()

    return json
  })
