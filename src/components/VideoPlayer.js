import React, { Component } from 'react'
import YouTube from 'react-youtube'

// BUG DESCRIPTION: This component is a simple implementation of a video player that wraps
// the YouTube API using the `react-youtube` library.
// It has custom playback controls living outside the YouTube iframe.

// It has a partially-implemented feature, and a minor bug to fix.

// 1) There are non-working fast-forward/rewind buttons to either side of the play/pause button.
// Implement fast-forward/rewind functionality using the convenience functions of the YouTube API.

// 2) Study how the play/pause button's label text updates when you click it--but if you click inside the YouTube iframe to pause it, the external play/pause button no longer reflects the playback state. Fix this!

// Docs and references:
// https://github.com/troybetz/react-youtube
// https://github.com/troybetz/react-youtube/blob/master/example/example.js
// https://developers.google.com/youtube/iframe_api_reference#Playback_controls

const videoId = 'uj3Lq7Gu94Y'

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0
  }
};

const buttonStyle = {
  padding: 10,
  width: 60,
  height: 60
}

const videoContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export class VideoPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: null,
      buttonLabel: 'Play',
    };
  }

  onPlayPauseClick = () => {
    const {player} = this.state

    if (player && player.getPlayerState() === 1)
      {
        this.setState({buttonLabel: 'Play'})
        player.pauseVideo()
      }
      else {
        this.setState({buttonLabel: 'Pause'})
        player.playVideo()
      }
  }

  _onReady = (event) => {
    // Access to player in all event handlers via event.target
    this.setState({player: event.target})
  }

  render() {
    return (
      <div style={videoContainerStyle}>
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      <div style={{display: 'flex'}}>
          <button style={buttonStyle}>«</button>
          <button onClick={this.onPlayPauseClick} style={buttonStyle}>
            {this.state.buttonLabel}
          </button>
          <button style={buttonStyle}>»</button>
        </div>
      </div>
    )
  }
}
