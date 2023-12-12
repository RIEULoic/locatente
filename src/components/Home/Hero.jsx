import Image from "next/image";
import { lobster } from "@/app/fonts";
import HeroNavbar from "./HeroNavbar";

function Hero(params) {
  return (
    <div className="lg:h-screen h-[80vh] relative">
      <Image
        priority="true"
        src="/hero.jpg"
        alt="car with a tent"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        className={`${lobster.className} text-4xl font-bold p-5 text-slate-300 absolute top-0 left-0 m-10 tracking-widest`}
      >
        Louez votre tente de toit et partez à l'aventure
      </div>
      <div className=" bg-white px-2 border-2 border-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 my-40 rounded-full">
        <HeroNavbar />
      </div>
    </div>
  );
}

export default Hero;
