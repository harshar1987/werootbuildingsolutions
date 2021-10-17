import { width } from "@mui/system";
import React from "react";
import YouTube, { Options } from "react-youtube";
import styles from "./YoutubePlayer.module.css";

export interface IYoutubePlayerProps {
    videoId: string;
}

const YoutubePlayer = (props: IYoutubePlayerProps) => {
  const opts: Options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={props.videoId} opts={opts} onReady={_onReady} containerClassName={styles.youtubeContainer} />;
};

export default YoutubePlayer;
