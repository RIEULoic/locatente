import Image from "next/image";
import { lobster } from "@/app/fonts";

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
        className={`${lobster.className} text-4xl font-bold p-5 text-slate-200 border-2 border-black absolute top-0 left-0 m-10 tracking-widest`}
      >
        Louez votre tente de toit et partez à l'aventure
      </div>
      <div className=" text-red-700 text-2xl p-5 font-bold border-2 border-black absolute bottom-0 left-1/2 transform -translate-x-1/2 my-40">
        Hero section locabar
      </div>
    </div>
  );
}

export default Hero;
