import classes from "./ResponseBox.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import RESPONSE_OPTIONS from "@/store/static/RESPONSE_OPTIONS";
import { useRouter } from "next/navigation";

export default function ResponseBox({ dialogId, loudText }) {
  let answer = RESPONSE_OPTIONS.find((element) => element.id === dialogId);
  console.log(dialogId);

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
        <motion.p
          onClick={
            answer.id === "where_safezones"
              ? () => changeWebSite("safezones")
              : undefined
          }
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.15,
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
      </motion.div>
    </AnimatePresence>
  );
}

/*
import classes from "./ResponseBox.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import RESPONSE_OPTIONS from "@/store/static/RESPONSE_OPTIONS";
import { useRouter } from "next/navigation";

export default function ResponseBox({ dialogId }) {
  let answer = RESPONSE_OPTIONS.find((element) => element.id === dialogId);

  const router = useRouter();
  function changeWebSite(website) {
    router.push(`/${website}`);
  }

  return (
    <AnimatePresence>
      <motion.div
        className={classes.responseBoxDiv}
        initial={{ opacity: 0, backgroundColor: "#00000000" }}
        animate={{ opacity: 1, backgroundColor: "#000000bb" }}
      >
        <p
          onClick={
            answer.id === "where_safezones"
              ? () => changeWebSite("safezones")
              : undefined
          }
        >
          &gt; &nbsp; {answer.response}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

*/
