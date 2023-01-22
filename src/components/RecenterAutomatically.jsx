

import { useMap } from 'react-leaflet/hooks'
import { useEffect } from "react";

export const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
}