'use client'

import { type Color } from '@/types/color'
import Image, { type StaticImageData } from 'next/image'

type BoxProps = {
  title: string
  smallText: string
  value: string
  smallTextColor?: Color
  chartImg: StaticImageData
}

const Box = ({
  title,
  smallText,
  smallTextColor = '#ffffff4e',
  value,
  chartImg,
}: BoxProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-gradient-to-t from-[#ffffff0c] to-[#ffffff17] p-2">
      <div className="pt-2 font-[400] text-[#9fa8b0]">{title}</div>
      <div className="h-[0.05rem] w-full bg-[#ffffff21]"></div>
      <div className="flex flex-row  items-center gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-md font-[700] text-[#ffffffb9]">{value}</div>
          <div style={{ color: smallTextColor }} className="text-sm font-[400]">
            {smallText}
          </div>
        </div>
        <Image src={chartImg} alt={title} sizes="w" className="w-28" />
      </div>
    </div>
  )
}
export default Box
