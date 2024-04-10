import React from "react";

const ScreenRecording = () => {
  return (
    <video width="320" height="240" controls>
      <source src="1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ScreenRecording;
