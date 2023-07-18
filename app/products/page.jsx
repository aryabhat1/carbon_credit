import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Products = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a Gallery</h1>
            <div className={styles.items}>
                <Link href="/products/trading" className={styles.item}>
                    <span className={styles.title}>Trading</span>
                </Link>

                <Link href="/products/training" className={styles.item}>
                    <span className={styles.title}>Training</span>
                </Link>

                <Link href="/products/events" className={styles.item}>
                    <span className={styles.title}>Global Events</span>
                </Link>

                <Link href="/products/consultancy" className={styles.item}>
                    <span className={styles.title}>Consultancy</span>
                </Link>
            </div>
        </div>
    );
};

export default Products;
