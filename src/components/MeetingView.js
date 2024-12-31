import React, { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import "./Common.css";

import Controls from "./Controls";
import ParticipantView from "./ParticipantView";
import PresenterView from "./PresenterView";

const MeetingView = (props) => {
    const [joined, setJoined] = useState(null);

    const onPresenterChanged = (presenterId) => {
        if (presenterId) console.log(presenterId, " started screen share");
        else console.log("someone stopped screen share");
    }

    const { join, participants, presenterId } = useMeeting({ 
        onPresenterChanged,
        onMeetingJoined: () => setJoined("JOINED"),
        onMeetingLeft: () => props.onMeetingLeave()
    })

    const joinMeeting = () => {
        setJoined("JOINING");
        join();
    }

    return (
        <>
            {presenterId && <PresenterView presenterId={presenterId}/>}
            <div className="container">
                <h3>Meeting Id: {props.meetingId}</h3>
                {joined && joined == "JOINED" ? (
                    <div>
                        <Controls/>
                        {[...participants.keys()].map((participantId) => (
                            <ParticipantView participantId={participantId} key={participantId} />
                        ))}
                    </div>
                ) : joined && joined == "JOINING" ? (
                    <p>Joining the meeting...</p>
                ) : (
                    <button onClick={joinMeeting}>Join</button>
                )}
            </div>
        </>
    )
}

export default MeetingView;