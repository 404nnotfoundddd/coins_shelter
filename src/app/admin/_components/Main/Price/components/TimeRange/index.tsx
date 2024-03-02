'use client'

import { api } from '@/src/trpc/react'
import Btn from './components/Btn'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
})

const TimeRange = () => {
  return (
    <div className={`${inter.className} flex flex-row`}>
      <Btn type="All" />
      <Btn type="1Y" />
      <Btn type="6M" />
      <Btn type="3M" />
      <Btn type="1M" />
      <Btn type="24H" />
    </div>
  )
}
export default TimeRange
