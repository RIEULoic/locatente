import Image from "next/image";

export default function AgencyCard({ agency }) {
  return (
    agency && (
      <div className="card w-96 bg-base-100 shadow-xl mb-10">
        <figure>
          <Image src={agency.image} alt="city" width={400} height={200} />
        </figure>

        <div className="card-body ">
          <h2 className="card-title mb-4 justify-center">{agency.city}</h2>
        </div>
      </div>
    )
  );
}
