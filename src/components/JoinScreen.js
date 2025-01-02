import React, { useState } from "react";
import "./Common.css";

const JoinScreen = ({ getMeetingAndToken, getName }) => {
    const [meetingId, setMeetingId] = useState(null);
    const [name, setName] = useState("Participant");
    const onClick = async() => {
        await getMeetingAndToken(meetingId);
        // await getName(name); // Configure the naming logic
    }
    return (
        <div className="welcome-container">
            <div className="sub">
                <label>Meeting ID: </label>
                <input className="inputs" type="text" placeholder="xxxx-yyyy-zzzz" onChange={e => setMeetingId(e.target.value)} />
            </div>
            <div className="sub">
                <label>Name: </label>
                <input className="inputs" type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
            </div>
            <button onClick={onClick}>Join</button>
            or
            <button onClick={onClick}>Create Meeting</button>
        </div>
    )
}

export default JoinScreen;