"use client";
import React from 'react'
import Modal from './model'
import axios from 'axios'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { useForm, SubmitHandler,FieldValues, Field } from "react-hook-form";
import { useState,useCallback } from 'react';
import {FcGoogle} from 'react-icons/fc'
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';
import Button from '../buttons/Button';
import useLoginModal from '@/app/hooks/useLoginModal'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod';
import { signIn } from 'next-auth/react';
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4,"password must be greater than 3 characters long"),
  confirmPassword:z.string().min(4,"password must be greater than 3 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
const UserRegisterModal = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>({
  defaultValues: { name: "", email: "", password: "" },
  resolver: zodResolver(schema), // pass the schema as an option
});
  const [isLoading,setIsLoading]=useState(false)
  const [apiError,setApiError]=useState(null)
 const isOpen=useRegisterModal(state=>state.isOpen);
 const onOpen=useRegisterModal(state=>state.onOpen);
 const onClose=useRegisterModal(state=>state.onClose);
 const LoginModal=useLoginModal()
 const toggleModalToRegister=()=>{
  onClose()
  LoginModal.onOpen()
}
 const onSubmit:SubmitHandler<FieldValues>=(data)=>{
     setIsLoading(true);
     axios.post("/api/register",data).then((res:any)=>{
      console.log(res,'response')
      if(res.status==200 ||res.status==201){
       
        signIn('credentials',{email:res.data.user.email,password:res.data.user.password}).then(()=>{

          onClose()
          toast.success("Registered successfully")
        }).catch(err=>{
          setApiError(err.message)
        })
      }
     })
     .catch((err)=>
     {
      setApiError(err.response.data.message)
      console.log(err.response.data,'error')
      toast.error("something went wrong")
    
    })
     
     .finally(()=>{
      setIsLoading(false)
     })
 }
 const contentBody=(
  
  <div className='flex flex-col  gap-4 '>
    <Heading title='Welcome To Arma E-commerce' subtitle='Create an account !' center/>
    
    <Input 
    id={"name"}
     label="Name" 
    disabled={isLoading}
    register={register}
    errors={errors}
    type='text'
    required
    />
     <Input 
    id={"password"}
     label="Password" 
    disabled={isLoading}
    register={register}
    errors={errors}
    type='password'
    required
    />
     <Input 
    id={"confirmPassword"}
     label="Confirm password" 
    disabled={isLoading}
    register={register}
    errors={errors}
    type='password'
    required
    />
    <Input 
    id={"email"}
     label="Email" 
    disabled={isLoading}
    register={register}
    errors={errors}
    type='email'
    required
    apiError={apiError}
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
    <div className='text-sm text-neutral-400 '>Already have an Account</div>
    <div onClick={toggleModalToRegister} className='font-semibold text-neutral-500 cursor-pointer hover:underline'>Login</div>
   </div>
  </div>
 )
  return (
    <>

     <Modal isOpen={isOpen}
       onClose={onClose}
        actionLabel='Sign up'
        onSubmit={handleSubmit(onSubmit)}
       title='Register' body={contentBody}
       footer={footer}
       />
       
  
    </> 
  )
}

export default UserRegisterModal