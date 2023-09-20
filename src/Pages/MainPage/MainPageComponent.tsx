import React from "react";

export default function MainPageComponent() {
  return (
    <div className=" mt-36 ml-20">
      <p className=" tracking-widest leading-8 w-3/5 text-2xl">Step into a realm of grace and allure with <span className=" text-cyan-700">Diana Abramyuk</span>. Each stride, a brushstroke of elegance; each glance, a captivating tale. Discover the poetry of movement and the artistry of style. Welcome to a world where beauty knows no bounds, and inspiration awaits in every pose.</p>
      <div className=" absolute right-60 top-44 -z-[3] bg-black w-fit h-fit opacity-30">
        <div className=" bg-[url('/img/login.jpg')] h-[500px] w-[700px] bg-cover bg-center -z-[4]">

        </div>
      </div>
      <div className="mt-44">
        <a href="https://www.instagram.com/">Instagramm</a>
      </div>
    </div>
  )
}
