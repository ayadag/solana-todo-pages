import React from "react";
import styles from '../styles/Meeting.module.css';

const domain = 'meet.jit.si';
const options = {
roomName: 'room1',
width: 700,
height: 700,
parentNode: document.querySelector('#styles.container'),
lang: 'de'
};
const api = new JitsiMeetExternalAPI(domain, options);

export default function Meeting(){
    return(
        <>

        <script src='https://meet.jit.si/external_api.js'></script>
        {api}
    
        <div className={styles.container}>

        </div>
        </>
    )
}