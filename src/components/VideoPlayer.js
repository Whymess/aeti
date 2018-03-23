import React, { Component } from 'react'
import YouTube from 'react-youtube'


const videoId = 'dQw4w9WgXcQ'

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

  fastFoward =(e) => {
    const {player} = this.state
    let currentTime = player.getCurrentTime()
    if(e.target.name === 'fastFoward'){
         player.seekTo(currentTime + 5);
    }

    if(e.target.name === 'goBack'){
        player.seekTo(currentTime - 5);
    }
  }

  currentState = () => {
    const {player} = this.state
     let playState = player.getPlayerState()
     if(playState === 2){
        this.setState({buttonLabel: 'Pause'})
       
     }
     if(playState === 1){
         this.setState({buttonLabel: 'Play'})
        
     }
  }

  render() {

   
    return (
      <div style={videoContainerStyle}>
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady}
            onPause={this.currentState}
            onPlay={this.currentState}
          />
        </div>
      <div style={{display: 'flex'}}>
          <button name={"goBack"} onClick={this.fastFoward} style={buttonStyle}>«</button>
          <button onClick={this.onPlayPauseClick} style={buttonStyle}>
            {this.state.buttonLabel}
          </button>
          <button name={"fastFoward"} onClick={this.fastFoward}

          style={buttonStyle}>»</button>
        </div>
      </div>
    )
  }
}
