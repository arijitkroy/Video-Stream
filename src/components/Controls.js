import React from "react";
import { useMeeting } from "@videosdk.live/react-sdk";

const Controls = () => {
    const { leave, toggleMic, toggleWebcam, toggleScreenShare } = useMeeting();
        return (
            <div>
                <button onClick={() => leave()}>Leave</button>
                <button onClick={() => toggleMic()}>Toggle Mic</button>
                <button onClick={() => toggleWebcam()}>Toggle Webcam</button>
                <button onClick={() => toggleScreenShare()}>Screen Share</button>
            </div>
    )
}

export default Controls;