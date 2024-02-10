"use client";
import {AiOutlineMenu} from 'react-icons/ai'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SessionProp } from '@/app/lib/data/types';

interface UserOptionsProps{
  session:SessionProp|null,
  closeAction?:()=>void;
}
const UserOption:React.FC<UserOptionsProps> = ({session,closeAction}) => {
  const userRegisterModal=useRegisterModal();
  const userLoginModal=useLoginModal();
  const handleOpenLoginModel=()=>{
      if(closeAction){
        closeAction();
       
       }
        userLoginModal.onOpen()
  }
   const handleOpenRegisterModel=()=>{
       if(closeAction){
        closeAction();
       
       }
        userRegisterModal.onOpen()
  }
  return (
    <>
    {!session?.user.name? (
        <>
          <MenuItem
      onClick={handleOpenLoginModel}
      label={"Login"}
      />
       <MenuItem
      onClick={handleOpenRegisterModel}
      label={"Register"}
      />  
        </>
    ) : <>
        <MenuItem
      onClick={()=>signOut()}
      label={"Log Out"}
      />  
        </>
    }
    </>
  )
}

export default UserOption