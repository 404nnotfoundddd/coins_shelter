import Binance from './components/Binance'
import Bitcoin from './components/Bitcoin'
import Ethereium from './components/Ethereium'

const TableRows = () => {
  return (
    <div className="flex flex-col gap-2">
      <Bitcoin />
      <Binance />
      <Ethereium />

    </div>
  )
}
export default TableRows
