'use client'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { Input } from './ui/input'
import Link from 'next/link'

function Navbar() {
  return (
    <header className='sticky backdrop-blur w-full p-4 flex justify-center'>
      <div className='container'>
        <div className='flex justify-between'>
        <Link href="/" className='flex items-center'>
          <ChevronLeft />
          <span>AlgoHub</span>
          <ChevronRight />
        </Link>
        <div className='hidden md:inline-block md:w-3/6'>
        <div className='relative'>
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="pl-8" placeholder='Search topics or questions...' />
        </div>
        </div>
        <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar