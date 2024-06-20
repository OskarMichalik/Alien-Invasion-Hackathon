import classes from "./ListQuestions.module.css";
import USER_OPTIONS_NURSE from "@/store/static/USER_OPTIONS_NURSE";
import USER_OPTIONS_SOLDIER from "@/store/static/USER_OPTIONS_SOLDIER";

export default function ListQuestions({
  setDialog,
  selectedPlace,
  setLoudText,
}) {
  let questions =
    selectedPlace === "military_camp"
      ? USER_OPTIONS_SOLDIER
      : USER_OPTIONS_NURSE;
  console.log(selectedPlace);
  return (
    <div className={classes.listQuestionsDiv}>
      <p>
        <i>
          Ask a Spacetec
          {selectedPlace === "military_camp" ? " soldier" : " doctor"}
        </i>
      </p>
      <div className={classes.questionsDiv}>
        {questions.map((item) => (
          <p
            key={item.id}
            className={classes.hoverPointer}
            onClick={() => setDialog(item.id)}
          >
            &gt; {item.question}
          </p>
        ))}
        <p
          className={classes.hoverPointer}
          onClick={() => {
            setLoudText(true);
            setDialog("loud_text");
          }}
        >
          &gt; Speak louder.
        </p>
      </div>
    </div>
  );
}
