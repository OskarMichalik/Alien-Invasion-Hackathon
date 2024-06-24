"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Header.module.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 350, 500], [0, 0, -200]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else if (!menuIsOpen) {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  const pathname = usePathname();

  return (
    <motion.div className={classes.headerDiv} style={{ y: yValue }}>
      <Link href="/" as="/">
        <Image src={logo} alt="Alien logo" as="/" priority />
      </Link>
      <div className={classes.navigationButtons}>
        <Button link="" isEmpty={pathname === "/"} disabled={pathname === "/"}>
          Home
        </Button>
        <Button
          link="safezones"
          isEmpty={pathname === "/safezones"}
          disabled={pathname === "/safezones"}
        >
          Safezones
        </Button>
        <Button
          link="chat"
          isEmpty={pathname === "/chat"}
          disabled={pathname === "/chat"}
        >
          Get Help
        </Button>
      </div>
      <AnimatePresence>
        {menuIsOpen && (
          <Menu
            onClose={() => setMenuIsOpen(false)}
            setMenuIsOpen={setMenuIsOpen}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
      <div
        className={classes.navigationBurger}
        onClick={() => setMenuIsOpen(true)}
      >
        <svg
          className="orbit-icon inline-block shrink-0 fill-current align-middle size-icon-medium"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M22 6c0 .552-.526 1-1.177 1H3.177C2.527 7 2 6.552 2 6s.527-1 1.176-1h17.647C21.474 5 22 5.448 22 6ZM3.176 13C2.526 13 2 12.552 2 12s.526-1 1.176-1h17.647c.65 0 1.177.448 1.177 1s-.527 1-1.177 1H3.177ZM20.823 19c.651 0 1.177-.448 1.177-1s-.526-1-1.177-1H3.177C2.527 17 2 17.448 2 18s.527 1 1.176 1h17.647Z"></path>
        </svg>
      </div>
    </motion.div>
  );
}
