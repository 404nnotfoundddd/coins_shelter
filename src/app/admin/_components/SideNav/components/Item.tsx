import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Inter } from 'next/font/google'
import { clsxMerge } from '@/src/utils/clsxMerge'

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
})

type ItemProps = {
  icon: IconDefinition
  text: string
  isActive: boolean
}

const Item = ({ icon, text, isActive }: ItemProps) => {
  return (
    <button
      className={clsxMerge(
        'flex w-full flex-row items-center gap-2 rounded-xl px-2 py-2 duration-100 hover:opacity-50',
        {
          'bg-[#74fe82] text-black': isActive,
          'bg-transparent text-gray-500': !isActive,
        },
      )}
    >
      <div className="size-5">
        <FontAwesomeIcon icon={icon} className="!h-full w-full" />
      </div>
      <div className={`${inter.className} text-sm`}>{text}</div>
    </button>
  )
}
export default Item
