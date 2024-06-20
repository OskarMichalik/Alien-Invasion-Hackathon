"use client";
import classes from "./ChatBox.module.css";
import { useState } from "react";
import NpcDialogBox from "./npc_dialog_and_response/NpcDialogBox";
import UserDialogBox from "./user_dialog/UserDialogBox";

export default function ChatBox() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [dialog, setDialog] = useState("");
  const [loudText, setLoudText] = useState(false);
  const [battlefieldProgress, setBattlefieldProgress] = useState("");
  const [playerHealth, setPlayerHealth] = useState(100);
  const [alienHealth, setAlienHealth] = useState(100);
  const [alienStatus, setSlienStatus] = useState("normal");

  return (
    <div className={classes.chatBoxDiv}>
      <NpcDialogBox
        selectedPlace={selectedPlace}
        dialogId={dialog}
        loudText={loudText}
        battlefieldProgress={battlefieldProgress}
        playerHealth={playerHealth}
        alienHealth={alienHealth}
        alienStatus={alienStatus}
      />
      <UserDialogBox
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        setDialog={setDialog}
        setLoudText={setLoudText}
        loudText={loudText}
        battlefieldProgress={battlefieldProgress}
        setBattlefieldProgress={setBattlefieldProgress}
        setAlienHealth={setAlienHealth}
        setPlayerHealth={setPlayerHealth}
        setSlienStatus={setSlienStatus}
        alienHealth={alienHealth}
        playerHealth={playerHealth}
      />
    </div>
  );
}
