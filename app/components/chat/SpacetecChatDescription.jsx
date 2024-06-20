import classes from "./SpacetecChatDescription.module.css";
import Image from "next/image";
import spacetec from "@/public/spacetec.png";

export default function SpacetecChatDescription() {
  return (
    <div className={classes.spacetecChatDescriptionDiv}>
      <div className={classes.logo}>
        <Image src={spacetec} alt="spacetec logo" />
        <h1>SpaceTec</h1>
      </div>
    </div>
  );
}
