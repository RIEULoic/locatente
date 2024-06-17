"use client";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import CarCard from "./Home/CarCard";
import AgencyCard from "./Home/AgencyCard";
import Link from "next/link";

export default function Carousel({
  carCarousel,
  carList,
  agencyList,
  referedAgencies,
}) {
  useEffect(() => {
    register();
    //console.log(referedAgencies);
  }, []);
  // console.log(carCarousel);
  return (
    <div className={` ${referedAgencies ? "mt-16" : "mt-40 mx-80"} `}>
      <div className=" mb-12 flex justify-between">
        <div className="flex flex-col">
          <div className="text-4xl  font-lobster">
            {carCarousel
              ? "Nos Véhicules Aménagés"
              : referedAgencies
              ? "Ce modèle de véhicule est disponible dans les agences suivantes"
              : "Nos Agences"}
          </div>
          <div className="mt-2 text-xl text-neutral-500">
            {carCarousel
              ? "Le modèle conçu selon vos envies"
              : referedAgencies
              ? ""
              : "Retrouvez-nous tout près de chez vous"}
          </div>
        </div>
        <div>
          {carCarousel ? (
            <Link href="/cars">
              <button className="btn btn-active-color m-2 rounded-full">
                Voir tous nos véhicules
              </button>
            </Link>
          ) : (
            <Link href="/agencies">
              <button className="btn btn-active-color rounded-full m-2">
                Voir toutes nos agences
              </button>
            </Link>
          )}
        </div>
      </div>

      <div>
        <swiper-container
          className="mySwiper"
          space-between="45"
          slides-per-view={
            carCarousel ? "3.2" : referedAgencies ? "3.2" : "4.3"
          }
          // si referedAgencies est null ou undefined, il sera considéré comme false par javascript
          slides-per-group="2"
          number-of-slides="20"
          mousewheel="true"
          //navigation="true"
        >
          {carCarousel
            ? carList
                .filter((vehicle) => vehicle.goToTheCarCarousel)
                .map((vehicle) => {
                  return (
                    <swiper-slide key={vehicle.id}>
                      <Link href={`/cars/${vehicle.id}`}>
                        <CarCard vehicle={vehicle} />
                      </Link>
                    </swiper-slide>
                  );
                })
            : agencyList.map((agency) => {
                return (
                  <swiper-slide key={agency.id}>
                    <Link href={`/agencies/${agency.id}`}>
                      <AgencyCard agency={agency} />
                    </Link>
                  </swiper-slide>
                );
              })}
        </swiper-container>
      </div>
    </div>
  );
}
