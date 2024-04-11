import React from "react";

const ScreenRecording = () => {
  return (
    <video width="240" height="180"  autoPlay loop playsInline>
      <source src="1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ScreenRecording;
