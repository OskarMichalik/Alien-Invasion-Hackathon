import classes from "./MapSetting.module.css";
import circle_icon from "@/public/circle.svg";
import Image from "next/image";
import {
  Map,
  AdvancedMarker,
  Pin,
  useMap,
  useMapsLibrary,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import SAFEZONES_LOCATIONS from "@/store/static/SAFEZONES_LOCATIONS";
import ALIENS_LOCATIONS from "@/store/static/ALIENS_LOCATION";

export default function MapSetting() {
  const map = useMap();
  const maps = useMapsLibrary("maps");

  const [whichIsOpen, setWhichIsOpen] = useState("");

  if (!maps) {
    return null;
  }

  return (
    <div className={classes.mapDiv}>
      <Map
        defaultZoom={10}
        zoomControl={false}
        mapId={process.env.MAP_ID}
        defaultCenter={{ lat: 30.2672, lng: -97.73333 }}
        disableDefaultUI={true}
        gestureHandling={"cooperative"}
      >
        {ALIENS_LOCATIONS.map((element) => (
          <AdvancedMarker
            key={element.id}
            position={{ lat: element.lat, lng: element.lng }}
          >
            <Image src={circle_icon} alt="Aliens" width={element.width} />
          </AdvancedMarker>
        ))}
        {SAFEZONES_LOCATIONS.map((element) => (
          <AdvancedMarker
            key={element.id}
            position={{ lat: element.lat, lng: element.lng }}
            onClick={() => setWhichIsOpen(element.id)}
          >
            <Pin
              background={element.spaceTecApproved ? "#34b4eb" : "#6beb34"}
              borderColor={element.spaceTecApproved ? "#006d7e" : "#007e6d"}
              glyphColor={element.spaceTecApproved ? "#006d7e" : "#007e6d"}
            />

            {whichIsOpen === element.id && (
              <InfoWindow
                position={{ lat: element.lat, lng: element.lng }}
                onClose={() => setWhichIsOpen("")}
                className={classes.infoWindow}
                maxWidth={500}
                minWidth={300}
                headerContent={
                  <div className={classes.headerText}>
                    <h2>{element.name}</h2>
                    {/*element.spaceTecApproved && (
                      <div className={classes.spaceTecApprovedDiv}>
                        <h3>SpaceTec approved</h3>
                      </div>
                    )*/}
                  </div>
                }
              >
                <div className={classes.infoWindowDiv}>
                  {element.spaceTecApproved && (
                    <div className={classes.spaceTecApprovedDiv}>
                      <h3>&gt; SpaceTec approved</h3>
                    </div>
                  )}
                  <p>{element.description}</p>
                </div>
              </InfoWindow>
            )}
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  );
}
