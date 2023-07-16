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

                <h1 className={styles.title}>Who Are We?</h1>
                <p className={styles.desc}>
                  jsjkd  djjjskl sjkkdkkc kkkkdnn djjj Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  <br></br>
                  <br></br>
                  
                  Quasi expedita unde laboriosam debitis eligendi distinctio reprehenderit ratione cumque autem fugiat consequuntur veniam vitae quidem esse voluptatum voluptates ab, rem porro?

                </p>
              </div>

              <div className={styles.item}>
                <h1 className={styles.title}>What We Do?</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt accusantium, ratione eveniet quidem dolorum minima nam esse 
                    <br></br>
                    <br></br>
                    sit ea tenetur! Saepe sed quae cumque ullam! Blanditiis libero at rerum.
                    <br />
                    <br /> - Training of Traders
                    <br />
                    <br /> - Customer Support
                    <br />
                    <br /> - Special Events
                </p>
                <Button url="/contact" text="Contact"></Button>

              </div>


            </div>
            
        </div>
    );
};

export default About;
