import { VehicleTracker } from "./context/VehicleTracker";
import MapComponent from "./context/Map";
import RouteManager from "./context/RouteManager";
import FleetMetrics from "./context/FleetMetrics";

export default function Routes() {
  return (
    <div className="grid grid-cols-[1fr,_2fr] gap-4">
      <VehicleTracker />

      <div className="flex flex-col gap-4">
        <MapComponent />
        <div className="grid grid-cols-2 gap-4">
          <RouteManager />

          <FleetMetrics />
        </div>
      </div>
    </div>
  );
}
