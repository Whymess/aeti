import React, { Component } from 'react'
import { ButtonColorful } from './components/ButtonColorful'
import { TextInput } from './components/TextInput'
import { VideoPlayer } from './components/VideoPlayer'
import logo from './logo.svg'
import './App.css'

const sectionStyle = {
  minHeight: 200,
  padding: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid white',
}


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeColor: "plum",
      submittedText: null,
      activeColorIndex: 1,
      potentialColors: ['plum', 'goldenrod', 'coral', 'cornflowerblue', 'mediumseagreen', 'teal']
    }


  }

  handleSubmit = (e, val ) => {
    e.preventDefault();
    this.setState({submittedText: val})
  }

  handleClick = () => {
    let {activeColorIndex, potentialColors } = this.state
    this.setState((state) => {
      let {activeColorIndex,potentialColors} = state 
      let length = potentialColors.length - 1
      if(activeColorIndex === length){
         return {activeColorIndex: state.activeColorIndex - length}
      } else {
        return {
            activeColorIndex: state.activeColorIndex + 1
        }
      }
     });

    this.setState({activeColor: potentialColors[activeColorIndex]})

   }

  render() {
    const {activeColor} = this.state
    const calculatedStyles = {padding: 50, transition: 'all 1s', backgroundColor: activeColor}

    return (
      <div className="App" style={calculatedStyles}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aetion Front-End Homework Exercise</h1>
          <h3>Submitted text input data: <code>{this.state.submittedText}</code></h3>
        </header>
        <p className="App-intro">
          Clicking the below button will change the background color of the parent div.
        </p>
        <div style={sectionStyle}>
          <ButtonColorful onClick={() => this.handleClick} bgColor={activeColor}/>
        </div>
        <div style={sectionStyle}>
          <TextInput handleSubmit={this.handleSubmit}/>
        </div>
        <div style={sectionStyle}>
          <VideoPlayer />
        </div>
      </div>
    )
  }
}


