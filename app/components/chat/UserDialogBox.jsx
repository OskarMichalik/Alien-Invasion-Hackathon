import classes from "./UserDialogBox.module.css";
import { useState } from "react";
import TalkBubble from "./TalkBubble";

export default function UserDialogBox({
  selectedPlace,
  setSelectedPlace,
  setDialog,
}) {
  function changePlace(place) {
    setDialog("");
    setSelectedPlace(place);
  }

  return (
    <div className={classes.userDialogBoxDiv}>
      <p>
        <span onClick={() => changePlace("")} className={classes.hoverPointer}>
          Field
        </span>
        {selectedPlace !== "" && ` > ${selectedPlace}`}
      </p>
      {selectedPlace === "" && (
        <>
          <p>
            <i>Where do you want to go?</i>
          </p>
          <p
            className={classes.hoverPointer}
            onClick={() => changePlace("military_camp")}
          >
            &gt; Military Camp
          </p>
          <p
            className={classes.hoverPointer}
            onClick={() => changePlace("hospital")}
          >
            &gt; Hospital
          </p>
        </>
      )}
      {selectedPlace === "military_camp" && (
        <>
          <p>
            <i>Ask a soldier</i>
          </p>
          <p
            className={classes.hoverPointer}
            onClick={() => setDialog("what_happend_soldier")}
          >
            &gt; What happend?
          </p>
          <p
            className={classes.hoverPointer}
            onClick={() => setDialog("is_this_place_safe_soldier")}
          >
            &gt; Is this place safe?
          </p>
          <p className={classes.hoverPointer}>&gt; Speak louder</p>
        </>
      )}
    </div>
  );
}
