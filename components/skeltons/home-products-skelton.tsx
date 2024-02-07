export const DeskTopHomeProductsSkeleton = () => {
  return (
   
    <div className="w-full h-full flex gap-6">
      {/* Big item skeleton */}
      <div className="bg-neutral-100 p-4  w-[70%] rounded-lg shadow-md animate-pulse ">
        {/* Big item content */}
        <div className="w-full h-[50vh] bg-neutral-300 mb-4"></div>
        <div className="h-4 bg-neutral-200"></div>
      </div>

      {/* Two items stacked on top of each other */}
      <div className="flex gap-4 flex-col  w-[30%] ">
        {/* Item 1 skeleton */}
        <div className="bg-neutral-100 p-4 rounded-lg shadow-md animate-pulse">
          {/* Item 1 content */}
          <div className="w-full h-[25vh] bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>

        {/* Item 2 skeleton */}
        <div className="bg-neutral-100 p-4 rounded-lg shadow-md animate-pulse">
          {/* Item 2 content */}
          <div className="w-full h-[25vh] bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
      </div>

     
    </div>
     
  
  );
};


export const CarouselProductsSkeleton=()=>{
    return(
        <div className="w-full  flex flex-row gap-4">
                 
         <div className="bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className=" bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className="hidden md:block bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className="hidden md:block bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className= "hidden md:block bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        
        
      
        </div>
    )
}





export const SearchProductsSkelton=()=>{
    return(
       <>
        <ItemsCarousel/>
         <ItemsCarousel/>
          <ItemsCarousel/>
       </>
    )
}




const ItemsCarousel=()=>{
    return(
        <div className="w-full  flex flex-row gap-4">
                 
         <div className="bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className=" bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className=" bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className="  bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        <div className= " bg-neutral-100 h-60 w-80 p-4 rounded-lg shadow-md animate-pulse">
          
          <div className="w-full h-32 bg-neutral-300 mb-4"></div>
          <div className="h-4 bg-neutral-200"></div>
        </div>
        
        
      
        </div>
    )
}