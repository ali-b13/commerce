import Navbar from "@/components/navbar";
import Image from "next/image";
import { ThreeItemGrid } from "@/components/layout/grid/threeItems";
import { Suspense } from "react";
import { Carousel } from "@/components/carousel";
export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Please wait...</div>}>
    <ThreeItemGrid/>
      <Carousel/>
    </Suspense>
    </>
  );
}
