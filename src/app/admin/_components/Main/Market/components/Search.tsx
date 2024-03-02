import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <div className="relative">
      <input
        className="text-md w-60 rounded-3xl border-[0.1rem] border-[#ffffff26] px-4 py-1 text-sm text-[#ffffff8a] placeholder:text-[#ffffff53]"
        type="text"
        placeholder="Search"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-end pr-3 pb-2">
        <div className="size-4 text-[#ffffff7f] ">
          <FontAwesomeIcon icon={faSearch} className="!h-full w-full" />
        </div>
      </div>
    </div>
  )
}
export default Search
