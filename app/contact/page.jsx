import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let&apos;s keep in touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact2.jpg"
                        alt="contact"
                        className={styles.img}
                        fill={true}
                        // width={500} height={350}
                    />
                </div>

                <form className={styles.form} action="">
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        className={styles.input}
                    />

                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className={styles.textArea}
                        placeholder="message"
                    ></textarea>

                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
