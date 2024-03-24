import Image from "next/image";
import { lobster } from "@/app/fonts";
import HeroNavbar from "./HeroNavbar";

function Hero(params) {
  return (
    <div className="lg:h-screen h-[80vh] relative mt-[104px] z-40">
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
        className={`${lobster.className} text-6xl font-bold p-5 text-slate-300 absolute mx-40 mt-5 tracking-widest`}
      >
        Louez votre véhicule aménagé et partez à l'aventure
      </div>
      <HeroNavbar />
    </div>
  );
}

export default Hero;
