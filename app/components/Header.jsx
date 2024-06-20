"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Header.module.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 350, 500], [0, 0, -100]);
  //add main if on different website
  const router = useRouter();

  function changeWebSite(website) {
    router.push(`/${website}`);
  }

  return (
    <motion.div className={classes.headerDiv} style={{ y: yValue }}>
      <Link href="/" as="/">
        <Image src={logo} alt="Alien logo" />
      </Link>
      <nav>
        <button>Safezones</button>
        <button className="empty" onClick={() => changeWebSite("chat")}>
          Get Help
        </button>
      </nav>
    </motion.div>
  );
}
