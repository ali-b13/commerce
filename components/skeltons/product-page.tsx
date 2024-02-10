import React from 'react'

const ProductSkelton = () => {
  return (
     <div className="w-full h-[90vh]  flex gap-6">
      {/* Big item skeleton */}
      <div className="bg-neutral-100 p-4 md:ml-12 w-full md:w-[60%] rounded-lg shadow-md animate-pulse ">
        {/* Big item content */}
        <div className="w-full h-[70vh] md:h-[50vh] bg-neutral-300 mb-4"></div>
        <div className="h-4 bg-neutral-200"></div>
      </div>
      <div className='hidden md:flex bg-neutral-100 p-4 ml-12  flex-col gap-6 w-[60%] rounded-lg shadow-md animate-pulse '>
         <div className="w-full h-12 bg-neutral-300 mb-4"></div>
        <div className="h-4 bg-neutral-200"></div>
        <div className="h-4 bg-neutral-200"></div>
        <div className="h-4 w-32 bg-neutral-200"></div>
        <div className="h-4 bg-neutral-200"></div>
        <div className="h-4 bg-neutral-200"></div>
         <div className="h-4 w-32 bg-neutral-200"></div>
      </div>
       
    </div>
  )
}

export default ProductSkelton