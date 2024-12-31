export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzMWI2YTUwOS0yYTI4LTRhYWItYWFlYi1hZWEwN2Y0MjIwYWYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNTY1ODM4NCwiZXhwIjoxNzM1NzQ0Nzg0fQ.1S3DRG1AlOS21kUwbVevE7WKtBRlzg5HnaUmXxFQ16M";
export const createMeeting = async({ token }) => {
    const res = await fetch('https://api.videosdk.live/v2/rooms', {
        method: 'POST',
        headers: {
            authorization: authToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    });
    const { roomId } = await res.json();
    return roomId;
}