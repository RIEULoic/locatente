"use client";

import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import AgencyCarCard from "@/components/AgencyCarCard";
import CarsFilter from "@/components/CarsFilter";

const Page = () => {
  const [carList, setCarList] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState(null);
  const [carsFilterData, setCarsFilterData] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

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

      setFilteredVehicles(data.vehicles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVehicles();
  }, []);

  // useEffect(() => {
  //   console.log(carList);
  // }, [carList]);

  const handleVehiclesFilterData = (data) => {
    // console.log(data);
    setCarsFilterData(data);
    setIsFiltering(true);
  };

  if (!carList || !filteredVehicles)
    return (
      <div className="mt-[104px] flex justify-center">
        <div className="loading loading-spinner loading-lg my-4"></div>
      </div>
    );

  return (
    <>
      <div className="flex flex-col px-16 mt-[104px]" id="car-cards">
        <div className="mt-4">
          <CarsFilter data={carList} onData={handleVehiclesFilterData} />
        </div>

        {isFiltering === false
          ? filteredVehicles
              .filter((vehicle) => vehicle.goToTheCarCarousel)
              .map((vehicle) => {
                // console.log(carsFilterData);
                return (
                  <div key={vehicle.id}>
                    <AgencyCarCard vehicle={vehicle} />
                  </div>
                );
              })
          : carsFilterData
              .filter((vehicle) => vehicle.goToTheCarCarousel)
              .map((vehicle) => {
                console.log(vehicle.goToTheCarCarousel);
                return (
                  <div key={vehicle.id}>
                    <AgencyCarCard vehicle={vehicle} />
                  </div>
                );
              })}
      </div>
    </>
  );
};
export default Page;
