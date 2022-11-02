import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { getLatLng } from "react-places-autocomplete";
import { useOrder } from "../context/OrderContext";

export default function GoogleMapContainer({ selected, setSelected }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEgnqaYKv_x_EQEXkA2qCgSzgqXJPDloA",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map selected={selected} setSelected={setSelected} />;
}
function Map({ selected, setSelected }) {
  const center = useMemo(() => ({ lat: 13.7340977, lng: 100.5164019 }), []);
  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap
        zoom={17}
        center={selected || center}
        mapContainerClassName="w-full h-full"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}
const PlacesAutocomplete = ({ setSelected }) => {
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
    const { lat, lng } = await getLatLng(results[0]);
    const pin = await getLatLng(results[0]);
    const Lat = pin?.lat?.toString();
    const Lng = pin?.lng?.toString();
    setBook({ ...book, lng: Lng, lat: Lat, location: address.split(",")[0] });

    setSelected({ lat, lng });
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="w-full p-3 rounded"
        placeholder="Enter a destination"
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
