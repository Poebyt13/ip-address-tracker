
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/Leaflet.css";
import Markers from "./Markers";
import { RecenterAutomatically } from "./RecenterAutomatically";


function Map({lat, lng}) {
  
  return (
    <div className="Map">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        maxZoom={17}
        minZoom={4}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        
        <RecenterAutomatically lat={lat} lng={lng} />
        <Markers lat = {lat} lng = {lng}></Markers>
      </MapContainer>
    </div>
  );
}

export default Map;
