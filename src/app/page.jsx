"use client";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

import Image from "next/image";
import { lobster, local } from "@/app/fonts";

import Hero from "@/components/Home/Hero";
import Carousel from "@/components/Carousel";
import VideoComponent from "./ui/VideoComponent";

export default function Home() {
  const [carList, setCarList] = useState([]);
  const [agencyList, setAgencyList] = useState([]);

  const fetchVehicles = async () => {
    const query = gql`
      query Vehicles {
        vehicles(first: 65) {
          id
          price
          name
          brand
          image {
            id
            url
          }
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
          createdAt
          updatedAt
          goToTheCarCarousel
        }
      }
    `;
    try {
      const data = await request(
        "https://api-ap-south-1.hygraph.com/v2/clu3n13wt0dsm07upg0ccd3nh/master",
        query
      );
      //console.log(data.vehicles);
      setCarList(data.vehicles);
      //console.log(carList);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAgencies = async () => {
    const query = gql`
      query Agencies {
        agencies {
          city
          id
          image {
            id
            url
          }
        }
      }
    `;
    try {
      const data = await request(
        "https://api-ap-south-1.hygraph.com/v2/clu3n13wt0dsm07upg0ccd3nh/master",
        query
      );
      //console.log(data.agencies);
      setAgencyList(data.agencies);
      //console.log(agencyList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
    fetchAgencies();

    //console.log("fetching data");
  }, []);

  return (
    <div>
      <div className="relative">
        <Hero />
      </div>
      <div
        id="cars-for-sale"
        className="mx-auto mt-10 h-[80vh]"
        style={{ width: "50%" }}
      >
        <div
          className="hero items-start  rounded-box shadow-2xl border-solid border-2"
          style={{
            backgroundImage: "url(/images/luminescent_sky.jpg)",
            height: "90%",
            borderColor: "#7C3AED",
          }}
        >
          <div className="hero-content text-center text-neutral-content mt-10 ">
            <div className="max-w-md">
              <div className="mb-10 text-5xl font-bold">
                Achetez votre véhicule tout équipé
              </div>

              <button className="btn  border-zinc-300 bg-zinc-200 ">
                Découvrez nos véhicules à la vente
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center mb-10">
        <div className="font-lobster text-4xl mb-5" style={{ width: "50%" }}>
          Pourquoi choisir Locatente ?
        </div>
        <p className=" text-2xl" style={{ width: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Faucibus purus in
          massa tempor. Sed sed risus pretium quam vulputate dignissim
          suspendisse in. Nec feugiat nisl pretium fusce. Consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis. Pellentesque elit
          eget gravida cum sociis natoque penatibus et magnis. Lacus viverra
          vitae congue eu consequat ac felis.
        </p>
      </div>

      <div className="flex justify-center">
        <div
          className="flex  justify-center rounded-full border-solid border-2  py-8"
          style={{ width: "95%", borderColor: "#7C3AED" }}
        >
          <div className="flex justify-around  ">
            <div
              className="flex flex-col items-center "
              style={{ width: "15%" }}
            >
              <Image
                src="/images/agency_icon.png"
                alt="icon of agency building"
                width={64}
                height={64}
                href="https://www.flaticon.com/free-icons/branch"
              />

              <div
                className="text-xl my-5 font-bold"
                style={{ width: "auto", height: "auto" }}
              >
                De Nombreuses Agences
              </div>
              <div
                className=" text-center text-slate-600"
                style={{ width: "auto", height: "auto" }}
              >
                10 agences à votre disposition pour être au plus proche de chez
                vous
              </div>
            </div>
            <div
              className="flex flex-col items-center "
              style={{ width: "15%" }}
            >
              <Image
                src="/images/car_tent_icon.png"
                alt="car icon with tent"
                width={64}
                height={64}
                href="https://www.flaticon.com/free-icons/tent"
              />

              <div
                className="text-xl my-5 font-bold"
                style={{ width: "auto", height: "auto" }}
              >
                Louer Tout Équipé
              </div>
              <div
                className="text-center text-slate-600"
                style={{ width: "auto", height: "auto" }}
              >
                Tente de toit, accessoires de camping et appli smartphone inclus
              </div>
            </div>

            <div
              className="flex flex-col items-center "
              style={{ width: "15%" }}
            >
              <Image
                src="/images/odometer_icon.png"
                alt="odometer icon"
                width={64}
                height={64}
                href="https://www.flaticon.com/free-icons/kilometers"
              />

              <div
                className="text-xl my-5 font-bold"
                style={{ width: "auto", height: "auto" }}
              >
                Kilométrage illimité
              </div>
              <div
                className="text-center text-slate-600"
                style={{ width: "auto", height: "auto" }}
              >
                Partez à l'aventure sans vous soucier du kilométrage
              </div>
            </div>
            <div
              className="flex flex-col items-center "
              style={{ width: "15%" }}
            >
              <Image
                src="/images/calm_icon.png"
                alt="calm_icon"
                width={64}
                height={64}
                href="https://www.flaticon.com/free-icons/calm"
              />

              <div
                className="text-xl my-5 font-bold"
                style={{ width: "auto", height: "auto" }}
              >
                Partez En Toute Sérénité
              </div>
              <div
                className="text-center text-slate-600"
                style={{ width: "auto", height: "auto" }}
              >
                Assurance et assistance 24h/7j incluses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rental-cars">
        <Carousel carCarousel={true} carList={carList} />
      </div>

      <div id="agencies">
        <Carousel carCarousel={false} agencyList={agencyList} />
      </div>

      <div className="flex flex-col justify-center mx-80 mb-20 mt-40">
        <div className={`font-lobster text-4xl   `} style={{ width: "50%" }}>
          Découvrez notre vidéo de présentation
        </div>
        <div className="mt-2 mb-12 text-xl text-neutral-500">
          Évadez-vous avec la vanlife
        </div>
        <div className="flex justify-center ">
          <div className=" rounded-3xl overflow-hidden">
            <VideoComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
