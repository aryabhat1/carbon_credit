
/*
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    // if (!res.ok) {
    //     throw new Error("Failed to fetch data");
    // }
    return res.json();
}

const Policy = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map((item) => (
                <Link
                    href={`/policy/${item._id}`}
                    className={styles.container}
                    key={item.id}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            width={400}
                            height={250}
                            alt="no paris"
                            className={styles.image}
                        ></Image>
                    </div>

                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        /* <p className={styles.name}>{item.username}</p>
                        <p className={styles.content}>{item.content}</p> */
  
 /*
                        </div>
                </Link>
            ))}
        </div>
    );
};

export default Policy;
*/