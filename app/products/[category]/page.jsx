import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
    console.log("The parameters are: ", params);

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <br />
                    <p className={styles.imgContainer}>
                        Desc Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta, ex.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt doloremque, accusantium culpa nam est veritatis
                        delectus explicabo eligendi dolorem tenetur dignissimos
                        aut autem! Quibusdam eligendi vitae laudantium nemo? Ab,
                        molestias.
                    </p>
                    <Button text="See More..." url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/trading1.jpg"
                        fill={true}
                        alt="trading_img"
                    ></Image>
                </div>
            </div>


            {/* /////////////// */}

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <br />
                    <p className={styles.imgContainer}>
                        Desc Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta, ex.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt doloremque, accusantium culpa nam est veritatis
                        delectus explicabo eligendi dolorem tenetur dignissimos
                        aut autem! Quibusdam eligendi vitae laudantium nemo? Ab,
                        molestias.
                    </p>
                    <Button text="See More..." url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/trading1.jpg"
                        fill={true}
                        alt="trading_img"
                    ></Image>
                </div>
            </div>
{/* ///////////// */}

<div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <br />
                    <p className={styles.imgContainer}>
                        Desc Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta, ex.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt doloremque, accusantium culpa nam est veritatis
                        delectus explicabo eligendi dolorem tenetur dignissimos
                        aut autem! Quibusdam eligendi vitae laudantium nemo? Ab,
                        molestias.
                    </p>
                    <Button text="See More..." url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/trading1.jpg"
                        fill={true}
                        alt="trading_img"
                    ></Image>
                </div>
            </div>

            {/* ///////////// */}

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <br />
                    <p className={styles.imgContainer}>
                        Desc Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta, ex.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt doloremque, accusantium culpa nam est veritatis
                        delectus explicabo eligendi dolorem tenetur dignissimos
                        aut autem! Quibusdam eligendi vitae laudantium nemo? Ab,
                        molestias.
                    </p>
                    <Button text="See More..." url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/trading1.jpg"
                        fill={true}
                        alt="trading_img"
                    ></Image>
                </div>
            </div>


        </div>
    );
};

export default Category;
