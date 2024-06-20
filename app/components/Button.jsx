"use client";
import classes from "./Button.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Button({
  isEmpty = false,
  link,
  buttonType = "button",
  children,
}) {
  const router = useRouter();

  function changeWebSite(website) {
    router.push(`/${website}`);
  }
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      type={buttonType}
      className={isEmpty ? classes.empty : classes.full}
      onClick={() => changeWebSite(link)}
    >
      {children}
    </motion.button>
  );
}
