import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

import { getLatLng } from "react-places-autocomplete";
import { useOrder } from "../context/OrderContext";
import Autocomplete from "./AutoComplete";

export default function GoogleMapContainer({ selected, setSelected }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCEgnqaYKv_x_EQEXkA2qCgSzgqXJPDloA",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map selected={selected} setSelected={setSelected} />;
}
function Map({ selected, setSelected }) {
  const [isSearch, setSearch] = useState("");
  const center = useMemo(() => ({ lat: 13.7340977, lng: 100.5164019 }), []);
  return (
    <>
      <div className="places-container relative">
        <Autocomplete setSelected={setSelected} selected={selected} />
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
