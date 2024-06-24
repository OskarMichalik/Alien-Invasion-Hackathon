import classes from "./ListQuestions.module.css";
import USER_OPTIONS_NURSE from "@/store/static/USER_OPTIONS_NURSE";
import USER_OPTIONS_SOLDIER from "@/store/static/USER_OPTIONS_SOLDIER";
import USER_TUTORIAL_BATTLE from "@/store/static/USER_TUTORIAL_BATTLE";
import { useState } from "react";

export default function ListQuestions({
  setDialog,
  selectedPlace,
  setLoudText,
  loudText,
  battlefieldProgress = "",
  setBattlefieldProgress = "",
  setAlienHealth = "",
  setPlayerHealth = "",
  setSlienStatus = "",
  alienHealth = "",
  playerHealth = "",
}) {
  let questions =
    selectedPlace === "military_camp"
      ? USER_OPTIONS_SOLDIER
      : selectedPlace === "hospital"
      ? USER_OPTIONS_NURSE
      : battlefieldProgress === "" && USER_TUTORIAL_BATTLE;

  const [blockReady, setBlockReady] = useState(false);

  function attack() {
    setAlienHealth((prev) => prev - 30);
    if (!blockReady) setPlayerHealth((prev) => prev - 40);
    setBlockReady(false);
    setSlienStatus("normal");
  }
  function block() {
    if (!blockReady) {
      setBlockReady(true);
      setSlienStatus("stunned");
    } else {
      setPlayerHealth((prev) => prev - 50);
      setBlockReady(false);
      setSlienStatus("normal");
    }
  }
  function leaveBattle() {
    setBlockReady(false);
    setSlienStatus("normal");
    setAlienHealth(100);
    setPlayerHealth(100);
    setBattlefieldProgress("");
  }
  function retry() {
    setBlockReady(false);
    setSlienStatus("normal");
    setAlienHealth(100);
    setPlayerHealth(100);
    setBattlefieldProgress("battle");
  }

  return (
    <div className={classes.listQuestionsDiv}>
      <p>
        {selectedPlace !== "battlefield" && (
          <i>
            Ask a Spacetec
            {selectedPlace === "military_camp" ? " soldier" : " doctor"}
          </i>
        )}
        {selectedPlace === "battlefield" && <span>&nbsp;</span>}
      </p>
      <div className={classes.questionsDiv}>
        {battlefieldProgress !== "battle" &&
          questions.map((item) => (
            <p
              key={item.id}
              className={classes.hoverPointer}
              onClick={() => setDialog(item.id)}
            >
              &gt; {item.question}
            </p>
          ))}
        {battlefieldProgress === "battle" &&
          alienHealth > 0 &&
          playerHealth > 0 && (
            <>
              <p className={classes.hoverPointer} onClick={attack}>
                &gt; Attack
              </p>
              <p className={classes.hoverPointer} onClick={block}>
                &gt; Block
              </p>
              <p className={classes.hoverPointer} onClick={leaveBattle}>
                &gt; Leave the battle
              </p>
            </>
          )}
        {battlefieldProgress === "battle" &&
          (alienHealth <= 0 || playerHealth <= 0) && (
            <>
              <p className={classes.hoverPointer} onClick={retry}>
                &gt; {playerHealth > 0 ? "Fight another" : "Try again"}
              </p>
              <p className={classes.hoverPointer} onClick={leaveBattle}>
                &gt; Leave the battle
              </p>
            </>
          )}
        {selectedPlace === "battlefield" && battlefieldProgress === "" && (
          <p
            className={classes.hoverPointer}
            onClick={() => {
              setDialog("");
              setBattlefieldProgress("battle");
            }}
          >
            &gt; Let&apos;s start the battle.
          </p>
        )}
        <p
          className={classes.hoverPointer}
          onClick={() => {
            setLoudText((prev) => !prev);
            setDialog("loud_text");
          }}
        >
          &gt; {!loudText ? "Speak louder." : "Be quiet."}
        </p>
      </div>
    </div>
  );
}
