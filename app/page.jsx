import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero1_ladies_farm.jpg";

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.item}>
                {/* </div> */}
                <div className={styles.title}>
                    <h1>Trade your carbon credit on a Global Exchange.</h1>
                    <p className={styles.desc}>
                        Let us make the Earth go Green, again!
                    </p>

                    <div>
                        <button className={styles.button_class}>
                            How to Trade
                        </button>
                        
                    
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <Image
                    src={Hero}
                    alt="hero_image"
                    width={500}
                    height={500}
                    className={styles.img}
                ></Image>
            </div>
        </main>
    );
}
