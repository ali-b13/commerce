"use client";
import {AiOutlineMenu} from 'react-icons/ai'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SessionProp } from '@/app/lib/data/types';

interface UserOptionsProps{
  session:SessionProp|null
}
const UserOption:React.FC<UserOptionsProps> = ({session}) => {
  const userRegisterModal=useRegisterModal();
  const userLoginModal=useLoginModal();

  return (
    <>
    {!session?.user.name? (
        <>
          <MenuItem
      onClick={userLoginModal.onOpen}
      label={"Login"}
      />
       <MenuItem
      onClick={userRegisterModal.onOpen}
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