"use client";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapSetting from "./MapSetting";
import MapLegend from "./MapLegend";

export default function MapContainer() {
  return (
    <div>
      <APIProvider apiKey={process.env.API_KEY}>
        <MapSetting />
      </APIProvider>
      <MapLegend />
    </div>
  );
}
