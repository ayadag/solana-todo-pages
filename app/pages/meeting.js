//import React from 'react'
import styles from '../styles/Meeting.module.css'
//import JitsiMeetComponent from '../components/meet/JitsiMeetComponent'
import { JitsiMeeting } from '@jitsi/react-sdk'
//import JitsiMeetComponent from '../components/JitsiMeetComponent'

export default function Meeting(){

    return(
        <>
        <div className={styles.container}>
         <JitsiMeeting
          roomName = { 'room1996' }
          getIFrameRef = { node => node.style.height = '800px' }
         />
        </div>
       </>
    )
}
