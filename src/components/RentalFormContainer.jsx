import { useNavbarState } from "@/context/NavbarStateContext";
import RentalForm from "./RentalForm";

function RentalFormContainer() {
  const { isRentalFormContainerExpanded } = useNavbarState();

  return (
    <div
      style={{
        visibility: isRentalFormContainerExpanded ? "visible" : "hidden",
      }}
      className=" bg-white px-2 border-2  border-gray-400  rounded-full"
    >
      <RentalForm />
    </div>
  );
}

export default RentalFormContainer;
