import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

  const Routing = ({ sourceCity, destinationCity }) => {
  const map = useMap();

    useEffect(() => {
      if (!map) return;

      if ( sourceCity?.lat !== undefined && destinationCity?.lat !== undefined  ) {
          const routingControl = L.Routing.control({
          waypoints: [
            L.latLng( parseFloat(sourceCity.lat), parseFloat(sourceCity.lng) ), 
            L.latLng( parseFloat(destinationCity.lat), parseFloat(destinationCity.lng) )
          ],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
          },
          show: true,
          showAlternatives: true,
          addWaypoints: true, 
          fitSelectedRoutes: true,
        }).addTo(map);

        return () => map.removeControl(routingControl);
      }
      


    }, [map, sourceCity, destinationCity]);   

  return null;
}

export default Routing;