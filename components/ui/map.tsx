import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 45.49721908569336, // Montreal latitude
  lng: -73.5787582397461, // Montreal longitude
};

const InteractiveMap = () => {
  const handleMarkerClick = () => {
    window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}`, "_blank");
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} onClick={handleMarkerClick} />
      </GoogleMap>
    </LoadScript>
  );
};

export default InteractiveMap;
