"use client"

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
    //   const mode = "dark";
    const {toggle, mode} = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌗 </div>
            <div className={styles.icon}>🌞 </div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            ></div>
        </div>
    );
};

export default DarkModeToggle;
