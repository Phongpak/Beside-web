import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  P,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxInput,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlj8JV-ieM77jiIEOXqzSKmdDiRCcVKGA",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  // const center = { lat: 43.45, lng: -80.49 };
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div> */}
      <GoogleMap
        zoom={17}
        center={{ lat: 43.45, lng: -80.49 }}
        mapContainerClassName="map-container"
      >
        {/* {selected && <Marker position={selected} />} */}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { state, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  return (
    <Combobox>
      <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} />
    </Combobox>
  );
};
