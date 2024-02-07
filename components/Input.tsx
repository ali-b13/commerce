"use client";
import { AnyCnameRecord } from "dns";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: any;
  apiError?:string|null;
}
const Input: React.FC<InputProps> = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	register,
	required,
	errors,
  apiError
}) => {
  console.log(errors,"erros")
	return (
		<div className="w-full relative">
			{formatPrice && (
				<BiDollar
					className="text-neutral-700 absolute top-5 left-2"
					size={18}
				/>
			)}
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`
        peer
        w-full
         p-3
         pt-4
        font-light
         bg-white 
         border-2 
         rounded-md 
         outline-none
         transition 
        disabled:cursor-not-allowed 
      disabled:opacity-70 
      ${formatPrice ?" pl-9": "pl-4"}
      ${errors[id] ?" border-rose-500": "border-neutral-300"}
      ${errors[id] ?" focus:border-rose-500": "focus:border-neutral-900"}
      `}
			/>
      <label className={`
      absolute 
      top-5 
      text-md
      z-10
      duration-150
      transform
      text-neutral-600
      pl-3
      pt-1
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-[-5px]
      peer-focus:scale-75
      peer-focus:translate-y-[-1.1rem]
      hidden
      origin-[0]
      peer-placeholder-shown:block
      ${formatPrice? "left-9" :"left-4"}
      `}>{label}</label>
      <div className="text-center">{apiError&& <span className=" rounded-md text-red-800">{apiError}</span>}</div>
       <div className="text-center">{errors[id]&& <span className=" rounded-md text-red-800">{errors[id].message}</span>}</div>
		</div>
	);
};

export default Input;
