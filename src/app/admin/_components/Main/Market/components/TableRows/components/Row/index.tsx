import clsx from 'clsx'
import Image, { type StaticImageData } from 'next/image'

type RowProps = {
  marketText: string
  marketImg: StaticImageData
  price: number
  change24H: string
  lowest24H: number
  highest24H: number
  volume24H: number
  value24H: number
  chartImg: StaticImageData
}

const Row = ({
  marketText,
  marketImg,
  price,
  change24H,
  highest24H,
  lowest24H,
  value24H,
  volume24H,
  chartImg,
}: RowProps) => {
  return (
    <div className="flex flex-col gap-3 text-[0.8rem]">
      <div className="grid grid-cols-8 items-center text-sm text-[#ffffffd1]">
        <div className="flex flex-row items-center gap-2 ">
          <Image
            src={marketImg}
            alt={marketText}
            className="size-10 shrink-0 rounded-full object-contain"
            sizes="(min-width: 560px) calc(0.98vw + 37px), calc(10vw - 11px)"
          />
          <div className="max-w-10 text-[0.8rem]">{marketText}</div>
        </div>

        <div className="text-[0.8rem]">{price}</div>
        <div
          className={clsx('text-[0.8rem]', {
            'text-[#c23a5a]': change24H.startsWith('-'),
            'text-[#276f61]': change24H.startsWith('+'),
          })}
        >
          {change24H}
        </div>
        <div className="text-[0.8rem]">{lowest24H}</div>
        <div className="text-[0.8rem]">{highest24H}</div>
        <div className="text-[0.8rem]">{volume24H + ' BTC'}</div>
        <div className="text-[0.8rem]">{value24H + ' BTC'}</div>
        <Image
          src={chartImg}
          alt="chart"
          className="w-[6rem]"
          sizes="(min-width: 1820px) calc(2.71vw + 106px), calc(9.8vw - 22px)"
        />
      </div>

      <div className="h-[0.05rem] w-full bg-[#ffffff15]"></div>
    </div>
  )
}
export default Row
