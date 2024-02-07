"use client";
import React from 'react'
import Modal from './model'
import axios from 'axios'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useForm, SubmitHandler,FieldValues, Field } from "react-hook-form";
import { useState,useCallback } from 'react';
import {FcGoogle} from 'react-icons/fc'
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';
import Button from '../buttons/Button';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { authenticateUser } from '@/app/lib/data/actions/authenticate';
import { signIn } from 'next-auth/react';
const UserLoginModal = () => {
  const [message,setMessage]=useState<string|null>(null)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>({defaultValues:{email:"",password:""}});
  const [isLoading,setIsLoading]=useState(false)
 const isOpen=useLoginModal(state=>state.isOpen);
 const onOpen=useLoginModal(state=>state.onOpen);
 const onClose=useLoginModal(state=>state.onClose);
const RegisterModal=useRegisterModal()

const toggleModalToRegister=()=>{
  onClose()
  RegisterModal.onOpen()
}
 const onSubmit:SubmitHandler<FieldValues>=(data)=>{
   console.log(data,'inputs')
     setIsLoading(true);
     signIn("credentials",{email:data.email,password:data.password}).then((res:any)=>{
     if(res.error){
       setMessage(res.error.message)

     }
       if(!res?.error){
        toast.success("LoggedIn")
        onClose()
       }
       
     })
     .catch((err)=>
     {
      toast.error("Login failed")
    })
     
     .finally(()=>{
      setIsLoading(false)
     })
 }
 const contentBody=(
  
  <div className='flex flex-col  gap-4 '>
    <Heading title='Welcome Back' subtitle='Login To Your account !' center/>
    
    <Input 
    id={"email"}
     label="email" 
    disabled={isLoading}
    register={register}
    errors={errors}
    type='email'
    required
    />
     <Input 
    id={"password"}
     label="password" 
    disabled={isLoading}
    register={register}
    errors={errors}
    apiError={message}
    type='password'
    required
    />
  </div>
  
 )
 const footer=(
  <div className='flex flex-col gap-2'>
   <Button
   outline
   small
   label='Continue with Google'
   icon={FcGoogle}
   onClick={()=>signIn("google")}
   />
 
   <div className='flex flex-row gap-2 justify-center items-center  '>
    <div className='text-sm text-neutral-400 '>Don`t have an account </div>
    <div onClick={toggleModalToRegister} className='font-semibold text-neutral-500 cursor-pointer hover:underline'>Sign up</div>
   </div>
  </div>
 )
  return (
    <>

     <Modal isOpen={isOpen}
       onClose={onClose}
        actionLabel='Login'
        onSubmit={handleSubmit(onSubmit)}
       title='Login' body={contentBody}
      
       footer={footer}
       />
       
  
    </> 
  )
}

export default UserLoginModal