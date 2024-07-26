"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import Image from "next/image";
import RentalFormContainer from "@/components/RentalFormContainer";
import AgencyCarCard from "@/components/AgencyCarCard";
import CarsFilter from "@/components/CarsFilter";

export default function Page({ params }) {
  const [filteredVehicles, setFilteredVehicles] = useState(null);
  const [agencyData, setAgencyData] = useState(null);
  const [carsFilterData, setCarsFilterData] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleVehiclesFilterData = (data) => {
    // console.log(data);
    setCarsFilterData(data);
    setIsFiltering(true);
  };

  const handleScrollToMap = () => {
    const mapDiv = document.getElementById("map");

    window.scrollTo({
      top: mapDiv.offsetTop - 250,
      behavior: "smooth",
    });
  };

  const handleScrollToCarCards = () => {
    const carCardsDiv = document.getElementById("car-cards");

    window.scrollTo({
      top: carCardsDiv.offsetTop - 250,
      behavior: "smooth",
    });
  };

  const fetchAgency = async () => {
    const query = gql`
      query Agency {
        agency(where: { id: "${params.agencyCity}" }) {
          id
          adress
          city
          tel
          image {
            id
            url
          }
          vehicles(first: 20) {
            id
            name
            price
            brand
            features {
              beds
              fridge
              seats
              tent
              water
              wc
            }
            agency {
              city
            }
            image {
              id
              url
            }
          }
        }
      }
    `;
    try {
      const data = await request(
        "https://api-ap-south-1.hygraph.com/v2/clu3n13wt0dsm07upg0ccd3nh/master",
        query
      );
      // console.log(data);
      setAgencyData(data);
      setFilteredVehicles(data.agency.vehicles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(params);
    fetchAgency();
  }, []);

  // useEffect(() => {
  //   if (agencyData !== null) {
  //     console.log(agencyData.agency.vehicles);
  //   }
  // }, [agencyData]);

  if (!agencyData)
    return (
      <div className="h-screen relative">
        <div className="h-4/6 mx-10 relative mt-[104px] grid grid-rows-5 grid-cols-2 pt-10   ">
          <div className=" row-span-1 col-span-1 "></div>
          <div className=" row-span-5 col-span-1 ">
            <div className="skeleton rounded-3xl  w-full h-full relative"></div>
          </div>
          <div className=" row-span-1 col-span-1 "></div>
          <div className="row-span-1  flex justify-center  ">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="h-screen relative">
        <div className="h-4/6 mx-10 relative mt-[104px] grid grid-rows-5 grid-cols-2 pt-10   ">
          <div className=" row-span-1 col-span-1 "></div>
          <div className=" row-span-5 col-span-1 ">
            <div className=" rounded-3xl  w-full h-full relative">
              <Image
                src={agencyData.agency.image.url}
                alt={agencyData.agency.city}
                quality={50}
                sizes="33vw"
                fill
                //Rajout de priority pour éviter un warning en console
                priority
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
          <div className=" row-span-3  col-span-1 ">
            <div className="font-lobster text-5xl text-center ">
              Louez votre véhicule aménagé à {agencyData.agency.city} !
            </div>
            <div className="flex flex-col  items-center p-14">
              <div className="flex  mt-10 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div className="ml-2 text-slate-600 text-xl">
                  {agencyData.agency.adress}
                </div>
              </div>

              <div className="flex  mt-5 items-center">
                <Image
                  src="/images/clock_icon.png"
                  alt="clock icon created by dmitri13"
                  width={20}
                  height={20}
                  href="https://www.flaticon.com/free-icons/clock"
                  //Rajout de style pour éviter un warning en console
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="ml-4 text-slate-600 text-xl">
                  Lundi au Samedi: 9h-12h / 14h-18h
                </div>
              </div>

              <div className="flex mt-5 items-center">
                <Image
                  src="/images/phone_icon.png"
                  alt="phone icon"
                  width={20}
                  height={20}
                  href="https://www.flaticon.com/free-icons/phone"
                  //Rajout de style pour éviter un warning en console
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="ml-4 text-slate-600 text-xl">
                  {agencyData.agency.tel}
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 flex justify-evenly">
            <button
              className="btn btn-active-color m-2 rounded-full"
              onClick={handleScrollToMap}
            >
              Localiser sur la carte
            </button>
            <button
              className="btn btn-active-color m-2 rounded-full"
              onClick={handleScrollToCarCards}
            >
              voir les véhicules dispo
            </button>
          </div>
        </div>
        <div
          id="rental-form-container"
          className=" absolute bottom-40 left-1/2 -translate-x-1/2  "
        >
          <RentalFormContainer />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex flex-col px-10 pt-10 pb-2 border-solid border-4 rounded-3xl"
          style={{ borderColor: "#7C3AED", width: "98%" }}
          id="car-cards"
        >
          <CarsFilter
            data={agencyData.agency.vehicles}
            onData={handleVehiclesFilterData}
          />
          {isFiltering === false
            ? filteredVehicles.map((vehicle) => {
                // console.log(carsFilterData);
                return (
                  <div key={vehicle.id}>
                    <AgencyCarCard vehicle={vehicle} />
                  </div>
                );
              })
            : carsFilterData.map((vehicle) => {
                // console.log(vehicle);
                return (
                  <div key={vehicle.id}>
                    <AgencyCarCard vehicle={vehicle} />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="flex justify-center  mb-20 mt-20" id="map">
        <div className="w-2/5 h-1/2">
          <div className=" rounded-3xl overflow-hidden">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              width={800}
              height={400}
              mode="place"
              q={agencyData.agency.adress}
            />
          </div>
        </div>
      </div>
    </>
  );
}
