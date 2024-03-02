import { type ReactNode } from 'react'
import SideNav from './_components/SideNav'
import TopNav from './_components/TopNav'

import './styles/scrollbars.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${inter.className} flex h-full w-full flex-row selection:!bg-[#74fe828a] selection:text-black`}
    >
      <SideNav />
      <div id='scrollbar-container' className="flex grow flex-col overflow-y-scroll">
        <TopNav />
        {children}
      </div>
    </div>
  )
}
export default layout
