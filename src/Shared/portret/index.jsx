import React from "react";
import GridWrapper from "../../Wrappers/gridwrapper";

export default function Portret() {

  return (
    <div className="w-full h-full pt-32 px-2 overflow-auto scrollable-content">
      <div className="w-full h-full">
        <GridWrapper>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover"></div>
          <div className=" h-60 col-span-2 bg-[url('/img/portret/long.jpg')] bg-cover bg-center">1</div>
          <div className=" h-60 col-span-2 bg-[url('/img/portret/long.jpg')] bg-cover bg-center">1</div>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover">1</div>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover">1</div>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover">1</div>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover">1</div>
          <div className=" h-60 bg-[url('/img/portret/short.jpg')] bg-cover">1</div>
          <div className=" h-60 col-span-2 bg-[url('/img/portret/long.jpg')] bg-cover bg-center">1</div>
        </GridWrapper>
      </div>
    </div>
  )
}
