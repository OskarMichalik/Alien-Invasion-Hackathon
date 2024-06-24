import classes from "./ResponseBox.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import RESPONSE_OPTIONS from "@/store/static/RESPONSE_OPTIONS";
import { useRouter } from "next/navigation";

export default function ResponseBox({
  dialogId,
  loudText,
  battlefieldProgress = "",
  playerHealth = "",
  alienHealth = "",
  alienStatus = "",
}) {
  let answer = RESPONSE_OPTIONS.find((element) => element.id === dialogId);

  const router = useRouter();
  function changeWebSite(website) {
    router.push(`/${website}`);
  }

  const responseAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={
          loudText ? classes.responseBoxDivLoud : classes.responseBoxDiv
        }
        initial={{ opacity: 0, backgroundColor: "#00000000" }}
        animate={{
          opacity: 1,
          backgroundColor: loudText ? "#FFFFFFFF" : "#000000bb",
        }}
      >
        {battlefieldProgress !== "battle" && (
          <motion.p
            onClick={
              answer.id === "where_safezones"
                ? () => changeWebSite("safezones")
                : undefined
            }
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.07,
            }}
            key={answer.id}
          >
            &gt; &nbsp;{" "}
            {answer.response.split(" ").map((word) => (
              <motion.span
                key={`${Math.random()}`}
                variants={responseAnimations}
                className={
                  answer.id === "where_safezones"
                    ? classes.hoverPointer
                    : undefined
                }
              >
                {`${word} `}
              </motion.span>
            ))}
          </motion.p>
        )}
        {battlefieldProgress === "battle" &&
          playerHealth > 0 &&
          alienHealth > 0 && (
            <div
              className={loudText ? classes.battleDivLoud : classes.battleDiv}
            >
              <div className={classes.healthStatus}>
                <div className={classes.characterInfo}>
                  <span className={classes.characterHealth}>
                    Player&apos;s Health:
                  </span>
                  <div className={classes.healthBar}>
                    <div
                      className={classes.healthBarValue}
                      style={{ width: `${playerHealth}%` }}
                    />
                  </div>
                </div>
                <div className={classes.characterInfo}>
                  <span className={classes.characterHealth}>
                    Alien&apos;s Health:
                  </span>
                  <div className={classes.healthBar}>
                    <div
                      className={classes.healthBarValue}
                      style={{ width: `${alienHealth}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.alienStatus}>
                Alien status: {alienStatus}
              </div>
            </div>
          )}
        {battlefieldProgress === "battle" &&
          (alienHealth <= 0 || playerHealth <= 0) && (
            <div className={loudText ? classes.scoreLoud : classes.score}>
              {playerHealth > 0 ? <p>You won!</p> : <p>Alien has won!</p>}
            </div>
          )}
      </motion.div>
    </AnimatePresence>
  );
}
