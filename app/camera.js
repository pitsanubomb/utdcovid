let stream
const camera = async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    document.getElementById(`video`).srcObject = stream
}
