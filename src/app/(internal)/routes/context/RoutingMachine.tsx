/* eslint-disable @typescript-eslint/ban-ts-comment */
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

interface CustomControlOptions extends L.ControlOptions {
  waypoints: L.Routing.Waypoint[] | L.LatLng[] | undefined;
}

const createRoutineMachineLayer = (props: CustomControlOptions) => {
  const instance = L.Routing.control({
    waypoints: props.waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 0,
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    // @ts-expect-error
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function () {
      return null;
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
