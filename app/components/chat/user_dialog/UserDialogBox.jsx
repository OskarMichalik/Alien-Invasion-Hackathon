import classes from "./UserDialogBox.module.css";
import ListQuestions from "./ListQuestions";

export default function UserDialogBox({
  selectedPlace,
  setSelectedPlace,
  setDialog,
  setLoudText,
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
        <ListQuestions
          setDialog={setDialog}
          selectedPlace={selectedPlace}
          setLoudText={setLoudText}
        />
      )}
      {selectedPlace === "hospital" && (
        <ListQuestions
          setDialog={setDialog}
          selectedPlace={selectedPlace}
          setLoudText={setLoudText}
        />
      )}
    </div>
  );
}
