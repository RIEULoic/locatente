"use client";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

import { useNavbarState } from "@/context/NavbarStateContext";
import Image from "next/image";
import HeroNavbar from "@/components/Home/HeroNavbar";
import { lobster } from "@/app/fonts";
import { useRouter } from "next/router";

export default function Page({ params }) {
  console.log(params.agencyCity);

  const { isHeroNavbarExpanded, setHeroNavbarExpanded } = useNavbarState();

  const [data, setData] = useState(null);

  const fetchAgency = async () => {
    const query = gql`
      query Agency {
        agency(where: { id: "${params.agencyCity}" }) {
          adress
          city
          id
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
      console.log(data.agency);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAgency();
    // if (!isHeroNavbarExpanded) {
    setHeroNavbarExpanded(true);
    // }
  }, []);

  // useEffect(() => {
  //   console.log(isHeroNavbarExpanded);
  // }, [isHeroNavbarExpanded]);

  if (!data)
    return (
      <div className="h-1/2 mt-[104px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <>
      <div className="h-screen relative">
        <div className="h-4/6 mx-10 relative mt-[104px] grid grid-rows-4 grid-cols-2 pt-10 border-solid border-black border-2  ">
          <div className=" row-span-1 col-span-1 border-solid border-green-400 border-2">
            NE SERT A RIEN 1
          </div>
          <div className=" row-span-4 col-span-1 ">
            <div className="skeleton rounded-3xl  w-full h-full relative">
              <Image
                src={data.agency.image.url}
                alt={data.agency.city}
                quality={50}
                sizes="33vw"
                fill
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
          <div className=" row-span-2  col-span-1 border-solid border-red-600 border-4 ">
            {/* <div
            className={`${lobster.className} text-6xl text-center font-bold`}
          >
            Louez votre sublime véhicule aménagé à {data.agency.city} ! 2
          </div>
          <div className="flex  mt-16 pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
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
              {data.agency.adress} 31400 {data.agency.city}
            </div>
          </div>
          <div className="flex pl-6 mt-6">
            <Image
              src="/images/phone_icon.png"
              alt="phone icon"
              width={20}
              height={20}
              href="https://www.flaticon.com/free-icons/phone"
            />
            <div className="ml-3 text-slate-600 text-xl">{data.agency.tel}</div>
          </div>
          <div className="flex pl-4 mt-6">
            <div className="ml-2 text-black text-xl">Horaire</div>
            <div className="ml-2 text-slate-600 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div> */}
          </div>
          <div className="row-span-1 col-span-1 border-solid border-yellow-400 border-2">
            NE SERT A RIEN 3
          </div>
        </div>
        <div
          id="hero-navbar"
          className=" absolute bottom-0 left-1/2 -translate-x-1/2  mb-52"
        >
          <HeroNavbar />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra
        ipsum nunc aliquet bibendum enim. Cursus risus at ultrices mi tempus
        imperdiet nulla malesuada pellentesque. Rhoncus mattis rhoncus urna
        neque viverra justo. Felis donec et odio pellentesque diam volutpat
        commodo sed. Consectetur lorem donec massa sapien faucibus et. Malesuada
        fames ac turpis egestas. Eget arcu dictum varius duis at. Adipiscing
        commodo elit at imperdiet dui accumsan sit amet. Lorem ipsum dolor sit
        amet consectetur adipiscing. Varius morbi enim nunc faucibus a
        pellentesque. Laoreet id donec ultrices tincidunt arcu non sodales neque
        sodales. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
        Enim nulla aliquet porttitor lacus luctus accumsan tortor. Felis
        imperdiet proin fermentum leo vel orci porta. Augue eget arcu dictum
        varius duis at consectetur lorem donec. Sagittis purus sit amet volutpat
        consequat mauris nunc congue. Egestas integer eget aliquet nibh. Amet
        porttitor eget dolor morbi non arcu risus. Accumsan sit amet nulla
        facilisi morbi tempus. Ornare suspendisse sed nisi lacus sed viverra
        tellus. At in tellus integer feugiat scelerisque varius. Elementum
        sagittis vitae et leo duis ut diam. Laoreet suspendisse interdum
        consectetur libero id faucibus nisl. Facilisi morbi tempus iaculis urna
        id volutpat lacus. Faucibus in ornare quam viverra orci sagittis eu
        volutpat. Elit at imperdiet dui accumsan sit amet nulla facilisi.
        Aliquam id diam maecenas ultricies. Et malesuada fames ac turpis egestas
        sed tempus. Semper viverra nam libero justo laoreet sit amet. A diam
        maecenas sed enim ut. A lacus vestibulum sed arcu non odio euismod.
        Potenti nullam ac tortor vitae purus faucibus. Posuere morbi leo urna
        molestie at. Faucibus pulvinar elementum integer enim neque. Non nisi
        est sit amet facilisis magna. Tellus in hac habitasse platea dictumst
        vestibulum. Id leo in vitae turpis massa sed elementum. Etiam tempor
        orci eu lobortis elementum nibh tellus molestie nunc. Posuere urna nec
        tincidunt praesent semper feugiat nibh sed. Erat pellentesque adipiscing
        commodo elit at imperdiet. Leo integer malesuada nunc vel risus. Dictum
        fusce ut placerat orci nulla pellentesque dignissim. Integer eget
        aliquet nibh praesent. Cursus metus aliquam eleifend mi in nulla posuere
        sollicitudin. Leo urna molestie at elementum eu facilisis sed odio
        morbi. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam.
        Malesuada proin libero nunc consequat interdum. Purus in mollis nunc
        sed. Pretium fusce id velit ut tortor. Pharetra diam sit amet nisl
        suscipit. Nisl rhoncus mattis rhoncus urna neque viverra justo nec
        ultrices. Pharetra magna ac placerat vestibulum. Vitae purus faucibus
        ornare suspendisse. Augue mauris augue neque gravida in. Sit amet
        commodo nulla facilisi nullam vehicula ipsum. At varius vel pharetra
        vel. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
        Convallis aenean et tortor at risus viverra adipiscing. Mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci a. Odio pellentesque
        diam volutpat commodo sed egestas egestas. Erat nam at lectus urna duis
        convallis convallis tellus id. Purus ut faucibus pulvinar elementum
        integer. Viverra nibh cras pulvinar mattis nunc sed blandit. Sed
        elementum tempus egestas sed sed risus pretium quam. Imperdiet nulla
        malesuada pellentesque elit eget gravida. Massa vitae tortor condimentum
        lacinia quis vel eros donec. Hac habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit. Neque vitae tempus quam pellentesque nec
        nam aliquam. Tincidunt dui ut ornare lectus sit amet est placerat in.
        Venenatis a condimentum vitae sapien.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum
        enim. Cursus risus at ultrices mi tempus imperdiet nulla malesuada
        pellentesque. Rhoncus mattis rhoncus urna neque viverra justo. Felis
        donec et odio pellentesque diam volutpat commodo sed. Consectetur lorem
        donec massa sapien faucibus et. Malesuada fames ac turpis egestas. Eget
        arcu dictum varius duis at. Adipiscing commodo elit at imperdiet dui
        accumsan sit amet. Lorem ipsum dolor sit amet consectetur adipiscing.
        Varius morbi enim nunc faucibus a pellentesque. Laoreet id donec
        ultrices tincidunt arcu non sodales neque sodales. Turpis nunc eget
        lorem dolor sed viverra ipsum nunc aliquet. Enim nulla aliquet porttitor
        lacus luctus accumsan tortor. Felis imperdiet proin fermentum leo vel
        orci porta. Augue eget arcu dictum varius duis at consectetur lorem
        donec. Sagittis purus sit amet volutpat consequat mauris nunc congue.
        Egestas integer eget aliquet nibh. Amet porttitor eget dolor morbi non
        arcu risus. Accumsan sit amet nulla facilisi morbi tempus. Ornare
        suspendisse sed nisi lacus sed viverra tellus. At in tellus integer
        feugiat scelerisque varius. Elementum sagittis vitae et leo duis ut
        diam. Laoreet suspendisse interdum consectetur libero id faucibus nisl.
        Facilisi morbi tempus iaculis urna id volutpat lacus. Faucibus in ornare
        quam viverra orci sagittis eu volutpat. Elit at imperdiet dui accumsan
        sit amet nulla facilisi. Aliquam id diam maecenas ultricies. Et
        malesuada fames ac turpis egestas sed tempus. Semper viverra nam libero
        justo laoreet sit amet. A diam maecenas sed enim ut. A lacus vestibulum
        sed arcu non odio euismod. Potenti nullam ac tortor vitae purus
        faucibus. Posuere morbi leo urna molestie at. Faucibus pulvinar
        elementum integer enim neque. Non nisi est sit amet facilisis magna.
        Tellus in hac habitasse platea dictumst vestibulum. Id leo in vitae
        turpis massa sed elementum. Etiam tempor orci eu lobortis elementum nibh
        tellus molestie nunc. Posuere urna nec tincidunt praesent semper feugiat
        nibh sed. Erat pellentesque adipiscing commodo elit at imperdiet. Leo
        integer malesuada nunc vel risus. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Integer eget aliquet nibh praesent. Cursus metus
        aliquam eleifend mi in nulla posuere sollicitudin. Leo urna molestie at
        elementum eu facilisis sed odio morbi. Donec ultrices tincidunt arcu non
        sodales neque sodales ut etiam. Malesuada proin libero nunc consequat
        interdum. Purus in mollis nunc sed. Pretium fusce id velit ut tortor.
        Pharetra diam sit amet nisl suscipit. Nisl rhoncus mattis rhoncus urna
        neque viverra justo nec ultrices. Pharetra magna ac placerat vestibulum.
        Vitae purus faucibus ornare suspendisse. Augue mauris augue neque
        gravida in. Sit amet commodo nulla facilisi nullam vehicula ipsum. At
        varius vel pharetra vel. Lobortis mattis aliquam faucibus purus in massa
        tempor nec feugiat. Convallis aenean et tortor at risus viverra
        adipiscing. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
        orci a. Odio pellentesque diam volutpat commodo sed egestas egestas.
        Erat nam at lectus urna duis convallis convallis tellus id. Purus ut
        faucibus pulvinar elementum integer. Viverra nibh cras pulvinar mattis
        nunc sed blandit. Sed elementum tempus egestas sed sed risus pretium
        quam. Imperdiet nulla malesuada pellentesque elit eget gravida. Massa
        vitae tortor condimentum lacinia quis vel eros donec. Hac habitasse
        platea dictumst vestibulum rhoncus est pellentesque elit. Neque vitae
        tempus quam pellentesque nec nam aliquam. Tincidunt dui ut ornare lectus
        sit amet est placerat in. Venenatis a condimentum vitae sapien.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum
        nunc aliquet bibendum enim. Cursus risus at ultrices mi tempus imperdiet
        nulla malesuada pellentesque. Rhoncus mattis rhoncus urna neque viverra
        justo. Felis donec et odio pellentesque diam volutpat commodo sed.
        Consectetur lorem donec massa sapien faucibus et. Malesuada fames ac
        turpis egestas. Eget arcu dictum varius duis at. Adipiscing commodo elit
        at imperdiet dui accumsan sit amet. Lorem ipsum dolor sit amet
        consectetur adipiscing. Varius morbi enim nunc faucibus a pellentesque.
        Laoreet id donec ultrices tincidunt arcu non sodales neque sodales.
        Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Enim nulla
        aliquet porttitor lacus luctus accumsan tortor. Felis imperdiet proin
        fermentum leo vel orci porta. Augue eget arcu dictum varius duis at
        consectetur lorem donec. Sagittis purus sit amet volutpat consequat
        mauris nunc congue. Egestas integer eget aliquet nibh. Amet porttitor
        eget dolor morbi non arcu risus. Accumsan sit amet nulla facilisi morbi
        tempus. Ornare suspendisse sed nisi lacus sed viverra tellus. At in
        tellus integer feugiat scelerisque varius. Elementum sagittis vitae et
        leo duis ut diam. Laoreet suspendisse interdum consectetur libero id
        faucibus nisl. Facilisi morbi tempus iaculis urna id volutpat lacus.
        Faucibus in ornare quam viverra orci sagittis eu volutpat. Elit at
        imperdiet dui accumsan sit amet nulla facilisi. Aliquam id diam maecenas
        ultricies. Et malesuada fames ac turpis egestas sed tempus. Semper
        viverra nam libero justo laoreet sit amet. A diam maecenas sed enim ut.
        A lacus vestibulum sed arcu non odio euismod. Potenti nullam ac tortor
        vitae purus faucibus. Posuere morbi leo urna molestie at. Faucibus
        pulvinar elementum integer enim neque. Non nisi est sit amet facilisis
        magna. Tellus in hac habitasse platea dictumst vestibulum. Id leo in
        vitae turpis massa sed elementum. Etiam tempor orci eu lobortis
        elementum nibh tellus molestie nunc. Posuere urna nec tincidunt praesent
        semper feugiat nibh sed. Erat pellentesque adipiscing commodo elit at
        imperdiet. Leo integer malesuada nunc vel risus. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Integer eget aliquet nibh
        praesent. Cursus metus aliquam eleifend mi in nulla posuere
        sollicitudin. Leo urna molestie at elementum eu facilisis sed odio
        morbi. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam.
        Malesuada proin libero nunc consequat interdum. Purus in mollis nunc
        sed. Pretium fusce id velit ut tortor. Pharetra diam sit amet nisl
        suscipit. Nisl rhoncus mattis rhoncus urna neque viverra justo nec
        ultrices. Pharetra magna ac placerat vestibulum. Vitae purus faucibus
        ornare suspendisse. Augue mauris augue neque gravida in. Sit amet
        commodo nulla facilisi nullam vehicula ipsum. At varius vel pharetra
        vel. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
        Convallis aenean et tortor at risus viverra adipiscing. Mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci a. Odio pellentesque
        diam volutpat commodo sed egestas egestas. Erat nam at lectus urna duis
        convallis convallis tellus id. Purus ut faucibus pulvinar elementum
        integer. Viverra nibh cras pulvinar mattis nunc sed blandit. Sed
        elementum tempus egestas sed sed risus pretium quam. Imperdiet nulla
        malesuada pellentesque elit eget gravida. Massa vitae tortor condimentum
        lacinia quis vel eros donec. Hac habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit. Neque vitae tempus quam pellentesque nec
        nam aliquam. Tincidunt dui ut ornare lectus sit amet est placerat in.
        Venenatis a condimentum vitae sapien.
      </p>
      {/* <div className="row-span-3 col-span-2"> NE SERS A RIEN 4</div> */}
    </>
  );
}
