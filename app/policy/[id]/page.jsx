import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
// import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    // if (!res.ok) {
    //     throw new Error("Failed to fetch data");
    // }
    return res.json();
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id);

    return {
        title: post.title,
        description: post.desc,
    };
}

const PolicyPost = async ({ params }) => {
    const data = await getData(params.id);
    // console.log("The data is: ", data);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>

                    <p className={styles.desc}>{data.desc}</p>

                    <div className={styles.author}>
                        <Image
                            src={data.image}
                            alt=""
                            width={40}
                            height={50}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src={data.image}
                        alt=""
                        fill={true}
                        className={styles.image}
                    ></Image>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.text}>{data.content}</p>
            </div>
        </div>
    );
};

export default PolicyPost;
