"use client";
import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import Image from "next/image";

export default function Car(params) {
  const [dataCar, setDataCar] = useState(null);

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

  useEffect(() => {
    fetchCar();
  }, []);

  // useEffect(() => {
  //   if (dataCar && dataCar.vehicle) {
  //     console.log(dataCar.vehicle.brand);
  //   }
  // }, [dataCar]);

  if (!dataCar || !dataCar.vehicle) {
    return (
      <div className="mt-[104px] flex justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-[104px]">
        <div className="w-[66vw] overflow-hidden">
          <div className="grid grid-rows-2 grid-cols-3 gap-4">
            <div className="row-span-2 col-span-2 mt-6 overflow-hidden">
              <Image
                src={dataCar.vehicle.image.url}
                alt="photo 1 du vehicule"
                width={822}
                height={822}
                priority
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
            <div className="row-span-1 col-span-1 mt-6 overflow-hidden">
              <Image
                src={dataCar.vehicle.image.url}
                alt="photo 2 du vehicule"
                width={400}
                height={400}
                priority
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
            <div className="row-span-1 col-span-1 overflow-hidden">
              <Image
                src={dataCar.vehicle.image.url}
                alt="photo 3 du vehicule"
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
            <div className="col-span-2 border-2 border-red-500">
              <p className="text-2xl font-bold mb-4">{dataCar.vehicle.name}</p>
              <p className="text-lg mb-10 font-light">
                Marque : {dataCar.vehicle.brand}
              </p>
              <div className="flex">
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
                    <div key={index} className="icon-flex-container">
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
                <div className="font-medium text-xl mb-2">
                  Description du vehicule
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
              <div>
                <div>DIMENSIONS</div>
                <div className="flex">
                  <div>
                    Length: 5.99 m <br /> Width: 2.08 m <br />
                    Height: 2.65 m <br />
                    Interior height : 1.90 m <br />
                    Wheelbase: 4035 mm <br />
                    Number of seats: 4 <br />
                    Unladen weight: 2755 kg
                  </div>
                  <div>
                    Width: 2.08 m <br />
                    Height: 2.65 m <br />
                    Interior height : 1.90 m <br />
                    Wheelbase: 4035 mm <br />
                    Number of seats: 4
                  </div>
                </div>
              </div>
              <div>ÉQUIPEMENT</div>
              <div>PERFORMANCE</div>
              <p>{dataCar.vehicle.price}</p>
              <p>{dataCar.vehicle.agency.city}</p>
              <p>{dataCar.vehicle.agency.adress}</p>
              <p>{dataCar.vehicle.features.beds}</p>
              <p>{dataCar.vehicle.features.fridge}</p>
              <p>{dataCar.vehicle.features.seats}</p>
              <p>{dataCar.vehicle.features.tent}</p>
              <p>{dataCar.vehicle.features.water}</p>
              <p>{dataCar.vehicle.features.wc}</p>
              <p>{dataCar.vehicle.brand}</p>
              <p>{dataCar.vehicle.price}</p>
              <p>{dataCar.vehicle.agency.city}</p>
              <p>{dataCar.vehicle.agency.adress}</p>
              <p>{dataCar.vehicle.features.beds}</p>
              <p>{dataCar.vehicle.features.fridge}</p>
              <p>{dataCar.vehicle.features.seats}</p>
              <p>{dataCar.vehicle.features.tent}</p>
              <p>{dataCar.vehicle.features.water}</p>
              <p>{dataCar.vehicle.features.wc}</p>
            </div>
            <div className="col-span-1 border-2 border-red-500">
              <p>{dataCar.vehicle.brand}</p>
              <p>{dataCar.vehicle.price}</p>
              <p>{dataCar.vehicle.agency.city}</p>
              <p>{dataCar.vehicle.agency.adress}</p>
              <p>{dataCar.vehicle.features.beds}</p>
              <p>{dataCar.vehicle.features.fridge}</p>
              <p>{dataCar.vehicle.features.seats}</p>
              <p>{dataCar.vehicle.features.tent}</p>
              <p>{dataCar.vehicle.features.water}</p>
              <p>{dataCar.vehicle.features.wc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
