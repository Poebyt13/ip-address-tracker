
import { Marker } from "react-leaflet"
import { IconLocation } from "./IconLocation";

function Markers({lat, lng}) {

  return (
    <Marker position={{lat: lat, lng: lng}} icon={IconLocation}></Marker>
  )
}

export default Markers