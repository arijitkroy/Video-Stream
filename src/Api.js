export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzMWI2YTUwOS0yYTI4LTRhYWItYWFlYi1hZWEwN2Y0MjIwYWYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNTgxMTM1MiwiZXhwIjoxNzY3MzQ3MzUyfQ.VAW9yMHpYf6wRmC5bhOZjBOHvJgdC2hpPhcmPzQqSDs";
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
