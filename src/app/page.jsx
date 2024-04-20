"use client";
import { request, gql } from "graphql-request";
import { Suspense, useEffect, useState } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
import { lobster } from "@/app/fonts";
import Loading from "@/components/Loading";
import Hero from "@/components/Home/Hero";
import Carousel from "@/components/Home/Carousel";
import VideoComponent from "./ui/VideoComponent";
import RentalFormContainer from "../components/Home/RentalFormContainer";

export default function Home() {
  const [carList, setCarList] = useState([]);
  const [agencyList, setAgencyList] = useState([]);
  const [isCarListLoading, setIsCarListLoading] = useState(true);
  const [isAgencyListLoading, setIsAgencyListLoading] = useState(true);
  //console.log(process.env.GOOGLE_API_KEY);
  const fetchVehicles = async () => {
    const query = gql`
      query Vehicles {
        vehicles {
          id
          price
          name
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
          createdAt
          updatedAt
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
      setIsCarListLoading(false);
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
      setIsAgencyListLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
    fetchAgencies();
    console.log("fetching data");
  }, []);
  return (
    <div>
      <div className="relative">
        <Hero />
        {/* <div id="rental-form-container">
          <RentalFormContainer />
        </div> */}
      </div>
      <div className="flex justify-center ">
        <Suspense fallback={<div>Loading...</div>}>
          <div className=" rounded-3xl overflow-hidden">
            <GoogleMapsEmbed
              apiKey={process.env.GOOGLE_API_KEY}
              height={200}
              width="100%"
              mode="place"
              q="Brooklyn+Bridge,New+York,NY"
            />
          </div>
        </Suspense>
      </div>

      <div className="mx-auto mt-10 h-[80vh]" style={{ width: "50%" }}>
        <div
          className="hero items-start  rounded-box shadow-2xl "
          style={{
            backgroundImage: "url(/images/luminescent_sky.jpg)",
            height: "90%",
          }}
        >
          <div className="hero-content text-center text-neutral-content mt-10">
            <div className="max-w-md">
              <h1 className="mb-10 text-5xl font-bold">
                Achetez votre véhicule tout équipé
              </h1>

              <button className="btn  border-zinc-300 bg-zinc-200 ">
                Découvrez nos véhicules à la vente
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <h1
          className={`${lobster.className} text-4xl font-bold  mb-5`}
          style={{ width: "50%" }}
        >
          Pourquoi choisir Locatente ?
        </h1>
        <p className="text-xl" style={{ width: "50%" }}>
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

      <div className="flex justify-around mb-44">
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
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
            className="text-center text-slate-600"
            style={{ width: "auto", height: "auto" }}
          >
            10 agences à votre disposition pour être au plus proche de chez vous
          </div>
        </div>
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
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

        <div className="flex flex-col items-center " style={{ width: "15%" }}>
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
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
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
            Assurance et assistance 24h/7j inclues
          </div>
        </div>
      </div>
      <div>
        {/* Apparement, <Suspense/> ne fonctionne pas. <Loading/> n'est jamais appelé. J'ai du mal à le croire (genre la connexion est tellement rapide que le fallback de <Suspense/> n'a pas le temps d'être utilisé) */}
        <Suspense fallback={<Loading />}>
          {!isCarListLoading && (
            <Carousel carCarousel={true} carList={carList} />
          )}
        </Suspense>
      </div>

      <div id="agencies">
        <Suspense fallback={<Loading />}>
          {!isAgencyListLoading && (
            <Carousel carCarousel={false} agencyList={agencyList} />
          )}
        </Suspense>
      </div>

      <div className="flex flex-col justify-center mx-80 mb-20 mt-40">
        <h1
          className={`${lobster.className} text-4xl font-semibold  `}
          style={{ width: "50%" }}
        >
          Découvrez notre vidéo de présentation
        </h1>
        <div className="mt-2 mb-12 text-xl text-neutral-500">
          Évadez-vous avec la vanlife
        </div>
        <div className="flex justify-center ">
          <Suspense fallback={<div>Loading...</div>}>
            <div className=" rounded-3xl overflow-hidden">
              <VideoComponent />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
