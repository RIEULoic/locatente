import Image from "next/image";
import Link from "next/link";

const PopupWarning = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        className=" fixed bottom-0 left-0 m-4 mb-4 z-50 btnVisible"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <Image
          src="/images/information_icon2.png"
          alt="info icon created by sonnyCandra - Flaticon"
          width={80}
          height={80}
          href="https://www.flaticon.com/free-icons/info"
        />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-7xl ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="font-bold text-2xl">Bonjour,</div>
          <br />
          <div className="font-bold text-lg">
            Technos utilisées pour ce site : NextJS, TailwindCSS, DaisyUI,
            Graphql, Swiper.
            <br />
            Hygraph pour la base de données.
          </div>

          <div className="py-4 text-lg leading-10">
            Le site est en cours de développement, certaines fonctionnalités ne
            sont pas encore disponibles:
            <ul className="list-disc ml-5">
              <li>
                Seuls les boutons de couleur{" "}
                <span className="btn btn-active-color hover:cursor-default text-lg">
                  violette
                </span>{" "}
                sont actifs.
              </li>
              <li>
                Les carrousels des agences et des véhicules fonctionnent.
                Cliquez sur une agence ou un véhicule pour accéder à la page de
                celui-ci.
              </li>
              <li>
                Vous pouvez cliquer sur les logos du site pour accéder à la page
                d'accueil.
              </li>
              <li>
                Vous pouvez cliquez sur la flèche en bas à droite pour revenir
                en haut de la page.
              </li>
            </ul>
          </div>
          <div className="font-bold text-xl">
            Lien Github :{" "}
            <a
              href="https://github.com/RIEULoic/locatente"
              target="_blank"
              //rel="noopener noreferrer" permet de sécuriser le lien pour éviter les attaques de type "tabnabbing"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://github.com/RIEULoic/locatente
            </a>
          </div>
        </div>
        {/*<form method="dialog" className="modal-backdrop ">
          <button />
        </form> 
        Permet de fermer le modal en cliquant en dehors de la boîte de dialogue */}
        <form method="dialog" className="modal-backdrop ">
          <button />
        </form>
      </dialog>
    </>
  );
};

export default PopupWarning;
