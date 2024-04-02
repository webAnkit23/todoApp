import React from 'react'
import { FaClipboardList } from "react-icons/fa";
export default function Header() {
  return (
    <div className='animate-[translate_.7s_ease-in-out_1.5s_backwards] flex items-center justify-center p-2 text-[50px] cursor-pointer font-semibold font-sans text-blue-700 gap-1 '>
        <h1 className='italic text-transparent underline drop-shadow-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>My Todo-s</h1>
        <FaClipboardList color='#3b82f6'/>
    </div>
  )
}
