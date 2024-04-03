import React from 'react'
import styles from '../styles/Contact.module.css'
import JitsiMeetComponent from '../components/meet/JitsiMeetComponent'

export default function Meeting(){

    return(
        <div className={styles.container}>

        <JitsiMeetComponent />

        </div>
    )
}