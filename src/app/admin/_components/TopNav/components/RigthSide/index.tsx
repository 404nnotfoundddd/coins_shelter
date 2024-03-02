import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import ConnectWallet from './components/ConnectWallet'

const RigthSide = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="size-7 text-[#ffffff79]">
        <FontAwesomeIcon icon={faMoon} className="!h-full w-full" />
      </div>
      <ConnectWallet />
    </div>
  )
}
export default RigthSide
