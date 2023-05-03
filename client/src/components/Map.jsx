import { Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ onLocationChange }) {
  
  const [currentLocation, setCurrentLocation] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const mapRef = useRef(null);

  const handleTrackLocation = ({ setLocation }) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
onLocationChange([latitude, longitude]);
        mapRef.current.flyTo([latitude, longitude], 13);
        
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      {isMobile ? (
        <div style={{ height: "100px", width: "300px" }}>
          {currentLocation && (
            <MapContainer
              ref={mapRef}
              center={currentLocation}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={currentLocation}>
                <Popup>You are here!</Popup>
              </Marker>
            </MapContainer>
          )}

          <button onClick={handleTrackLocation}>Track Location</button>
        </div>
      ) : (
        <div style={{ height: "250px", width: "250px" }}>
          {currentLocation && (
            <MapContainer
              ref={mapRef}
              center={currentLocation}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={currentLocation}>
                <Popup>You are here!</Popup>
              </Marker>
            </MapContainer>
          )}

          <Button onClick={handleTrackLocation}>Track Location</Button>
        </div>
      )}
    </>
  );
}

export default Map;
