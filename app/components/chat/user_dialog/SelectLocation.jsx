import classes from "./SelectLocation.module.css";

export default function SelectLocation({
  location,
  setDialog,
  setSelectedPlace,
  children,
}) {
  function changePlace(place) {
    setDialog("");
    setSelectedPlace(place);
  }
  return (
    <p className={classes.hoverPointer} onClick={() => changePlace(location)}>
      &gt; {children}
    </p>
  );
}
