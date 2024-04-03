import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";


const JitsiMeetComponent = () => {

    const roomName = "room1";
    const domain = "meet.jit.si";

    return (
        <div style={{ height: "100vh", display: "grid", flexDirection: "column" }} >

        <JitsiMeeting 
        roomName={roomName}
        displayName={"ayad"}
        domain={domain}
        containerStyles={{ display: "flex", flex: 1 }}
        />
        
        </div>
    )
}

export default JitsiMeetComponent
