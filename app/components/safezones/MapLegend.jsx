import classes from "./MapLegend.module.css";
import Image from "next/image";
import google_pin_blue from "@/public/google_pin_blue.png";
import google_pin_green from "@/public/google_pin_green.png";
import circle_icon from "@/public/circle.svg";

export default function MapLegend() {
  return (
    <div className={classes.mapLegendDiv}>
      <div className={classes.legendLine}>
        <Image src={google_pin_blue} alt="blue google map pin" />
        <span>SpaceTec Approved Safezone</span>
      </div>
      <div className={classes.legendLine}>
        <Image src={google_pin_green} alt="green google map pin" />
        <span>Safezone</span>
      </div>
      <div className={classes.legendLine}>
        <Image src={circle_icon} alt="blut google map pin" />
        <span>Dangerous zone</span>
      </div>
    </div>
  );
}
