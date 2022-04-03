const videoElememt = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElememt.srcObject = mediaStream;
        videoElememt.onloadedmetadata = () => {
            videoElememt.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElememt.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();