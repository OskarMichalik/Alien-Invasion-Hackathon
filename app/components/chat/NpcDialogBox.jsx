import classes from "./NpcDialogBox.module.css";
import Image from "next/image";
import soldier from "@/public/soldier_icon_transparent.png";
import doctor from "@/public/doctor_icon_transparent.png";
import military_camp from "@/public/military_camp.png";
import hospital from "@/public/hospital.png";
import field from "@/public/field.png";
import ResponseBox from "./ResponseBox";
import { AnimatePresence, motion } from "framer-motion";

export default function NpcDialogBox({ selectedPlace, dialog }) {
  let backgroundImage =
    selectedPlace === "military_camp"
      ? military_camp
      : selectedPlace === "hospital"
      ? hospital
      : field;
  return (
    <div className={classes.npcDialogBoxDiv}>
      {selectedPlace === "military_camp" && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
        </AnimatePresence>
      )}

      {selectedPlace === "hospital" && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
        </AnimatePresence>
      )}
      {selectedPlace === "" && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
        </AnimatePresence>
      )}
      {selectedPlace === "military_camp" && (
        <AnimatePresence>
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
              src={soldier}
              alt="soldier"
              className={classes.characterIcon}
            />
          </motion.div>
        </AnimatePresence>
      )}
      {selectedPlace === "hospital" && (
        <AnimatePresence>
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
              src={doctor}
              alt="doctor"
              className={classes.characterIcon}
            />
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {selectedPlace && dialog && <ResponseBox />}
      </AnimatePresence>
    </div>
  );
}
