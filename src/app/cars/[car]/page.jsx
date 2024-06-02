"use client";
import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import PopupWarning from "@/components/PopupWarning";
import ScrollToTopButton from "@/components/ScrollTopButton";

export default function Car(params) {
  useEffect(() => {
    console.log(params);
  }, []);

  const [dataCar, setDataCar] = useState(null);

  const fetchCar = async () => {
    const query = gql`
      query Car {
        vehicle(where: {id: "${params.params.car}"}) {
          id
          brand
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
    console.log(dataCar);
  }, [dataCar]);

  return (
    <>
      <PopupWarning />
      <ScrollToTopButton />
      <div className="absolute bottom-0">Car {params.params.car}</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
        quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quod,
        quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam quos quod, quas, quae, quibusdam
        quia quidem quae quod.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos quod, quas, quae, quibusdam quia quidem quae
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quos quod, quas, quae, quibusdam quia quidem quae quod.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam quos quod, quas, quae,
        quibusdam quia quidem quae quod.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam quos quod, quas, quae, quibusdam quia quidem
        quae quod.
      </div>
    </>
  );
}
