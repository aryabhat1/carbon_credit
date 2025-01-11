import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="/meeting1.jpg"
                    alt="meeting_image"
                    fill={true}
                    className={styles.img}
                />

                <div className={styles.imgText}>
                    <h1>
                        Driving Global Initiative To Reduce Carbon Emissions
                    </h1>

                    {/* <h1 className={styles.imgTitle}>Global Carbon Exchange</h1> */}

                    {/* <h2 className={styles.imgDesc}>
                        We facilitate farmers and industries to trade Carbon
                    </h2> */}
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.desc}>
                        GCCE is a forward-thinking clean technology company
                        dedicated to creating innovative, sustainable solutions
                        that address the world's most pressing environmental
                        challenges. We specialize in developing cutting-edge
                        technologies designed to reduce carbon footprints,
                        improve energy efficiency, and support the global
                        transition to a greener, cleaner future.
                        <br></br>
                        <br></br>
                        <h2 className={styles.title}>Our Mission</h2>
                        Our mission is to drive the adoption of clean
                        technologies that foster a more sustainable and
                        resilient planet. We believe that by harnessing the
                        power of innovation, collaboration, and technology, we
                        can make a significant impact on reducing environmental
                        degradation and ensuring a cleaner, healthier world for
                        future generations.
                    </p>
                </div>

                <div className={styles.item}>
                    <h1 className={styles.title}>Our Approach</h1>

                    <p className={styles.desc}>
                        We take a holistic, science-driven approach to clean
                        tech, focusing on delivering scalable solutions that are
                        not only environmentally responsible but also
                        economically viable.
                        <br></br>
                        <br></br>
                        We collaborate with industry leaders, research
                        institutions, and local communities to develop and
                        deploy technologies that create lasting, positive
                        change. Our solutions are designed to accelerate the
                        transition to a low-carbon economy while promoting
                        economic growth, job creation, and social well-being.
                        <br />
                        <br /> - Training of Traders
                        <br />
                        <br /> - Customer Support
                        <br />
                        <br /> - Special Events
                    </p>
                    <Button url="/contact" text="Contact Us"></Button>
                </div>
            </div>
        </div>
    );
};

export default About;
