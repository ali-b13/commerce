import Navbar from "@/components/navbar";
import Image from "next/image";
import { ThreeItemGrid } from "@/components/layout/grid/threeItems";
import { Suspense } from "react";
import { Carousel } from "@/components/carousel";
import { CarouselProductsSkeleton, DeskTopHomeProductsSkeleton } from "@/components/skeltons/home-products-skelton";

export default async function Home() {

  return (
    <>
    
    <Suspense fallback={<DeskTopHomeProductsSkeleton/>}>
    <ThreeItemGrid/>
    </Suspense>
    <Suspense fallback={<CarouselProductsSkeleton/>}>

      <Carousel/>
    </Suspense>
    </>
  );
}
