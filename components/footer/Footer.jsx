import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2023 GCCE. All rights reserved. </div>
            <div className={styles.social}>
                <Image
                    src="/icons/facebook.png"
                    width={45}
                    height={45}
                    alt="image"
                    className={styles.icons}
                />

                <Image
                    src="/icons/instagram.png"
                    width={45}
                    height={45}
                    alt="image"
                    className={styles.icons}
                />

                <Image
                    src="/icons/linkedin.png"
                    width={45}
                    height={45}
                    alt="image"
                    className={styles.icons}
                />

                <Image
                    src="/icons/twitter.png"
                    width={45}
                    height={45}
                    alt="image"
                    className={styles.icons}
                />

                <Image
                    src="/icons/youtube.png"
                    width={45}
                    height={45}
                    alt="image"
                    className={styles.icons}
                />
            </div>
        </div>
    );
};

export default Footer;
