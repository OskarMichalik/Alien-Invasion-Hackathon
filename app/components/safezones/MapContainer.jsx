"use client";
import classes from "./MapContainer.module.css";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapSetting from "./MapSetting";

export default function MapContainer() {
  return (
    <div className={classes.mapDiv}>
      <APIProvider apiKey={process.env.API_KEY}>
        <MapSetting />
      </APIProvider>
    </div>
  );
}
