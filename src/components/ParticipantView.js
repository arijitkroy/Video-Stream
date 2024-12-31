import React, { useRef, useMemo, useEffect } from "react";
import { useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

const ParticipantView = (props) => {
    const micRef = useRef(null);
    
    const onStreamEnabled = (stream) => {
        if (stream.kind == "share") console.log("Share Stream On: onStreamEnabled", stream);
    }

    const onStreamDisabled = (stream) => {
        if (stream.kind == "share") console.log("Share Stream Off: onStreamDisabled", stream);
    }

    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } = useParticipant(props.participantId, {
        onStreamEnabled,
        onStreamDisabled
    });

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamOn, webcamStream]);

    useEffect(() => {
        if (micRef.current) {
        if (micOn && micStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(micStream.track);
            micRef.current.srcObject = mediaStream;
            micRef.current
            .play()
            .catch(err => console.error("videoElem.current.play() failed", err));
        }
        else {
            micRef.current.srcObject = null;
        }
        }
    }, [micStream, micOn]);

    return (
        <div>
        <p>
            Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic: {micOn? "ON" : "OFF"}
        </p>
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        {webcamOn && (
            <ReactPlayer 
                playsinline 
                pip={false} 
                light={false} 
                controls={false} 
                muted={true} 
                playing={true} 
                url={videoStream} 
                height={"300px"} 
                width={"300px"} 
                onError={err => console.log(err, "Participant video error")}
            />
        )}
        </div>
    )
}

export default ParticipantView;