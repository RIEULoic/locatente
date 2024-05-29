"use client";

import Image from "next/image";
import { useEffect } from "react";

const PopupWarning = () => {
  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        className=" fixed bottom-0 left-0 m-4 mb-4 z-50"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <Image
          src="/images/information_icon.png"
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
            <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Bonjour,</h3>
          <p className="py-4 text-lg leading-10">
            Le site est en cours de développement, certaines fonctionnalités ne
            sont pas encore disponibles:
            <ul className="list-disc ml-5">
              <li>
                Seuls les boutons de couleur{" "}
                <span className="bg-violet-500 ">violette</span> sont actifs.
              </li>
              <li>
                Le carrousel des agences de location fonctionne. Cliquez sur une
                agence pour accéder à la page de celle-ci.
              </li>
              <li>
                Vous pouvez cliquer sur les logos du site pour accéder à la page
                d'accueil.
              </li>
              <li>
                Cliquez sur la flèche en bas à droite pour revenir en haut de la
                page.
              </li>
            </ul>
          </p>
        </div>

        <form method="dialog" className="modal-backdrop ">
          <button />
        </form>
      </dialog>
    </>
  );
};

export default PopupWarning;
