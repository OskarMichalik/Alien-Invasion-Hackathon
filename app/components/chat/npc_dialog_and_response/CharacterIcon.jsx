import classes from "./CharacterIcon.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import soldier from "@/public/soldier_icon_transparent.png";
import doctor from "@/public/doctor_icon_transparent.png";

export default function CharacterIcon({ selectedPlace }) {
  let character =
    selectedPlace === "military_camp"
      ? soldier
      : selectedPlace === "hospital" && doctor;
  return (
    <>
      <motion.div
        className={classes.characterIconDiv}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          duration: 0.5,
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
