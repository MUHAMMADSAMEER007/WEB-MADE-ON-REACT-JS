import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';
import video from "../../Assets/Sapientdream - Pastlives (AMV) (Lyrics_Español).mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (playState && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [playState]);

  return (
    playState ? (
      <div className='video-player'>
        <video ref={videoRef} src={video} muted controls />
        <button onClick={() => setPlayState(false)}>Close</button>
      </div>
    ) : null
  );
}

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired,
};

export default VideoPlayer;
