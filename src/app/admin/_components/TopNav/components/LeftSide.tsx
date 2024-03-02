import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftSide = () => {
  return (
    <div className='relative'>
      <input
        className="text-md rounded-3xl border-[0.1rem] border-[#ffffff26] px-4 py-1 text-[#ffffff8a] placeholder:text-[#ffffff53]"
        type="text"
        placeholder="Search"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-end pb-2 pr-3">
        <div className="size-4 text-[#ffffff75] ">
          <FontAwesomeIcon icon={faSearch} className="!h-full w-full" />
        </div>
      </div>
    </div>
  )
}
export default LeftSide
