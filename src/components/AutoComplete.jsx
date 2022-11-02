import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { useOrder } from "../context/OrderContext";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { getLatLng } from "react-places-autocomplete";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export default function MyCombobox({ setSelected, selected }) {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const { book, setBook } = useOrder();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    setBook({ ...book, location: address.split(",")[0] });
    const { lat, lng } = await getLatLng(results[0]);

    setSelected({ lat, lng });
  };

  return (
    <Combobox onChange={handleSelect}>
      <Combobox.Input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        disabled={!ready}
        className="w-full rounded p-3"
      />
      <Combobox.Options>
        {status === "OK"
          ? data.map((item) => (
              <Combobox.Option
                key={item.place_id}
                value={item.description}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-gray-700 text-white" : "text-gray-900"
                  }`
                }
              >
                {item.description}
              </Combobox.Option>
            ))
          : ""}
      </Combobox.Options>
    </Combobox>
  );
}
