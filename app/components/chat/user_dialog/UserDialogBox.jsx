import classes from "./UserDialogBox.module.css";
import ListQuestions from "./ListQuestions";
import SelectLocation from "./SelectLocation";

export default function UserDialogBox({
  selectedPlace,
  setSelectedPlace,
  setDialog,
  setLoudText,
  loudText,
  battlefieldProgress,
  setBattlefieldProgress,
  setAlienHealth,
  setPlayerHealth,
  setSlienStatus,
  alienHealth,
  playerHealth,
}) {
  function changePlace(place) {
    setDialog("");
    setSelectedPlace(place);
  }

  let displayNameSelectedPlace =
    selectedPlace === "military_camp"
      ? "Military camp"
      : selectedPlace === "hospital"
      ? "Hospital"
      : selectedPlace === "battlefield" && "Battlefield";

  return (
    <div className={classes.userDialogBoxDiv}>
      <p>
        <span onClick={() => changePlace("")} className={classes.hoverPointer}>
          Field
        </span>
        {selectedPlace !== "" && ` > ${displayNameSelectedPlace}`}
      </p>
      {selectedPlace === "" && (
        <>
          <p>
            <i>Where do you want to go?</i>
          </p>
          <SelectLocation
            location="military_camp"
            setDialog={setDialog}
            setSelectedPlace={setSelectedPlace}
          >
            Military Camp
          </SelectLocation>
          <SelectLocation
            location="hospital"
            setDialog={setDialog}
            setSelectedPlace={setSelectedPlace}
          >
            Hospital
          </SelectLocation>
          <SelectLocation
            location="battlefield"
            setDialog={setDialog}
            setSelectedPlace={setSelectedPlace}
          >
            Battlefield
          </SelectLocation>
        </>
      )}
      {selectedPlace === "military_camp" && (
        <ListQuestions
          setDialog={setDialog}
          selectedPlace={selectedPlace}
          setLoudText={setLoudText}
          loudText={loudText}
        />
      )}
      {selectedPlace === "hospital" && (
        <ListQuestions
          setDialog={setDialog}
          selectedPlace={selectedPlace}
          setLoudText={setLoudText}
          loudText={loudText}
        />
      )}
      {selectedPlace === "battlefield" && (
        <ListQuestions
          setDialog={setDialog}
          selectedPlace={selectedPlace}
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
      )}
    </div>
  );
}
