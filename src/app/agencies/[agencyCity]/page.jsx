"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

import { request, gql } from "graphql-request";
import { useEffect, useState, Suspense } from "react";

import Image from "next/image";
import RentalFormContainer from "@/components/Home/RentalFormContainer";
import { lobster } from "@/app/fonts";
import AgencyCarCard from "@/components/AgencyCarCard";

export default function Page({ params }) {
  const [dataAgency, setDataAgency] = useState(null);

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
      console.log(data.agency.vehicles);
      setDataAgency(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(params);
    fetchAgency();
  }, []);

  if (!dataAgency)
    return (
      <div className="h-1/2 mt-[104px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <>
      <div className="h-screen relative">
        <div className="h-4/6 mx-10 relative mt-[104px] grid grid-rows-4 grid-cols-2 pt-10   ">
          <div className=" row-span-1 col-span-1 "></div>
          <div className=" row-span-4 col-span-1 ">
            <div className="skeleton rounded-3xl  w-full h-full relative">
              <Image
                src={dataAgency.agency.image.url}
                alt={dataAgency.agency.city}
                quality={50}
                sizes="33vw"
                fill
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
          <div className=" row-span-2  col-span-1 ">
            <div
              className={`${lobster.className} text-4xl text-center font-bold`}
            >
              Louez votre sublime véhicule aménagé à {dataAgency.agency.city} !
            </div>
            <div className="flex  mt-10 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
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
                {dataAgency.agency.adress}
              </div>
            </div>
            <div className="flex pl-6 mt-5">
              <Image
                src="/images/phone_icon.png"
                alt="phone icon"
                width={20}
                height={20}
                href="https://www.flaticon.com/free-icons/phone"
              />
              <div className="ml-3 text-slate-600 text-xl">
                {dataAgency.agency.tel}
              </div>
            </div>
            <div className="flex pl-6 mt-5">
              <Image
                src="/images/clock_icon.png"
                alt="clock icon created by dmitri13"
                width={20}
                height={20}
                href="https://www.flaticon.com/free-icons/clock"
              />
              <div className="ml-2 text-slate-600 text-xl">
                Lundi au Samedi: 9h-12h / 14h-18h
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 ">
            Localiser sur la carte/ voir les véhicules dispo
          </div>
        </div>
        <div
          id="rental-form-container"
          className=" absolute bottom-40 left-1/2 -translate-x-1/2  "
        >
          <RentalFormContainer />
        </div>
      </div>

      <div className="flex flex-col px-16">
        {dataAgency.agency.vehicles.map((vehicle, index) => (
          <div key={index}>
            <AgencyCarCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <div className="flex justify-center  mb-20 mt-20">
        <div className="w-2/5 h-1/2">
          <Suspense fallback={<div>Loading...</div>}>
            <div className=" rounded-3xl overflow-hidden">
              <GoogleMapsEmbed
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                width={800}
                height={400}
                mode="place"
                q={dataAgency.agency.adress}
              />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}
