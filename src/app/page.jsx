import { lobster } from "@/app/fonts";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mx-auto mt-10 h-[80vh]" style={{ width: "50%" }}>
        <div
          className="hero items-start  rounded-box shadow-2xl "
          style={{
            backgroundImage: "url(/images/luminescent_sky.jpg)",
            height: "80%",
          }}
        >
          <div className="hero-content text-center text-neutral-content mt-10">
            <div className="max-w-md">
              <h1 className="mb-10 text-5xl font-bold">
                Achetez votre chambre à coucher de plein air
              </h1>

              <button className="btn btn-info">
                Découvrez nos tentes à la vente
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <h1 className={`${lobster.className} text-4xl font-bold ml-20 mb-10`}>
          Pourquoi choisir Locatent ?
        </h1>
        <p className="ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Faucibus purus in
          massa tempor. Sed sed risus pretium quam vulputate dignissim
          suspendisse in. Nec feugiat nisl pretium fusce. Consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis. Pellentesque elit
          eget gravida cum sociis natoque penatibus et magnis. Lacus viverra
          vitae congue eu consequat ac felis.{" "}
        </p>
      </div>
    </div>
  );
}
