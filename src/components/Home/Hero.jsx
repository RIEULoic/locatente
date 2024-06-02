import Image from "next/image";
import { lobster } from "@/app/fonts";
import RentalFormContainer from "./RentalFormContainer";

function Hero() {
  return (
    <div className="h-screen relative mt-[104px] z-40">
      <div
        id="rental-form-container"
        className=" absolute bottom-0 left-1/2 -translate-x-1/2 mb-40 "
      >
        <RentalFormContainer />
      </div>
      <Image
        priority={true}
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
    </div>
  );
}

export default Hero;
