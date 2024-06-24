"use client";
import classes from "./SpacetecAd.module.css";
import Image from "next/image";
import spacetec from "@/public/spacetec2.png";
import Button from "../../Button";

export default function SpacetecAd() {
  return (
    <div className={classes.spacetecAdDiv}>
      <div className={classes.leftDiv}>
        <h2>Need help?</h2>
        <p>
          <b>Spacetec is here for you!</b>
          <br />
          Talk to Spacetec soldiers to find solutions for your difficulties.
        </p>
        <Button link="chat">Get help</Button>
      </div>
      <div className={classes.rightDiv}>
        <Image src={spacetec} alt="spacetec" />
      </div>
    </div>
  );
}
