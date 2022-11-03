import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover
} from "@reach/combobox";
import { getLatLng } from "react-places-autocomplete";
import { useAuth } from "../context/AuthContext";

export default function GoogleMapContainerLocation({ setInput, input }) {
  // console.log(setInput);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEgnqaYKv_x_EQEXkA2qCgSzgqXJPDloA",
    libraries: ["places"]
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map setInput={setInput} input={input} />;
}
function Map({ setInput, input }) {
  console.log(setInput);
  const { user } = useAuth();
  const center = useMemo(() => ({ lat: 13.7340977, lng: 100.5164019 }), []);
  // const location = useMemo(() => ({ lat: user?.lat, lng: user?.lng }), []);
  // console.log("location", location);
  const [selected, setSelected] = useState(null);

  // const { input } = useAuth();
  console.log(input);
  // console.log(selected);
  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete
          setSelected={setSelected}
          setInput={setInput}
          input={input}
          selected={selected}
        />
      </div>
      <GoogleMap
        zoom={17}
        center={selected || center}
        mapContainerClassName="w-full h-full"
      >
        ({selected && <Marker position={selected} />})
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, setInput, input }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log(address);
    const results = await getGeocode({ address });

    const { lat, lng } = await getLatLng(results[0]);
    const pin = await getLatLng(results[0]);
    const Lat = pin?.lat?.toString();
    const Lng = pin?.lng?.toString();

    setInput({ ...input, lng: Lng, lat: Lat, location: address });
    console.log("input", input);
    setSelected({ lat, lng });
    // setSelected(kuy?.lat);
    // setSelected(kuy?.lng);
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        className="w-full p-3 rounded"
        placeholder="Enter a pin location"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
