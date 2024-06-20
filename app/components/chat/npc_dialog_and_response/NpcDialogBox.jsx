import classes from "./NpcDialogBox.module.css";
import ResponseBox from "./ResponseBox";
import { AnimatePresence } from "framer-motion";
import DisplayBackground from "./DisplayBackground";
import CharacterIcon from "./CharacterIcon";

export default function NpcDialogBox({
  selectedPlace,
  dialogId,
  loudText,
  battlefieldProgress,
  playerHealth,
  alienHealth,
  alienStatus,
}) {
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
      {selectedPlace === "battlefield" && (
        <AnimatePresence>
          <DisplayBackground selectedPlace={selectedPlace} />
        </AnimatePresence>
      )}
      {selectedPlace === "military_camp" && (
        <CharacterIcon selectedPlace={selectedPlace} />
      )}
      {selectedPlace === "hospital" && (
        <CharacterIcon selectedPlace={selectedPlace} />
      )}
      <AnimatePresence>
        {selectedPlace === "battlefield" && battlefieldProgress === "" && (
          <CharacterIcon
            selectedPlace={selectedPlace}
            battlefieldProgress={battlefieldProgress}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedPlace === "battlefield" &&
          battlefieldProgress === "battle" &&
          alienHealth > 0 && (
            <CharacterIcon
              selectedPlace={selectedPlace}
              battlefieldProgress={battlefieldProgress}
            />
          )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedPlace && (dialogId || battlefieldProgress === "battle") && (
          <ResponseBox
            dialogId={dialogId}
            loudText={loudText}
            battlefieldProgress={battlefieldProgress}
            playerHealth={playerHealth}
            alienHealth={alienHealth}
            alienStatus={alienStatus}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
