import Item from './components/Item'

const TableCellsNames = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-[0.05rem] w-full bg-[#ffffff21]"></div>
      <div className="grid w-full grid-cols-7 gap-3">
        <Item text="Market" />
        <Item text="Price" />
        <Item text="24H Change" />
        <Item text="24H Lowest" />
        <Item text="24H Highest" />
        <Item text="24H Volume" />
        <Item text="24H Value" />
      </div>
      <div className="h-[0.05rem] w-full bg-[#ffffff21]"></div>
    </div>
  )
}
export default TableCellsNames
