export const authToken = process.env.API_TOKEN;
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
