"use client";

import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

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
    console.log(agenciesList[0]?.adress);
  }, [agenciesList]);
  return (
    <>
      <div className="mt-[104px] flex justify-center mb-10">
        <iframe
          className="rounded-3xl mt-5"
          src="https://www.google.com/maps/d/embed?mid=12e-pBTzphlnZRJ691v_h3VxYDng1qpA&ehbc=2E312F"
          width="800"
          height="800"
          allowFullScreen
          loading="lazy"
          title="agencies map"
        ></iframe>
      </div>
    </>
  );
};
export default page;
