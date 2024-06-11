"use Client";

import { useState, useEffect } from "react";

export default function CarsFilter(params) {
  const [filterValues, setFilterValues] = useState({
    brands: [],
    places: [],
    beds: [],
  });
  // filterValues correspond à l'objet qui contient les valeurs possibles pour les filtres Marque, Places et Couchages.

  const [selectedFilters, setSelectedFilters] = useState([]);
  // selectedFilters correspond à l'objet qui contient les filtres sélectionnés par l'utilisateur.

  const [filteredVehicles, setFilteredVehicles] = useState(
    params.data.agency.vehicles
  );
  // filteredVehicles correspond à la liste des véhicules filtrés par les filtres sélectionnés par l'utilisateur.

  // const filterOptions correspond à l'objet qui contient les options possibles pour chaque filtre. Par exemple, pour le filtre Marque, on a les options ["Renault", "Peugeot",...], pour le filtre Prix, on a les options ["Prix croissant", "Prix décroissant"], etc.
  const filterOptions = {
    Marque: filterValues.brands,
    Prix: ["Prix croissant", "Prix décroissant"],
    Places: filterValues.places
      .sort((a, b) => a - b)
      .map((place) => `${place} places`),
    Couchages: filterValues.beds
      .sort((a, b) => a - b)
      .map((bed) => `${bed} couchages`),
  };
  const checkboxOptions = ["Tente", "Frigo", "Eau", "WC"];

  useEffect(() => {
    //console.log(params.data.agency);
    setFilteredVehicles(params.data.agency.vehicles);
  }, []);

  useEffect(() => {
    if (filteredVehicles) {
      //console.log(filteredVehicles);
      const uniqueBrand = [
        ...new Set(params.data.agency.vehicles.map((vehicle) => vehicle.brand)),
      ];
      // new Set permet de créer un objet Set qui ne contient que des valeurs uniques. Ensuite, on transforme cet objet Set en tableau avec [...]. On récupère les marques uniques des véhicules de l'agence.
      const uniqueSeats = [
        ...new Set(
          params.data.agency.vehicles.map((vehicle) => vehicle.features.seats)
        ),
      ];
      const uniqueBeds = [
        ...new Set(
          params.data.agency.vehicles.map((vehicle) => vehicle.features.beds)
        ),
      ];

      setFilterValues({
        brands: uniqueBrand,
        places: uniqueSeats,
        beds: uniqueBeds,
      });
    }
  }, [filteredVehicles]);

  const handleSearchWithFilters = () => {
    if (!params.data) return;

    const filtered = params.data.agency.vehicles.filter((vehicle) => {
      const filterByBrand = selectedFilters.Marque
        ? vehicle.brand === selectedFilters.Marque
        : true;

      const filterBySeats = selectedFilters.Places
        ? vehicle.features.seats === parseInt(selectedFilters.Places)
        : true;

      const filterByBeds = selectedFilters.Couchages
        ? vehicle.features.beds === parseInt(selectedFilters.Couchages)
        : true;

      const filterByTent = selectedFilters.Tente ? vehicle.features.tent : true;

      const filterByFridge = selectedFilters.Frigo
        ? vehicle.features.fridge
        : true;

      const filterByWater = selectedFilters.Eau ? vehicle.features.water : true;

      const filterByWC = selectedFilters.WC ? vehicle.features.wc : true;

      return (
        filterByBrand &&
        filterBySeats &&
        filterByBeds &&
        filterByTent &&
        filterByFridge &&
        filterByWater &&
        filterByWC
      );
    });

    const sortedVehicles = selectedFilters.Prix
      ? filtered.sort((a, b) => {
          if (selectedFilters.Prix === "Prix croissant") {
            return a.price - b.price;
          } else if (selectedFilters.Prix === "Prix décroissant") {
            return b.price - a.price;
          }
        })
      : filtered;
    // setFilteredVehicles(sortedVehicles);
    params.onData(sortedVehicles);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="flex gap-12 mb-4">
      {/*Object.entries(filterOptions) permet de transformer un objet en tableau de tableaux. Dans ce cas, on récupère les clés et les valeurs de l'objet filterOptions qui serait par exemple {Marque: ["Renault", "Peugeot"], Prix: ["Prix croissant", "Prix décroissant"], Places: ["2 places", "4 places"], Couchages: ["2 couchages", "4 couchages"]} et on les map pour créer un select pour chaque clé avec les valeurs associées. Ça donnera pour cette exemple un select pour Marque avec les options Renault et Peugeot, un select pour Prix avec les options Prix croissant et Prix décroissant, etc.*/}
      {Object.entries(filterOptions).map(([name, options], index) => (
        <select
          className="select select-bordered w-full max-w-xs"
          key={index}
          defaultValue={name}
          onChange={(e) => {
            if (e.target.value === "Indifférent") {
              const { [name]: _, ...rest } = selectedFilters;
              // const { [name]: _, ...rest } = selectedFilters permet de supprimer la clé name de l'objet selectedFilters. Par exemple, si name vaut "Marque", ça donnera const { Marque: _, ...rest } = selectedFilters, ce qui revient à supprimer la clé Marque de selectedFilters. On stocke le reste des clés dans la variable rest. Ça permet de supprimer la clé name de selectedFilters sans avoir à connaître son nom à l'avance.
              setSelectedFilters(rest);
            } else {
              setSelectedFilters({
                ...selectedFilters,
                [name]: e.target.value,
              });
            }
          }}
        >
          <option disabled>{name}</option>
          <option className="font-semibold">Indifférent</option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
      {checkboxOptions.map((name, index) => (
        <label className="flex items-center space-x-2" key={index}>
          <form></form>
          <input
            type="checkbox"
            className="checkbox  border-violet-600 [--chkbg:theme(colors.violet.500)]"
            name={name}
            checked={selectedFilters[name]}
            onChange={handleCheckboxChange}
          />
          <span className="hover:cursor-pointer">{name}</span>
        </label>
      ))}

      <button
        className="btn bg-violet-500 border-violet-600  rounded-full"
        onClick={handleSearchWithFilters}
      >
        Rechercher
      </button>
    </div>
  );
}
