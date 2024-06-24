import MapContainer from "../components/safezones/MapContainer";
import SafezonesDescription from "../components/safezones/SafezonesDescription";

export default function SafezonesHome() {
  return (
    <div className="homeDiv">
      <SafezonesDescription />
      <MapContainer />
    </div>
  );
}
