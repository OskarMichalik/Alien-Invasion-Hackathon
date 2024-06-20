import classes from "./CharacterIcon.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import soldier from "@/public/soldier_icon_transparent.png";
import doctor from "@/public/doctor_icon_transparent.png";
import alien from "@/public/alien_icon.png";

export default function CharacterIcon({
  selectedPlace,
  battlefieldProgress = "",
}) {
  var character;
  if (selectedPlace !== "battlefield") {
    character =
      selectedPlace === "military_camp"
        ? soldier
        : selectedPlace === "hospital" && doctor;
  } else if (battlefieldProgress === "") {
    character = soldier;
  } else if (battlefieldProgress === "battle") {
    character = alien;
  }
  return (
    <>
      <motion.div
        className={classes.characterIconDiv}
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: battlefieldProgress === "battle" ? 0.5 : 0.2 },
        }}
        exit={{ opacity: 0, x: -30 }}
        transition={{
          duration: 0.2,
        }}
      >
        <Image
          src={character}
          alt="soldier"
          className={classes.characterIcon}
        />
      </motion.div>
    </>
  );
}
