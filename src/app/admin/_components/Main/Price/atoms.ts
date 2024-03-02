import { atom } from 'jotai'

export const selectedRangeAtom = atom<
  'All' | '1Y' | '6M' | '3M' | '1M' | '24H'
>('All')
