import classes from "./DisplayBackground.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import military_camp from "@/public/military_camp.png";
import hospital from "@/public/hospital.png";
import field from "@/public/field.png";
import battlefield from "@/public/empty_road.png";

export default function DisplayBackground({ selectedPlace }) {
  let backgroundImage =
    selectedPlace === "military_camp"
      ? military_camp
      : selectedPlace === "hospital"
      ? hospital
      : selectedPlace === "battlefield"
      ? battlefield
      : field;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.imageDiv}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
    >
      <Image
        src={backgroundImage}
        alt="background image"
        className={classes.background}
        priority
      />
    </motion.div>
  );
}
