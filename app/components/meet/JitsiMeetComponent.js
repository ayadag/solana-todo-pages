import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";


const JitsiMeetComponent = () => {

    const roomName = "room1";
    const domain = "meet.jit.si";

    return (

          <JitsiMeeting 
            roomName={roomName}
            displayName={"ayad"}
            domain={domain}
          />

    );
};

export default JitsiMeetComponent;
