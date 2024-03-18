import Image from "next/image";

export default function CarCard({ vehicle }) {
  //console.log(vehicle);

  return (
    vehicle && (
      <div className="card w-96 bg-base-100 shadow-xl mb-10 ">
        <figure>
          <Image src={vehicle.image} alt="van" width={400} height={200} />
        </figure>
        <div className="card-body pl-1 pt-3 pb-0 pr-0">
          <h2 className="card-title mb-4">
            <span>{vehicle.name}</span>
          </h2>
          <div className="flex  flex-wrap  ">
            <div className="icon-flex-container ">
              <Image
                src="/images/car_icons/seat.png"
                alt="icon of seat created by Atif Arshad"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/seat"
              />
              <div className="mt-2">{vehicle.features.seats} Places</div>
            </div>

            <div className="icon-flex-container">
              <Image
                src="/images/car_icons/slumber.png"
                alt="icon of man slumbering created by geotatah"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/sleep"
              />
              <div className="mt-2">{vehicle.features.beds} Couchages</div>
            </div>
            <div className="icon-flex-container">
              <Image
                src="/images/car_icons/tent.png"
                alt="icon of tent created by Dmytro Vyshnevskyi"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/tent"
              />
              <div className="mt-2">
                {vehicle.features.tent ? "Tente de toit" : "Pas de tente"}
              </div>
            </div>
            <div className="icon-flex-container">
              <Image
                src="/images/car_icons/fridge.png"
                alt="icon of refrigerator created by Freepik"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/refrigerator"
              />
              <div className="mt-2">
                {vehicle.features.fridge ? "Frigo" : "Pas de frigo"}
              </div>
            </div>
            <div className="icon-flex-container">
              <Image
                src="/images/car_icons/shower.png"
                alt="icon of shower created by fjstudio"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/sanitary"
              />
              <div className="mt-2">
                {vehicle.features.shower ? "Eau chaude" : "Pas d'eau"}
              </div>
            </div>
            <div className="icon-flex-container">
              <Image
                src="/images/car_icons/toilet.png"
                alt="icon of toilet created by Radhe Icon"
                width={40}
                height={40}
                href="https://www.flaticon.com/free-icons/furniture-and-household"
              />
              <div className="mt-2">
                {vehicle.features.toilet ? "WC interieur" : "Pas de WC"}
              </div>
            </div>
          </div>
          <div className="text-xl pb-4 ">
            À partir de <span className="font-bold">{vehicle.price}€</span>/jour
          </div>
        </div>
      </div>
    )
  );
}
