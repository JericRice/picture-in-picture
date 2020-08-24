const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, then pass to video element, then play

async function selectMediaStream() {
     try {
         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
             videoElement.play();
         }
     } catch (error) {
         // catch errors here
         console.log('Oh oh this is a bad thingee to see', error)
     }
}

// On Load
selectMediaStream();