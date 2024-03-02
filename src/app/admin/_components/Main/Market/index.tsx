import Search from './components/Search'
import TableCellsNames from './components/TableCellsNames'
import TableRows from './components/TableRows'

const Market = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#ffffff0c] p-3">
      <div className="flex flex-row justify-between">
        <div className="text-base font-[500] text-[#ffffff88]">Market</div>
        <Search />
      </div>
      <div className="p-1 gap-2 flex flex-col">
        <TableCellsNames />
        <TableRows />
      </div>
    </div>
  )
}
export default Market
