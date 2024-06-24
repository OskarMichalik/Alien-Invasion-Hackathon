import classes from "./SafezonesDescription.module.css";
import Image from "next/image";
import logo from "@/public/gov_logo.png";

export default function SafezonesDescription() {
  return (
    <div className={classes.safezonesDescriptionDiv}>
      <div className={classes.logo}>
        <Image src={logo} alt="us goverment logo" />
      </div>
      <h1>Safezones Map</h1>
      <div className={classes.text}>
        <p>
          The U.S. goverment, in cooparation with the private military SpaceTec,
          has created a special program to establish guerilla fighting groups.
          These groups fight for our freedom and create safezones throughout the
          earth.
        </p>
        <p>
          If you want to help your brothers, go to the nearest safezone and join
          them in their efforts.
        </p>
      </div>
    </div>
  );
}
