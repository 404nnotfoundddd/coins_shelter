import { createTRPCRouter } from '@/server/api/trpc'
import { getAsset, getAssetHistory, getExchange } from './subroutes/_route'

export const coincapRouter = createTRPCRouter({
  getAsset: getAsset,
  getAssetHistory: getAssetHistory,
  getExchange: getExchange,
})
