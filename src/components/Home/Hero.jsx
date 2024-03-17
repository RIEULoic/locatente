import Image from "next/image";
import { lobster } from "@/app/fonts";
import HeroNavbar from "./HeroNavbar";

function Hero(params) {
  return (
    <div className="lg:h-screen h-[80vh] relative mt-[88px]">
      <Image
        priority="true"
        src="/images/hero.jpg"
        alt="car with a tent"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        className={`${lobster.className} text-5xl font-bold p-5 text-slate-300 absolute top-0 left-0 m-10 tracking-widest`}
      >
        Louez votre tente de toit et partez à l'aventure
      </div>
      <HeroNavbar />
    </div>
  );
}

export default Hero;
