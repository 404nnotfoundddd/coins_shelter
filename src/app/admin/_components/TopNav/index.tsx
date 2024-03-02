import LeftSide from './components/LeftSide'
import RigthSide from './components/RigthSide'

const TopNav = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between bg-[#1a1e22] p-2">
      <LeftSide />
      <RigthSide />
    </nav>
  )
}
export default TopNav
