import { lobster } from "@/app/fonts";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mx-auto mt-10 h-[80vh]" style={{ width: "50%" }}>
        <div
          className="hero items-start  rounded-box shadow-2xl "
          style={{
            backgroundImage: "url(/images/luminescent_sky.jpg)",
            height: "90%",
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
      <div className="flex flex-col items-center mb-10">
        <h1
          className={`${lobster.className} text-4xl font-bold  mb-5`}
          style={{ width: "50%" }}
        >
          Pourquoi choisir Locatent ?
        </h1>
        <p className="text-xl" style={{ width: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Faucibus purus in
          massa tempor. Sed sed risus pretium quam vulputate dignissim
          suspendisse in. Nec feugiat nisl pretium fusce. Consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis. Pellentesque elit
          eget gravida cum sociis natoque penatibus et magnis. Lacus viverra
          vitae congue eu consequat ac felis.
        </p>
      </div>
      <div className="flex justify-around mb-44">
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
          <Image
            src="/images/agency_icon.png"
            alt="icon of agency building"
            width={64}
            height={64}
            href="https://www.flaticon.com/free-icons/branch"
          />

          <div
            className="text-xl my-5 font-bold"
            style={{ width: "auto", height: "auto" }}
          >
            De Nombreuses Agences
          </div>
          <div
            className="text-center text-slate-600"
            style={{ width: "auto", height: "auto" }}
          >
            10 agences à votre disposition pour être au plus proche de chez vous
          </div>
        </div>
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
          <Image
            src="/images/car_tent_icon.png"
            alt="car icon with tent"
            width={64}
            height={64}
            href="https://www.flaticon.com/free-icons/tent"
          />

          <div
            className="text-xl my-5 font-bold"
            style={{ width: "auto", height: "auto" }}
          >
            Louer Tout Équipé
          </div>
          <div
            className="text-center text-slate-600"
            style={{ width: "auto", height: "auto" }}
          >
            Tente de toit, accessoires de camping et appli smartphone inclus
          </div>
        </div>

        <div className="flex flex-col items-center " style={{ width: "15%" }}>
          <Image
            src="/images/odometer_icon.png"
            alt="odometer icon"
            width={64}
            height={64}
            href="https://www.flaticon.com/free-icons/kilometers"
          />

          <div
            className="text-xl my-5 font-bold"
            style={{ width: "auto", height: "auto" }}
          >
            Kilométrage illimité
          </div>
          <div
            className="text-center text-slate-600"
            style={{ width: "auto", height: "auto" }}
          >
            Partez à l'aventure sans vous soucier du kilométrage
          </div>
        </div>
        <div className="flex flex-col items-center " style={{ width: "15%" }}>
          <Image
            src="/images/calm_icon.png"
            alt="calm_icon"
            width={64}
            height={64}
            href="https://www.flaticon.com/free-icons/calm"
          />

          <div
            className="text-xl my-5 font-bold"
            style={{ width: "auto", height: "auto" }}
          >
            Partez En Toute Sérénité
          </div>
          <div
            className="text-center text-slate-600"
            style={{ width: "auto", height: "auto" }}
          >
            Assurance et assistance 24h/7j inclues
          </div>
        </div>
      </div>

      <Carousel />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper
        a lacus vestibulum sed arcu. Nulla malesuada pellentesque elit eget
        gravida. Urna nunc id cursus metus. Nunc sed augue lacus viverra vitae
        congue eu consequat. Vestibulum sed arcu non odio. Accumsan sit amet
        nulla facilisi morbi. Porta non pulvinar neque laoreet suspendisse.
        Commodo nulla facilisi nullam vehicula ipsum. Est sit amet facilisis
        magna etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit
        pellentesque habitant. Vitae et leo duis ut diam quam nulla porttitor.
        In nulla posuere sollicitudin aliquam ultrices sagittis orci. Nisi quis
        eleifend quam adipiscing vitae proin. Sit amet nisl suscipit adipiscing
        bibendum. Diam sollicitudin tempor id eu. Turpis egestas pretium aenean
        pharetra magna ac placerat vestibulum lectus. Mi proin sed libero enim
        sed faucibus turpis in. Ut venenatis tellus in metus vulputate eu
        scelerisque. Mattis nunc sed blandit libero volutpat sed cras.
        Ullamcorper malesuada proin libero nunc consequat. Placerat in egestas
        erat imperdiet sed euismod nisi. Mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus. Libero justo laoreet sit
        amet cursus sit. Facilisis sed odio morbi quis commodo odio aenean sed.
        Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Sed
        arcu non odio euismod lacinia at quis risus. Feugiat in ante metus
        dictum at tempor commodo. Nunc congue nisi vitae suscipit tellus mauris
        a diam. Faucibus ornare suspendisse sed nisi lacus. Ultrices in iaculis
        nunc sed augue lacus. Nullam non nisi est sit amet facilisis magna
        etiam. Mus mauris vitae ultricies leo integer malesuada nunc vel risus.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ullamcorper
        morbi tincidunt ornare massa eget.
      </div>
    </div>
  );
}
