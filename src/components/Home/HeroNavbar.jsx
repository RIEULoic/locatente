import { useNavbarState } from "@/context/NavbarStateContext";
import RentalForm from "../RentalForm";

function HeroNavbar() {
  const { isHeroNavbarExpanded } = useNavbarState();

  return (
    <div
      style={{ display: isHeroNavbarExpanded ? "block" : "none" }}
      className=" bg-white px-2 border-2 border-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 my-40 rounded-full"
    >
      <RentalForm />
    </div>
  );
}

export default HeroNavbar;
