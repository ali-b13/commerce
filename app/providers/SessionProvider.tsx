"use client";
import { SessionContext, SessionProvider } from 'next-auth/react';
import React, { Children, useEffect } from 'react'

const Provider = ({children,session}:any) => {

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider