"use client";
import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import Image from "next/image";

export default function Car(params) {
  // useEffect(() => {
  //   console.log(params);
  // }, []);

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
        }}`;
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

  useEffect(() => {
    //Obligé de faire un if car sinon il y a une erreur. Il faut attendre que dataCar soit rempli.
    if (dataCar && dataCar.vehicle) {
      // console.log(dataCar);
      console.log(dataCar.vehicle.brand);
    }
  }, [dataCar]);

  if (!dataCar || !dataCar.vehicle)
    return (
      <div className="h-1/2 mt-[104px] flex justify-center">
        <div className="loading loading-spinner loading-lg "></div>
      </div>
    );

  return (
    <>
      <div className="mt-[104px]">fuck</div>
    </>
  );
}
