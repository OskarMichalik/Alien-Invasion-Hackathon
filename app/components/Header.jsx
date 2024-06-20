"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Header.module.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 350, 500], [0, 0, -200]);

  return (
    <motion.div className={classes.headerDiv} style={{ y: yValue }}>
      <Link href="/" as="/">
        <Image src={logo} alt="Alien logo" />
      </Link>
      <div className={classes.navigationButtons}>
        <Button link="">Home</Button>
        <Button link="safezones">Safezones</Button>
        <Button link="chat" isEmpty>
          Get Help
        </Button>
      </div>
      <div className={classes.navigationBurger}>test</div>
    </motion.div>
  );
}
