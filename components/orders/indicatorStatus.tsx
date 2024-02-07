import { formatDateToLocal } from '@/app/lib/utils'
import React, { Suspense } from 'react'

export const IndicatorStatusMobile = ({status}:any) => {
  return (
     <Suspense fallback={<div>...</div>}>
      <div className="flex flex-col items-center">
    {status.length>0?(
      <>
      <div className="flex flex-col items-center">
    <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-300"></div>
    <p className="text-xs text-gray-500">{status[0].name}</p>
    <p className="text-xs text-gray-500">Order placed on {formatDateToLocal(status[0].createdAt)}</p>
  </div>
{
  status[1]?(
    <div className="flex flex-col items-center mt-6">
      <div className="h-4 w-0.5 bg-gray-300"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-300"></div>
      <p className="text-xs text-gray-500 mt-1">{status[1].name}</p>
      <p className="text-xs text-gray-500">Dispatched on {formatDateToLocal(status[1].createdAt)}</p>
  </div>
  ):null
}
  {
    status[2]?(
      <div className="flex flex-col items-center mt-6">
       <div className="h-4 w-0.5 bg-gray-300"></div>
       <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-300"></div>
       <p className="text-xs text-gray-500 mt-1">{status[2].name}</p>
       <p className="text-xs text-gray-500">Expected delivery on {formatDateToLocal(status[2].createdAt)}</p>
     </div>
    ):null
  }
 {
  status[3]?(
     <div className="flex flex-col items-center mt-6">
    <div className="h-4 w-0.5 bg-gray-300"></div>
    <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-300"></div>
    <p className="text-xs text-gray-500 mt-1">{status[3].name}</p>
    <p className="text-xs text-gray-500">Delivered on {formatDateToLocal(status[3].createdAt)}</p>
  </div>
  ):null
 }
      </>
    ):null}
</div>
     </Suspense>
  )
}




