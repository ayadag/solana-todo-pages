import React from "react";
import styles from '../styles/Contact.module.css'

export default function Meeting(){
    return(
        <>
        <script src="https://meet.jit.si/external_api.js"></script>

        <div className={styles.container}>
            <h2 className={styles.title}>Meeting page</h2>
        </div>
        </>
    )
}