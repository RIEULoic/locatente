"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

import { request, gql } from "graphql-request";
import { useEffect, useState, Suspense } from "react";

import Image from "next/image";
import RentalFormContainer from "@/components/Home/RentalFormContainer";
import { lobster } from "@/app/fonts";
import AgencyCarCard from "@/components/AgencyCarCard";
import ScrollToTopButton from "@/components/ScrollTopButton";
import PopupWarning from "@/components/PopupWarning";

export default function Page({ params }) {
  const [dataAgency, setDataAgency] = useState(null);
  const [filterValues, setFilterValues] = useState({
    brands: [],
    places: [],
    beds: [],
  });
  // filterValues correspond à l'objet qui contient les valeurs possibles pour les filtres Marque, Places et Couchages.

  const [selectedFilters, setSelectedFilters] = useState([]);
  // selectedFilters correspond à l'objet qui contient les filtres sélectionnés par l'utilisateur.

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  // filteredVehicles correspond à la liste des véhicules filtrés par les filtres sélectionnés par l'utilisateur.

  // const filterOptions correspond à l'objet qui contient les options possibles pour chaque filtre. Par exemple, pour le filtre Marque, on a les options ["Renault", "Peugeot",...], pour le filtre Prix, on a les options ["Prix croissant", "Prix décroissant"], etc.
  const filterOptions = {
    Marque: filterValues.brands,
    Prix: ["Prix croissant", "Prix décroissant"],
    Places: filterValues.places
      .sort((a, b) => a - b)
      .map((place) => `${place} places`),
    Couchages: filterValues.beds
      .sort((a, b) => a - b)
      .map((bed) => `${bed} couchages`),
  };
  const checkboxOptions = ["Tente", "Frigo", "Eau", "WC"];

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
      // console.log(data.agency.vehicles);
      setDataAgency(data);
      setFilteredVehicles(data.agency.vehicles);

      const uniqueBrand = [
        ...new Set(data.agency.vehicles.map((vehicle) => vehicle.brand)),
      ];
      // new Set permet de créer un objet Set qui ne contient que des valeurs uniques. Ensuite, on transforme cet objet Set en tableau avec [...]. On récupère les marques uniques des véhicules de l'agence.
      const uniqueSeats = [
        ...new Set(
          data.agency.vehicles.map((vehicle) => vehicle.features.seats)
        ),
      ];
      const uniqueBeds = [
        ...new Set(
          data.agency.vehicles.map((vehicle) => vehicle.features.beds)
        ),
      ];

      setFilterValues({
        brands: uniqueBrand,
        places: uniqueSeats,
        beds: uniqueBeds,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log(params);
    fetchAgency();
  }, []);

  const handleSearchWithFilters = () => {
    if (!dataAgency) return;

    const filtered = dataAgency.agency.vehicles.filter((vehicle) => {
      const filterByBrand = selectedFilters.Marque
        ? vehicle.brand === selectedFilters.Marque
        : true;

      const filterBySeats = selectedFilters.Places
        ? vehicle.features.seats === parseInt(selectedFilters.Places)
        : true;

      const filterByBeds = selectedFilters.Couchages
        ? vehicle.features.beds === parseInt(selectedFilters.Couchages)
        : true;

      const filterByTent = selectedFilters.Tente ? vehicle.features.tent : true;

      const filterByFridge = selectedFilters.Frigo
        ? vehicle.features.fridge
        : true;

      const filterByWater = selectedFilters.Eau ? vehicle.features.water : true;

      const filterByWC = selectedFilters.WC ? vehicle.features.wc : true;

      return (
        filterByBrand &&
        filterBySeats &&
        filterByBeds &&
        filterByTent &&
        filterByFridge &&
        filterByWater &&
        filterByWC
      );
    });

    const sortedVehicles = selectedFilters.Prix
      ? filtered.sort((a, b) => {
          if (selectedFilters.Prix === "Prix croissant") {
            return a.price - b.price;
          } else if (selectedFilters.Prix === "Prix décroissant") {
            return b.price - a.price;
          }
        })
      : filtered;
    setFilteredVehicles(sortedVehicles);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  if (!dataAgency)
    return (
      <div className="h-1/2 mt-[104px] flex justify-center">
        <div className="loading loading-spinner loading-lg "></div>
      </div>
    );

  return (
    <>
      <PopupWarning />
      <ScrollToTopButton />
      <div className="h-screen relative">
        <div className="h-4/6 mx-10 relative mt-[104px] grid grid-rows-5 grid-cols-2 pt-10   ">
          <div className=" row-span-1 col-span-1 "></div>
          <div className=" row-span-5 col-span-1 ">
            <div className="skeleton rounded-3xl  w-full h-full relative">
              <Image
                src={dataAgency.agency.image.url}
                alt={dataAgency.agency.city}
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
            <div
              className={`${lobster.className} text-5xl text-center font-bold`}
            >
              Louez votre véhicule aménagé à {dataAgency.agency.city} !
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
                  {dataAgency.agency.adress}
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
                  {dataAgency.agency.tel}
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 flex justify-evenly">
            <button
              className="btn bg-violet-500 border-violet-600 m-2 rounded-full"
              onClick={handleScrollToMap}
            >
              Localiser sur la carte
            </button>
            <button
              className="btn bg-violet-500 border-violet-600 m-2 rounded-full"
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

      <div className="flex flex-col px-16" id="car-cards">
        <div className="flex gap-12 mb-4">
          {/*Object.entries(filterOptions) permet de transformer un objet en tableau de tableaux. Dans ce cas, on récupère les clés et les valeurs de l'objet filterOptions qui serait par exemple {Marque: ["Renault", "Peugeot"], Prix: ["Prix croissant", "Prix décroissant"], Places: ["2 places", "4 places"], Couchages: ["2 couchages", "4 couchages"]} et on les map pour créer un select pour chaque clé avec les valeurs associées. Ça donnera pour cette exemple un select pour Marque avec les options Renault et Peugeot, un select pour Prix avec les options Prix croissant et Prix décroissant, etc.*/}
          {Object.entries(filterOptions).map(([name, options], index) => (
            <select
              className="select select-bordered w-full max-w-xs"
              key={index}
              defaultValue={name}
              onChange={(e) => {
                if (e.target.value === "Indifférent") {
                  const { [name]: _, ...rest } = selectedFilters;
                  // const { [name]: _, ...rest } = selectedFilters permet de supprimer la clé name de l'objet selectedFilters. Par exemple, si name vaut "Marque", ça donnera const { Marque: _, ...rest } = selectedFilters, ce qui revient à supprimer la clé Marque de selectedFilters. On stocke le reste des clés dans la variable rest. Ça permet de supprimer la clé name de selectedFilters sans avoir à connaître son nom à l'avance.
                  setSelectedFilters(rest);
                } else {
                  setSelectedFilters({
                    ...selectedFilters,
                    [name]: e.target.value,
                  });
                }
              }}
            >
              <option disabled>{name}</option>
              <option className="font-semibold">Indifférent</option>

              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}
          {checkboxOptions.map((name, index) => (
            <label className="flex items-center space-x-2" key={index}>
              <form></form>
              <input
                type="checkbox"
                className="checkbox  border-violet-600 [--chkbg:theme(colors.violet.500)]"
                name={name}
                checked={selectedFilters[name]}
                onChange={handleCheckboxChange}
              />
              <span className="hover:cursor-pointer">{name}</span>
            </label>
          ))}

          <button
            className="btn bg-violet-500 border-violet-600  rounded-full"
            onClick={handleSearchWithFilters}
          >
            Rechercher
          </button>
        </div>
        {filteredVehicles.map((vehicle, index) => (
          <div key={index}>
            <AgencyCarCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <div className="flex justify-center  mb-20 mt-20" id="map">
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
