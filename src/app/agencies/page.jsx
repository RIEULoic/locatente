"use client";

import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [agenciesList, setAgenciesList] = useState([]);

  const fetchAgencies = async () => {
    const query = gql`
      query Agencies {
        agencies(first: 20) {
          id
          city
          adress
          tel
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
      setAgenciesList(data.agencies);
      //console.log(agenciesList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  useEffect(() => {
    //console.log(agenciesList[0]?.adress);
  }, [agenciesList]);
  return (
    <>
      <div className="mt-[104px] flex justify-around mb-10 h-[770px]">
        <div
          className="mt-5 border-solid border-2 rounded-3xl  p-8 "
          style={{ borderColor: "#7C3AED" }}
        >
          <div className="text-5xl font-lobster flex justify-center">
            Agences Locatente
          </div>
          <p className="text-3xl py-5 ">
            Découvrez nos agences à travers toute la France
          </p>
          <div className="max-h-[calc(100vh-350px)] overflow-auto">
            {/* Cela utilise la fonction calc pour calculer la hauteur maximale en
            soustrayant 350 pixels de la hauteur de la fenêtre (100vh).  */}
            {agenciesList.map((agency) => {
              return (
                <div key={agency.id}>
                  <Link href={`/agencies/${agency.id}`}>
                    <div className="flex flex-col items-center border-t-[2px] text-xl text-gray-700  hover:bg-violet-500">
                      <div className="text-black font-medium pt-4 pb-2">
                        {agency.city}
                      </div>
                      <div>{agency.adress}</div>
                      <div className="pb-4">{agency.tel}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <iframe
          className="rounded-3xl mt-5"
          src="https://www.google.com/maps/d/embed?mid=12e-pBTzphlnZRJ691v_h3VxYDng1qpA&ehbc=2E312F"
          width="1000"
          height="750"
          allowFullScreen
          loading="lazy"
          title="agencies map"
        ></iframe>
      </div>
    </>
  );
};
export default page;
