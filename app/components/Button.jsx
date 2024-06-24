"use client";
import classes from "./Button.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Button({
  isEmpty = false,
  link,
  buttonType = "button",
  children,
  fnOnClick,
  fnValue,
  disabled,
}) {
  const router = useRouter();

  function changeWebSite(website) {
    router.push(`/${website}`);
  }

  function clickFn() {
    changeWebSite(link);
    if (fnOnClick && fnValue) {
      fnOnClick(fnValue);
    } else if (fnOnClick) {
      fnOnClick();
    }
  }
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      type={buttonType}
      className={isEmpty ? classes.empty : classes.full}
      onClick={clickFn}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
