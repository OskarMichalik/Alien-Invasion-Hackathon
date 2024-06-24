import classes from "./SpacetecChatDescription.module.css";
import Image from "next/image";
import spacetec from "@/public/spacetec2.png";

export default function SpacetecChatDescription() {
  return (
    <div className={classes.spacetecChatDescriptionDiv}>
      <div className={classes.logo}>
        <Image src={spacetec} alt="spacetec logo" />
      </div>
      <h1>Spacetec Dialog Simulation</h1>
      <div className={classes.text}>
        <p>
          Don&apos;t worry, citizen. Spatec knows that many of you are sitting
          in a bunker and have accepted the invasion. We understand your
          cowardliness. That&apos;s why we created this chat simulator, so you
          have someone to talk to.
        </p>
        <p>
          For the braver citizens, this simulation will assist with dangerous
          tasks because sometimes only an ideal soldier can provide the right
          advice.
        </p>
      </div>
    </div>
  );
}
