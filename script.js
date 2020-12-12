const videoElement=document.getElementById("video")
const button=document.getElementById("button")

//Prompt to select media stream, pass to video element, then play

const selectMediaStream=async()=>{

    try {
       
        const mediaStream=await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject=mediaStream
        videoElement.onloadedmetadata=()=>{
            videoElement.play()
        }
        
    } catch (error) {
        console.log("An error is occured!",error)
    }
}

button.addEventListener('click',async()=>{

    button.disabled=true
    await videoElement.requestPictureInPicture()
    button.disabled=false


})


selectMediaStream()