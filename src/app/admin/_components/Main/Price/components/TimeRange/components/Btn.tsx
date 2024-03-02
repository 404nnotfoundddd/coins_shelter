import { clsxMerge } from '@/src/utils/clsxMerge'
import { useAtom } from 'jotai'
import { selectedRangeAtom } from '../../../atoms'

type BtnProps = {
  type: 'All' | '1Y' | '6M' | '3M' | '1M' | '24H'
}

const Btn = ({ type }: BtnProps) => {
  const [selected, setSelected] = useAtom(selectedRangeAtom)

  return (
    <button
      onClick={() => setSelected(type)}
      className={clsxMerge(
        'px-2 py-1 text-sm first:rounded-l-lg last:rounded-r-lg',
        {
          'bg-[#88fb93] text-black': selected === type,
          // prettier-ignore
          'bg-gradient-to-t from-[#ffffff0d] to-[#ffffff26] text-[#ffffff4a]': selected !== type,
        },
      )}
    >
      {type}
    </button>
  )
}
export default Btn
