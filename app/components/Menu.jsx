"use client";
import { motion } from "framer-motion";
import classes from "./Menu.module.css";
import Button from "./Button";

export default function Menu({ onClose, setMenuIsOpen }) {
  return (
    <div className={classes.menu}>
      <motion.div
        className={classes.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.1,
        }}
      />
      <motion.div
        className={classes.menuContent}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 150 }}
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 0.5,
        }}
      >
        <motion.div
          className={classes.menuButtons}
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          exit={{ x: 150 }}
          transition={{
            type: "spring",
            bounce: 0.05,
          }}
        >
          <Button link="" fnOnClick={setMenuIsOpen} fnValue={false}>
            Home
          </Button>
          <Button link="safezones" fnOnClick={setMenuIsOpen} fnValue={false}>
            Safezones
          </Button>
          <Button link="chat" isEmpty fnOnClick={setMenuIsOpen} fnValue={false}>
            Get Help
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
