import { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Image from "next/image";

const center = { lat: 45.497276, lng: -73.578900 };

const InteractiveMap = () => {
  const [isClient, setIsClient] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(true);

  useEffect(() => {
    setIsClient(true);

    // Check if Google Maps script is loaded
    setTimeout(() => {
      const isBlocked = document.querySelector("img[src*='maps.gstatic.com']") === null;
      if (isBlocked) {
        setMapLoaded(false);
      }
    }, 3000);
  }, []);

  return isClient ? (
    <>
      {!mapLoaded ? (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
          <Map
            className="map-style"
            center={center}
            zoom={16}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!}
          >
            <AdvancedMarker position={center} />
          </Map>
        </APIProvider>
      ) : (
        <a href={`https://www.google.com/maps?q=${center.lat},${center.lng}`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=15&size=600x1000&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            alt="Google Maps"
            layout="responsive"
            width={600}
            height={1000}
            className="w-full"
          />
        </a>
      )}
    </>
  ) : null;
};

export default InteractiveMap;
