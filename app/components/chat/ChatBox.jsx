"use client";
import classes from "./ChatBox.module.css";
import { useState } from "react";
import NpcDialogBox from "./npc_dialog_and_response/NpcDialogBox";
import UserDialogBox from "./user_dialog/UserDialogBox";

export default function ChatBox() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [dialog, setDialog] = useState("");
  const [loudText, setLoudText] = useState(false);

  return (
    <div className={classes.chatBoxDiv}>
      <NpcDialogBox
        selectedPlace={selectedPlace}
        dialogId={dialog}
        loudText={loudText}
      />
      <UserDialogBox
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        setDialog={setDialog}
        setLoudText={setLoudText}
      />
    </div>
  );
}
