import Home from './components/Market'
import Logo from './components/Logo'
import BuyCrypto from './components/BuyCrypto'
import Exchange from './components/Exchange'
import Earn from './components/Earn'
import Settings from './components/Settings'
import Help from './components/Help'

const SideNav = () => {
  return (
    <nav className={`flex items-center h-full flex-col gap-8 bg-[#1a1e22] p-3  w-[13rem]`}>
      <Logo />
      <div className="w-full flex items-center flex-col gap-4">
        <Home />
        <BuyCrypto />
        <Exchange />
        <Earn />
        <Settings />
        <Help />

        
      </div>
    </nav>
  )
}
export default SideNav
