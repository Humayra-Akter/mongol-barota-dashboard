import React, { useState, useEffect } from "react";

const Capture = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const captureImage = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const videoElement = document.createElement("video");
        videoElement.srcObject = stream;
        videoElement.play();

        videoElement.addEventListener("loadedmetadata", async () => {
          const canvas = document.createElement("canvas");
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          const context = canvas.getContext("2d");
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const imageDataUrl = canvas.toDataURL("image/jpeg");
          setCapturedImage(imageDataUrl);
          stream.getTracks().forEach((track) => track.stop());
        });
      } catch (error) {
        console.error("Error capturing image:", error);
      }
    };

    const intervalId = setInterval(captureImage, 5000);

    captureImage();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Live Soil Image</h1>
      {capturedImage && <img src={capturedImage} alt="Live Soil" />}
    </div>
  );
};

export default Capture;
