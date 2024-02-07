export const DeskTopNavbarSkeleton = () => {
  return (
    <nav className="w-full bg-neutral-100 p-4 flex items-center justify-between">
      <div className="flex items-center text-white mx-4">
        {/* Left icon skeleton */}
        <div className="w-12 h-6 md:h-12 bg-neutral-300 rounded-full p-2  animate-pulse mr-4"></div>
        {/* Right icon skeleton */}
        <div className="hidden w-12 h-6 bg-neutral-300 rounded-lg p-2 animate-pulse ml-4 md:flex"></div>
        
      </div>
        <div className="flex items-center text-white mx-4">
        {/* Left icon skeleton */}
        <div className="w-12 h-6 bg-neutral-300 hidden md:flex rounded-lg p-2  animate-pulse mr-4"></div>
        {/* Right icon skeleton */}
        <div className="w-12 h-6  bg-neutral-300 rounded-lg p-2 animate-pulse ml-4"></div>
         <div className="w-12 h-6 bg-neutral-300  rounded-lg p-2 animate-pulse ml-4"></div>
        
      </div>
      <div className="hidden flex-grow mx-4 md:flex">
        {/* Search bar skeleton */}
        <div className="w-full bg-neutral-200 rounded p-4 animate-pulse"></div>
      </div>

      <div className="flex items-center">
        {/* Button 1 skeleton */}
        <div className="bg-neutral-200 hidden md:flex text-white w-12 px-4 py-2 rounded animate-pulse mr-4"></div>
        {/* Button 2 skeleton */}
        <div className="bg-neutral-200 hidden md:flex text-white w-12 px-4 py-2 rounded animate-pulse"></div>
      </div>
       <div className="w-12 h-12 mx-6 bg-neutral-300 rounded-2xl p-2 animate-pulse ml-4"></div>
    </nav>
  );
};

export const MobileNavBarSkelton = () => {
  return (
    <nav className="w-full bg-neutral-100 p-4 flex items-center justify-between">
      <div className="flex items-center text-white mx-4">
        {/* Left icon skeleton */}
        <div className="w-12 h-12 bg-neutral-300 rounded-full p-2  animate-pulse mr-4"></div>
        
      </div>
       
        <div className="w-full bg-neutral-200 rounded p-4 animate-pulse"></div>

     
       <div className="w-12 h-12 mx-6 bg-neutral-300 rounded-2xl p-2 animate-pulse ml-4"></div>
    </nav>
  );
};

