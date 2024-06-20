import classes from "./TalkBubble.module.css";
import Image from "next/image";
import user_icon from "@/public/user_icon.png";
import soldier_icon from "@/public/soldier_icon.png";
import doctor_icon from "@/public/doctor_icon.png";

export default function TalkBubble({ who = "", text }) {
  console.log(text);
  return (
    <>
      {text === "..." && (
        <div className={classes.responseUser}>
          <Image src={user_icon} alt="user icon" />{" "}
          <span className={classes.text}> &gt; ...</span>
        </div>
      )}
      {text !== "..." && (
        <>
          <div className={classes.responseUser}>
            <Image src={user_icon} alt="user icon" />{" "}
            <span className={classes.text}> &gt; {text}</span>
          </div>
          <div className={classes.responseNpc}>
            <Image
              src={who === "military_camp" ? soldier_icon : doctor_icon}
              alt="user icon"
            />{" "}
            <span className={classes.text}> ... &lt;</span>
          </div>
        </>
      )}
    </>
  );
}
