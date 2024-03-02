import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConnectWallet = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-3xl bg-[#86fe90] px-3 py-2 duration-150 hover:opacity-50">
      <div className="text-sm text-black">Connect Wallet</div>
      <div className="size-5">
        <FontAwesomeIcon icon={faWallet} className="!h-full w-full" />
      </div>
    </button>
  )
}
export default ConnectWallet
