"use client";
import React from 'react'
interface Props {
  onClick:()=>void,
  label:string
}
const MenuItem:React.FC<Props> = ({onClick,label}) => {
  return (
    <div onClick={onClick} className='text-sm font-semibold  transition hover:text-neutral-500  text-center cursor-pointer'>
      {label}
    </div>
  )
}

export default MenuItem