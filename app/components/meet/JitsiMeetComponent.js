import React from "react";
import { JitsiMeeting } from '@jitsi/react-sdk';


const JitsiMeetComponent = () => {

    domain = "meet.jit.si";
    roomName = "room1";

    return (
        <div style={{ height: "100vh", display: "grid", flexDirection: "column" }} >
        <JitsiMeeting 
        roomName={roomName}
        displayName={"ayad"}
        domain={domain}
        containerStyles={{ display: "flex", flex: 1 }}
        />
        </div>
    );
};

export default JitsiMeetComponent
