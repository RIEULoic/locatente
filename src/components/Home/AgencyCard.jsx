import Image from "next/image";

export default function AgencyCard({ agency }) {
  return (
    agency && (
      <div className="card  bg-neutral-100  mb-10 ">
        <figure className="h-[160px]  agency-card-image ">
          <Image
            src={`${agency.image.url}`}
            alt={agency.city}
            width={400}
            height={200}
            style={{ borderRadius: "1rem" }}
          />
        </figure>

        <div className="card-body p-2 ">
          <div className="card-title mb-4 justify-center">{agency.city}</div>
        </div>
      </div>
    )
  );
}
