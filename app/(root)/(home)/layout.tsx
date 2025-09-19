import React from 'react'
import NavBar from '@/components/Navbar'
import SideBar from '@/components/Sidebar'
    
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative'>
        <NavBar />
        <div className='flex'>
            <SideBar />
    
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-4 pt-28 max-md: pb-14 sm:px-14'>

                <div className='w-full '>
                    {children}
                </div>
            </section>
        </div>
        footer
    </main>
  )
}

export default HomeLayout
