import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";


const JitsiMeetComponent = () => {

    const roomName = "room1";
    const domain = "meet.jit.si";

    return (
        <div>
          <JitsiMeeting 
            roomName={roomName}
            displayName={"ayad"}
            domain={domain}
          />
        </div>
    );
};

export default JitsiMeetComponent;
