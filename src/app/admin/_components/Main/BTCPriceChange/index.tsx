import { Inter } from 'next/font/google'
import Title from './components/Title'
import Item from './components/Item'

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
})

const BTCPriceChange = () => {
  return (
    <div
      className={`${inter.className} flex flex-col gap-2 rounded-2xl bg-[#ffffff0c]  p-4`}
    >
      <Title />
      <div className="flex flex-col gap-2">
        <Item keyValue='All' value='505.78%' valueColor='#276f61'/>
        <Item keyValue='365 days' value='-43.9%' valueColor='#c23a5a'/>
        <Item keyValue='90 days' value='-16.08%' valueColor='#c23a5a'/>
        <Item keyValue='30 days' value='7.37 %' valueColor='#276f61'/>
        <Item keyValue='7 days' value='8.42 %' valueColor='#276f61'/>
        <Item keyValue='24 H' value='-9.99%' valueColor='#c23a5a'/>
      </div>
    </div>
  )
}
export default BTCPriceChange
