import Image from "next/image";
import Link from "next/link";
import BadgePic from "./BadgePic";

export default function AgencyCarCard({ vehicle }) {
  //console.log(vehicle);
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-10 h-96">
      <div className="h-96 w-full relative ">
        <figure className="relative h-96 ">
          <BadgePic />
          <Image
            className="rounded-l-2xl "
            src={vehicle.image.url}
            alt="Carte de visite d'un van"
            fill
            //sizes va me servir pour le responsive. Il faudra le modifier en fonction de la taille de l'écran
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
      </div>
      <div className="card-body  max-w-7xl">
        <div className="card-title mb-6 text-2xl">{vehicle.name}</div>
        <div className="flex">
          {[
            {
              icon: "/images/car_icons/seat.png",
              feature: `${vehicle.features.seats} Places`,
              alt: "icon of seat",
            },
            {
              icon: "/images/car_icons/slumber.png",
              feature: `${vehicle.features.beds} Couchages`,
              alt: "icon of man slumbering",
            },
            {
              icon: "/images/car_icons/tent.png",
              feature: vehicle.features.tent ? "Tente de toit" : "Pas de tente",
              alt: "icon of tent",
            },
            {
              icon: "/images/car_icons/fridge.png",
              feature: vehicle.features.fridge ? "Frigo" : "Pas de frigo",
              alt: "icon of refrigerator",
            },
            {
              icon: "/images/car_icons/shower.png",
              feature: vehicle.features.water ? "Eau chaude" : "Pas d'eau",
              alt: "icon of shower",
            },
            {
              icon: "/images/car_icons/toilet.png",
              feature: vehicle.features.wc ? "WC interieur" : "Pas de WC",
              alt: "icon of toilet",
            },
          ].map((item, index) => {
            //console.log(item.feature);
            return (
              <div key={index} className="icon-flex-container">
                <Image src={item.icon} alt={item.alt} width={40} height={40} />
                <div className="mt-2">{item.feature}</div>
              </div>
            );
          })}
        </div>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio
          morbi quis commodo odio aenean. Ullamcorper morbi tincidunt ornare
          massa eget egestas purus. Morbi tristique senectus et netus et. Diam
          sollicitudin tempor id eu nisl nunc mi. Cursus risus at ultrices mi
          tempus imperdiet nulla.
        </p>

        <div className="card-actions flex items-center">
          <p className="text-xl">
            Location à partir de{" "}
            <span className="font-bold">{vehicle.price} €</span> par jour
          </p>
          <Link href={`/cars/${vehicle.id}`}>
            <button className="btn bg-violet-500 border-violet-600 mr-10">
              VOIR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
