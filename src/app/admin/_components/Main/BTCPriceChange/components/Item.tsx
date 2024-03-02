import { type Color } from '@/types/color'

type ItemProps = {
  keyValue: string
  value: string
  valueColor: Color
}

const Item = ({ keyValue, value, valueColor }: ItemProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-sm font-[400] text-[#ffffff74]">{keyValue}</div>
      <div style={{ color: valueColor }} className="text-sm font-[400]">
        {value}
      </div>
    </div>
  )
}
export default Item
