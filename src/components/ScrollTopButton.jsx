import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton lorsque l'utilisateur descend de plus de 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
        //console.log("visible true");
      } else {
        setIsVisible(false);
        //console.log("visible false");
      }
    };

    // Ajouter un écouteur d'événement sur le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur à la désinscription du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={` fixed bottom-0 right-0 mr-4 mb-4 z-50 scrollToTopButton ${
        isVisible ? "btnVisible" : ""
      }`}
      onClick={scrollToTop}
    >
      <Image
        src="/images/top_arrow_violet_white.png"
        alt="Back to top icons created by Cuputo - Flaticon"
        width={100}
        height={100}
        href="https://www.flaticon.com/free-icons/back-to-top"
      />
    </button>
  );
};

export default ScrollToTopButton;
