import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['700'],
  subsets: ['latin'],
})


const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="size-7 rounded-full bg-[#7ffc8f]"></div>
      <div className={`${inter.className} font-[700] text-white`}>
        CoinShelter
      </div>
    </div>
  )
}
export default Logo
