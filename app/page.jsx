import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/front-earth-burning.jpeg";
import Button from "@/components/button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Trade your carbon credit on a Global Exchange. </h1>
                    <p className={styles.desc}>
                        Let us make the Earth go Green, again!
                    </p>

                    <Button url="/trade" text="How to Trade"></Button>

                
            </div>
            <div className={styles.item}>
                <Image
                    src={Hero}
                    alt="hero_image"
                    // width={500}
                    // height={500}
                    className={styles.img}
                ></Image>
            </div>
        </div>
    );
}
