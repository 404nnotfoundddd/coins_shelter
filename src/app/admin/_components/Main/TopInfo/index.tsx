import Box from './components/Box'
import { Inter } from 'next/font/google'

import c1 from '@/png/chart1.png'
import c2 from '@/png/chart2.png'
import c3 from '@/png/chart3.png'
import c4 from '@/png/chart4.png'

const inter = Inter({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
})

const TopInfo = () => {
  return (
    <div className={`${inter.className} grid grid-cols-4 gap-3`}>
      <Box
        title="Coins"
        smallText="24H Value(USD)"
        value="9.43M"
        chartImg={c1}
      />
      <Box
        title="24H Price Change"
        smallText="+1.12%"
        smallTextColor="#276f61"
        value="683"
        chartImg={c2}
      />
      <Box
        title="Total Market Cap(USD)"
        smallText="-1.12%"
        smallTextColor="#c23a5a"
        value="1211.58B"
        chartImg={c3}
      />
      <Box
        title="24H Value(USD)"
        smallText="Listed Cryptos"
        value="28.57M"
        chartImg={c4}
      />
    </div>
  )
}
export default TopInfo
