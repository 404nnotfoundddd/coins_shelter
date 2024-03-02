import TimeRange from './components/TimeRange'
import Chart from './components/Chart'

const Price = () => {
  return (
    <div className="col-span-3 grow rounded-2xl bg-[#ffffff0c] p-2">
      <div className="flex flex-row justify-between p-2">
        <div className="text-lg font-[500] text-[#ffffff88]">Price (USD)</div>
        <TimeRange />
      </div>
      <Chart />
    </div>
  )
}
export default Price
