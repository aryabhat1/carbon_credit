"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const [err, setErr] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 &&
                router.push(
                    "/dashboard/login?success=Account has been created"
                );
        } catch (err) {
            setErr(true);
            console.log("Error is registration page:", err);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <h2 className={styles.subtitle}>
                Please sign up to see the dashboard.
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Password"
                    className={styles.input}
                    required
                />
                <button className={styles.button}>Register</button>
                {err && "Something went wrong!"}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/login">
                Login with an existing account
            </Link>

            {/* <Link href="/dashboard/login">Login with an existing account</Link> */}
        </div>
    );
};

export default Register;
