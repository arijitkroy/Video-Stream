import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./Api";

import MeetingView from "./components/MeetingView";
import JoinScreen from "./components/JoinScreen";

function App() {
  const [meetingId, setMeetingId] = useState(null);
  //const [name, setName] = useState("Participant");
  const getMeetingAndToken = async(id) => {
    const meetingId = id == null? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  }
  const onMeetingLeave = () => {
    setMeetingId(null);
  }

  //const getName = (e) => {
  //  setName(e)
  //}

  return authToken && meetingId ? (
    <MeetingProvider config={{ meetingId, micEnabled: true, webcamEnabled: true, name: "Participant"}} token={authToken}>
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  )
}

export default App;
