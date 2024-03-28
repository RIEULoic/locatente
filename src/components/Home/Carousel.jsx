"use client";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { lobster } from "@/app/fonts";
import CarCard from "./CarCard";
import AgencyCard from "./AgencyCard";

export default function Carousel({ carCarousel, carList, agencyList }) {
  useEffect(() => {
    register();
    //console.log(agencyList);
  }, []);
  // console.log(carCarousel);
  return (
    <div className="mt-40 mx-80">
      <div className=" mb-12 flex justify-between">
        <div className="flex flex-col">
          <div className={`text-4xl font-semibold ${lobster.className}`}>
            {carCarousel ? "Nos Véhicules Aménagés" : "Nos Agences"}
          </div>
          <div className="mt-2 text-xl text-neutral-500">
            {carCarousel
              ? "Le modèle conçu selon vos envies"
              : "Retrouvez-nous tout près de chez vous"}
          </div>
        </div>
        <div>
          <button className="btn bg-violet-500 border-violet-600 m-2 rounded-full">
            {carCarousel
              ? "Voir tout nos véhicules"
              : "Voir toutes nos agences"}
          </button>
        </div>
      </div>

      <div>
        <swiper-container
          className="mySwiper"
          space-between="45"
          slides-per-view={carCarousel ? "3.2" : "4.3"}
          navigation="true"
        >
          {carCarousel
            ? carList.map((vehicle) => {
                return (
                  <swiper-slide key={vehicle.id}>
                    <CarCard vehicle={vehicle} />
                  </swiper-slide>
                );
              })
            : agencyList.map((agency) => {
                return (
                  <swiper-slide key={agency.id}>
                    <AgencyCard agency={agency} />
                  </swiper-slide>
                );
              })}
        </swiper-container>
      </div>
    </div>
  );
}
