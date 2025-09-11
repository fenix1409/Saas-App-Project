"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My journey', href: '/my-journey' },
    { label: 'Sign In', href: '/sign-in' }
]

const NavItems = () => {
    const pathname = usePathname()

    return (
        <nav className='flex items-center gap-4'>
            {links.map(({ label, href }) => (
                <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>{label}</Link>
            ))}
        </nav>
    )
}

export default NavItems