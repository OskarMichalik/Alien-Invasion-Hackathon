"use client";
import classes from "./LatestUpdate.module.css";
import Image from "next/image";
import soldier from "@/public/soldier.png";
import Button from "../../Button";

export default function LatestUpdate() {
  return (
    <div className={classes.latestUpdateDiv}>
      <div className={classes.leftDiv}>
        <h2>Latest Update:</h2>
        <p>
          <b>The Earth is still standing!</b>
          <br />
          Do your part, join the army or help in the safezones.
        </p>
        <Button link="safezones">Safezones</Button>
      </div>
      <div className={classes.rightDiv}>
        <Image src={soldier} alt="soldier" />
      </div>
    </div>
  );
}
