"use client";
import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import Image from "next/image";
import BadgePic from "@/components/BadgePic";
import Carousel from "@/components/Carousel";

export default function Car(params) {
  const [dataCar, setDataCar] = useState(null);
  const [dataRelatedAgencies, setDataRelatedAgencies] = useState([]);

  const fetchCar = async () => {
    const query = gql`
      query Car {
        vehicle(where: {id: "${params.params.car}"}) {
          id
          brand
          name
          features {
            beds
            fridge
            seats
            tent
            water
            wc
          }
          price
          image {
            url
          }
          agency {
            city
            adress
            id
          }
        }
      }
    `;
    try {
      const data = await request(
        "https://api-ap-south-1.hygraph.com/v2/clu3n13wt0dsm07upg0ccd3nh/master",
        query
      );
      setDataCar(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAgencies = async (carName) => {
    const query = gql`
    query ReferedAgencies {
  agencies(where: {vehicles_some: {name: "${carName}"}}) {
    city
    id
    image {
      url
    }
  }}`;
    try {
      const data = await request(
        "https://api-ap-south-1.hygraph.com/v2/clu3n13wt0dsm07upg0ccd3nh/master",
        query
      );
      setDataRelatedAgencies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  useEffect(() => {
    if (dataCar && dataCar.vehicle) {
      fetchAgencies(dataCar.vehicle.name);
    }
  }, [dataCar]);

  useEffect(() => {
    if (dataRelatedAgencies) {
      console.log(dataRelatedAgencies.agencies);
    }
  }, [dataRelatedAgencies]);

  if (!dataCar || !dataCar.vehicle) {
    return (
      <>
        <div className="flex justify-center mt-[104px] mb-10">
          <div className="w-[66vw] overflow-hidden">
            <div className="grid grid-rows-2 grid-cols-3 gap-4">
              <div className="row-span-2 col-span-2 mt-6 overflow-hidden skeleton  h-[550px]"></div>
              <div className=" relative row-span-1 col-span-1 mt-6 overflow-hidden skeleton"></div>
              <div className="relative row-span-1 col-span-1 overflow-hidden skeleton"></div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center mb-40">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-[104px]">
        <div className="w-[66vw] overflow-hidden">
          <div className="grid grid-rows-2 grid-cols-3 gap-4">
            <div className="row-span-2 col-span-2 mt-6 overflow-hidden">
              <figure className="relative">
                <BadgePic />
                <Image
                  src={dataCar.vehicle.image.url}
                  alt="photo 1 du véhicule"
                  width={822}
                  height={822}
                  priority
                  style={{ borderRadius: "1.5rem" }}
                />
              </figure>
            </div>
            <div className=" relative row-span-1 col-span-1 mt-6 overflow-hidden">
              <BadgePic />
              <Image
                src={dataCar.vehicle.image.url}
                alt="photo 2 du véhicule"
                width={400}
                height={400}
                priority
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
            <div className="relative row-span-1 col-span-1 overflow-hidden">
              <BadgePic />
              <Image
                src={dataCar.vehicle.image.url}
                alt="photo 3 du véhicule"
                width={400}
                height={400}
                priority
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[66vw] ">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2  pl-2">
              <p className="text-2xl font-bold mb-4">{dataCar.vehicle.name}</p>
              <p className="text-lg mb-10 font-light">
                Marque : {dataCar.vehicle.brand}
              </p>
              <div className="flex border-y-[1px] pt-2">
                {[
                  {
                    icon: "/images/car_icons/seat.png",
                    feature: `${dataCar.vehicle.features.seats} Places`,
                    alt: "icon of seat",
                  },
                  {
                    icon: "/images/car_icons/slumber.png",
                    feature: `${dataCar.vehicle.features.beds} Couchages`,
                    alt: "icon of man slumbering",
                  },
                  {
                    icon: "/images/car_icons/tent.png",
                    feature: dataCar.vehicle.features.tent
                      ? "Tente de toit"
                      : "Pas de tente",
                    alt: "icon of tent",
                  },
                  {
                    icon: "/images/car_icons/fridge.png",
                    feature: dataCar.vehicle.features.fridge
                      ? "Frigo"
                      : "Pas de frigo",
                    alt: "icon of refrigerator",
                  },
                  {
                    icon: "/images/car_icons/shower.png",
                    feature: dataCar.vehicle.features.water
                      ? "Eau chaude"
                      : "Pas d'eau",
                    alt: "icon of shower",
                  },
                  {
                    icon: "/images/car_icons/toilet.png",
                    feature: dataCar.vehicle.features.wc
                      ? "WC interieur"
                      : "Pas de WC",
                    alt: "icon of toilet",
                  },
                ].map((item, index) => {
                  //console.log(item.feature);
                  return (
                    <div key={index} className="icon-flex-container !mb-2">
                      {/* Obligé de mettre !mb-2 pour que la marge définie dans icon-flex-container (margin-bottom: 40px) soit supprimée et remplacée par mb-2. Si je mets seulement mb-2, ça ne fonctionne pas, la marge est tjrs de 40px. */}
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={40}
                        height={40}
                      />
                      <div className="mt-2">{item.feature}</div>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="font-medium text-xl mt-10 mb-2">
                  Description du véhicule
                </div>
                <p className="text-gray-700 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nisl lacus, euismod in urna ac, finibus eleifend eros. Mauris
                  ac condimentum ligula. Aenean facilisis orci id metus
                  tincidunt, eget lacinia purus facilisis. In porttitor nisi
                  quis dapibus egestas. Proin nec accumsan magna. Morbi aliquet
                  nulla sit amet ultrices aliquam. Integer finibus lacus et
                  feugiat malesuada. Quisque iaculis magna eu turpis finibus
                  consequat eu eget lorem. Donec a nunc tempus, pulvinar libero
                  in, commodo erat. Quisque id diam velit. Maecenas lectus
                  sapien, facilisis eget convallis vel, vulputate commodo
                  libero. Sed nec dapibus dolor, id porta elit.
                </p>
              </div>
              <div className="border-t-[1px]">
                <div className="w-[35rem] my-10">
                  <div className="font-medium text-xl mb-4">Dimensions</div>
                  <div className="flex justify-between text-gray-700">
                    <div>
                      Longueur: 5.99 m <br />
                      Largeur: 2.08 m <br />
                      Hauteur: 2.65 m <br />
                      Hauteur intérieure : 1.90 m
                    </div>
                    <div>
                      Empattement: 4035 mm <br />
                      Nombre de sièges: {dataCar.vehicle.features.seats} <br />
                      Poids à vide: 2755 kg
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px]">
                <div className="w-[42.5rem] my-10">
                  <div className="font-medium text-xl mb-4">Équipements</div>
                  <div className="flex justify-between text-gray-700">
                    <div>
                      Airbags doubles <br />
                      Système d'assistance au stationnement
                      <br />
                      Sièges chauffants
                      <br />
                      Combi 4 chauffages
                      <br />
                      Climatisation <br />
                      Pré-installation radio <br />
                      Porte-gobelets
                    </div>
                    <div>
                      Régulateur de vitesse
                      <br />
                      ABS - système de freinage anti-blocage <br />
                      Start & Stop <br />
                      Assistance au freinage post-collision <br />
                      Alternateur renforcé de 220 A
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px]">
                <div className="w-[42.5rem] my-10">
                  <div className="font-medium text-xl mb-4">Performances</div>
                  <div className="flex justify-between text-gray-700">
                    <div>
                      Consommation de carburant : 10 L/100 km <br />
                      Émissions de CO2 : 173 g/km
                    </div>
                    <div>
                      Norme d'émission : EU6.2 (C et D-Temp)
                      <br />
                      Vitesse maximale : 153 km/h
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="card  bg-neutral-100 shadow-xl sticky top-[115px]">
                <div className="card-body">
                  <div className="card-title">
                    À partir de {dataCar.vehicle.price}€ par jour
                  </div>
                  <ul>
                    {[
                      "Kilométrage illimité inclus",
                      "Kit cuisine inclus",
                      "Table et chaises d'extérieur incluses",
                      "Forfait d'assurance standard inclus",
                    ].map((item, index) => {
                      return (
                        <li className="flex items-center" key={index}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="black"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: `black` }}
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M416 128L192 384l-96-96"
                            ></path>
                          </svg>
                          <div className="ml-1">{item}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[66vw] overflow-hidden">
          <div className="border-t-[1px]">
            {!dataRelatedAgencies.agencies ? (
              <div className="flex justify-center">
                <div className="loading loading-spinner loading-lg"></div>
              </div>
            ) : (
              <Carousel
                carCarousel={false}
                referedAgencies={true}
                agencyList={dataRelatedAgencies.agencies}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
