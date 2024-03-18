"use client";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import CarCard from "./CarCard";
import AgencyCard from "./AgencyCard";

export default function Carousel({ title, catchPhrase, carCarousel }) {
  const vehicles = [
    {
      id: 1,
      image: "/images/pic_test8.jpg",
      name: "Renault Caca EGOE V1",
      features: {
        seats: 5,
        beds: 4,
        tent: true,
        fridge: false,
        shower: false,
        toilet: false,
      },
      price: 120,
    },
    {
      id: 2,
      image: "/images/pic_test7.jpg",
      name: "Renault Caca EGOE V2",
      features: {
        seats: 4,
        beds: 3,
        tent: false,
        fridge: true,
        shower: true,
        toilet: true,
      },
      price: 500,
    },
    {
      id: 3,
      image: "/images/pic_test6.jpg",
      name: "Renault Caca EGOE V3",
      features: {
        seats: 6,
        beds: 6,
        tent: true,
        fridge: true,
        shower: true,
        toilet: true,
      },
      price: 140,
    },
    {
      id: 4,
      image: "/images/pic_test5.jpg",
      name: "Renault Caca EGOE V4",
      features: {
        seats: 5,
        beds: 5,
        tent: false,
        fridge: false,
        shower: true,
        toilet: false,
      },
      price: 90,
    },
    {
      id: 5,
      image: "/images/pic_test4.jpg",
      name: "Renault Caca EGOE V5",
      features: {
        seats: 4,
        beds: 4,
        tent: true,
        fridge: true,
        shower: false,
        toilet: true,
      },
      price: 200,
    },
    {
      id: 6,
      image: "/images/pic_test3.jpg",
      name: "Renault Caca EGOE V6",
      features: {
        seats: 6,
        beds: 6,
        tent: true,
        fridge: true,
        shower: true,
        toilet: true,
      },
      price: 140,
    },
    {
      id: 7,
      image: "/images/pic_test2.jpg",
      name: "Renault Caca EGOE V7",
      features: {
        seats: 5,
        beds: 5,
        tent: false,
        fridge: false,
        shower: true,
        toilet: false,
      },
      price: 90,
    },
    {
      id: 8,
      image: "/images/pic_test1.jpg",
      name: "Renault Caca EGOE V8",
      features: {
        seats: 4,
        beds: 4,
        tent: true,
        fridge: true,
        shower: false,
        toilet: true,
      },
      price: 200,
    },
  ];

  const agencies = [
    {
      id: 1,
      city: "Paris",
      image: "/images/city_pics/paris.jpg",
    },
    {
      id: 2,
      city: "Lyon",
      image: "/images/city_pics/lyon.jpg",
    },
    {
      id: 3,
      city: "Marseille",
      image: "/images/city_pics/marseille.jpg",
    },
    {
      id: 4,
      city: "Bordeaux",
      image: "/images/city_pics/bordeaux.jpg",
    },
    {
      id: 5,
      city: "Lille",
      image: "/images/city_pics/lille.jpg",
    },
    {
      id: 6,
      city: "Nantes",
      image: "/images/city_pics/nantes.jpg",
    },
    {
      id: 7,
      city: "Strasbourg",
      image: "/images/city_pics/strasbourg.jpg",
    },
    {
      id: 8,
      city: "Toulouse",
      image: "/images/city_pics/toulouse.jpg",
    },
    {
      id: 9,
      city: "Nice",
      image: "/images/city_pics/nice.jpg",
    },
    {
      id: 10,
      city: "Montpellier",
      image: "/images/city_pics/montpellier.jpg",
    },
  ];

  useEffect(() => {
    register();
  }, []);
  console.log(carCarousel);
  return (
    <div className="mb-40">
      <div className="mx-80 mb-4 flex justify-between">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold">{title}</div>
          <div className="mt-2 text-xl text-neutral-500">{catchPhrase}</div>
        </div>
        <div>
          <button className="btn btn-info m-2 rounded-full">
            Voir tout nos véhicules
          </button>
        </div>
      </div>

      <div className="mx-80 ">
        <swiper-container
          className="mySwiper  "
          space-between="45"
          slides-per-view="3.2"
          navigation="true"
        >
          {carCarousel
            ? vehicles.map((vehicle) => {
                return (
                  <swiper-slide key={vehicle.id}>
                    <CarCard vehicle={vehicle} />
                  </swiper-slide>
                );
              })
            : agencies.map((agency) => {
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
