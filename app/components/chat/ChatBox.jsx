"use client";
import classes from "./ChatBox.module.css";
import { useState } from "react";
import NpcDialogBox from "./NpcDialogBox";
import UserDialogBox from "./UserDialogBox";

export default function ChatBox() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [dialog, setDialog] = useState("");
  console.log(selectedPlace);
  return (
    <div className={classes.chatBoxDiv}>
      <NpcDialogBox selectedPlace={selectedPlace} dialog={dialog} />
      <UserDialogBox
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        setDialog={setDialog}
      />
    </div>
  );
}
