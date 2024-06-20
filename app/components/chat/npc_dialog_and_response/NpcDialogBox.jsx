import classes from "./NpcDialogBox.module.css";
import Image from "next/image";
import soldier from "@/public/soldier_icon_transparent.png";
import doctor from "@/public/doctor_icon_transparent.png";
import ResponseBox from "./ResponseBox";
import { AnimatePresence, motion } from "framer-motion";
import DisplayBackground from "./DisplayBackground";
import CharacterIcon from "./CharacterIcon";

export default function NpcDialogBox({ selectedPlace, dialogId, loudText }) {
  return (
    <div className={classes.npcDialogBoxDiv}>
      {selectedPlace === "military_camp" && (
        <AnimatePresence>
          <DisplayBackground selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}

      {selectedPlace === "hospital" && (
        <AnimatePresence>
          <DisplayBackground selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}
      {selectedPlace === "" && (
        <AnimatePresence>
          <DisplayBackground selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}
      {selectedPlace === "military_camp" && (
        <AnimatePresence>
          <CharacterIcon selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}
      {selectedPlace === "hospital" && (
        <AnimatePresence>
          <CharacterIcon selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}
      <AnimatePresence>
        {selectedPlace && dialogId && (
          <ResponseBox dialogId={dialogId} loudText={loudText} />
        )}
      </AnimatePresence>
    </div>
  );
}
