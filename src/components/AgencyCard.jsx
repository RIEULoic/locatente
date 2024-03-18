import Image from "next/image";

export default function AgencyCard({ agency }) {
  return (
    agency && (
      <div className="card  bg-base-100  mb-10 ">
        <figure className="h-[160px]   ">
          <Image
            src={agency.image}
            alt={agency.city}
            width={400}
            height={200}
            style={{ borderRadius: "2rem" }}
          />
        </figure>

        <div className="card-body p-2">
          <h2 className="card-title mb-4 justify-center">{agency.city}</h2>
        </div>
      </div>
    )
  );
}
