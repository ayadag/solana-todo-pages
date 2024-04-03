import React from 'react'
import styles from '../styles/Meeting.module.css'
//import JitsiMeetComponent from '../components/meet/JitsiMeetComponent'
import { JitsiMeeting } from '@jitsi/react-sdk'

export default function Meeting(){

    return(
        <div className={styles.container}>
        <JitsiMeeting 
          roomName={"room1"}
          displayName={"ayad"}
          domain={"meet.jit.si"}
          containerStyles={{ display: "flex", flex: 1 }}
        />
      </div>
    )
}
