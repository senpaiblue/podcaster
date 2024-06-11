"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className='left_sidebar'>
      <nav className='flex flex-col'>
       <Link href="/" className='flex flex-row gap-5 cursor-pointer pb-10 items-center max-lg:justify-center'>
       <Image src="/icons/logo.svg" alt='logo' width={22} height={22}/>
       <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcaste</h1>
       </Link>
       {sidebarLinks.map(({route,label,imgURL})=>{
        const isActive = pathname === route || pathname.startsWith(`${route}/`)
        return <Link href={route} key={label} className={cn('flex gap-2 items-center justify-center lg:justify-start py-4 max-lg:px-4 ',{'bg-nav-focus border-r-4 border-orange-1':isActive})}>
         <Image src={imgURL} alt={label} width={16} height={22}/>
          {label}
        </Link>
       })}
      </nav>
    </section>
  )
}

export default LeftSidebar
