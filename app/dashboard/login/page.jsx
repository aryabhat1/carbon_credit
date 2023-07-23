"use client";

import React from "react";
import styles from "./page.module.css";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") {
        return <p>loading...</p>;
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                <button className={styles.button}>Login</button>
                {/* {err && "Something went wrong!"} */}
            </form>

            <button onClick={() => signIn("google")} className={styles.Button}>
                Login with Goggle
            </button>
        </div>
    );
};

export default Login;
