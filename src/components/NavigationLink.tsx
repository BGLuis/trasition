'use client'
import { animatePageOut } from '@/utils/animations'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface NavigationProps{
    href: string
    label: string
}

export default function NavigationLink({href, label}:NavigationProps) {
    const router = useRouter()
    const pathname = usePathname()
    const handleClick = () =>{
        if(pathname != href){
            animatePageOut(href,router)
        }
    }
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}