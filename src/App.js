import React, { Component } from 'react'
import { ButtonColorful } from './components/ButtonColorful'
import { TextInput } from './components/TextInput'
import { VideoPlayer } from './components/VideoPlayer'
import logo from './logo.svg'
import './App.css'

const potentialColors = ['plum', 'goldenrod', 'coral', 'cornflowerblue', 'mediumseagreen', 'teal']

const sectionStyle = {
  minHeight: 200,
  padding: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid white',
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeColorIndex: 0,
      colors: potentialColors,
      bgColor: potentialColors[0],
      submittedText: '',
    }
  }

  handleClick = () => {
    const {colors, activeColorIndex} = this.state
    const newIndex = activeColorIndex + 1
    const bgColor = colors[newIndex]

    this.setState({activeColorIndex: newIndex, bgColor})
  }

  render() {
    const {bgColor} = this.state
    const calculatedStyles = {padding: 50, transition: 'all 1s', backgroundColor: bgColor}

    return (
      <div className="App" style={calculatedStyles}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">XXXXX Front-End Homework Exercise</h1>
          <h3>Submitted text input data: <code>{this.state.submittedText}</code></h3>
        </header>
        <p className="App-intro">
          Clicking the below button will change the background color of the parent div.
        </p>
        <div style={sectionStyle}>
          <ButtonColorful onClick={this.handleClick} bgColor={bgColor}/>
        </div>
        <div style={sectionStyle}>
          <TextInput />
        </div>
        <div style={sectionStyle}>
          <VideoPlayer />
        </div>
      </div>
    )
  }
}

export default App
