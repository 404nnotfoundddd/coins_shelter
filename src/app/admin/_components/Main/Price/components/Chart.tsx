'use client'

// i couldn't find a way to use react-chartkick with typescript so i had to use ts-expect-error
// @ts-expect-error
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { api } from '@/src/trpc/react'
import { useAtomValue } from 'jotai'
import { selectedRangeAtom } from '../atoms'

const Chart = () => {
  const selectedRange = useAtomValue(selectedRangeAtom)

  const bitcoinData = api.coincap.getAssetHistory.useQuery(
    {
      id: 'bitcoin',
      interval: selectedRange == '24H' ? 'm5' : 'd1',
    },
    {
      refetchInterval: 5000,
    },
  )

  console.log(bitcoinData.data?.data)

  let chartData = {}
  bitcoinData.data?.data.forEach((item: any) => {
    const dataDate = new Date(item.time)
    const dataYear = dataDate.getFullYear()
    const dataMonth = dataDate.getMonth() + 1
    const dataDay = dataDate.getDate()

    const price = item.priceUsd.split('.')[0]

    switch (selectedRange) {
      case '6M':
        if (
          new Date(dataDate) >
          new Date(new Date().setMonth(new Date().getMonth() - 6))
        ) {
          chartData = {
            ...chartData,
            [`${dataYear}-${dataMonth}-${dataDay}`]: price,
          }
        }
        break
      case '3M':
        if (
          new Date(dataDate) >
          new Date(new Date().setMonth(new Date().getMonth() - 3))
        ) {
          chartData = {
            ...chartData,
            [`${dataYear}-${dataMonth}-${dataDay}`]: price,
          }
        }
        break
      case '1M':
        if (
          new Date(dataDate) >
          new Date(new Date().setMonth(new Date().getMonth() - 1))
        ) {
          chartData = {
            ...chartData,
            [`${dataYear}-${dataMonth}-${dataDay}`]: price,
          }
        }
        break

      case '24H':
        if (
          new Date(dataDate) >
          new Date(new Date().setDate(new Date().getDate() - 1))
        ) {
          const dataHour = dataDate.getHours()
          const dataMinute = dataDate.getMinutes()

          chartData = {
            ...chartData,
            [`${dataYear}-${dataMonth}-${dataDay} ${dataHour}:${dataMinute}`]:
              price,
          }
        }
        break
      default:
        chartData = {
          ...chartData,
          [`${dataYear}-${dataMonth}-${dataDay}`]: price,
        }
        break
    }
  })

  return <LineChart colors={['#8e98f7']} data={chartData} />
}
export default Chart
