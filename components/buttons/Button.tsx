"use client";
import React from 'react'
import { IconType } from 'react-icons';
interface ButtonProps{
  onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;
  label:string;
  disabled?:boolean
  outline?:boolean;
  small?:boolean;
  icon?:IconType
}

const Button :React.FC<ButtonProps>= ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon:Icon
}) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className={`
    relative 
    w-full
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    ${outline ? "bg-white":"bg-blue-500"}
    ${outline ? "border-black":"border-blue-300"}
    ${outline ? "text-black":"text-white"}
    ${small ? "py-2":"py-3"}
    ${small ? "text-sm":"text-md"}
    ${small ? "font-light":"font-semibold"}
    ${small ? "border-[1px]":"border-2"}
    `}
    >{label}
    {Icon&&(
      <Icon
      size={20}
      className='absolute left-4 top-2 '
      />
    )}
    </button>
  )
}

export default Button