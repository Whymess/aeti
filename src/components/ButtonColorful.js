import React, { Component } from 'react'

const baseStyles = {
  backgroundColor: 'rgba(255, 255, 255, .8)',
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 'bold',
  padding: '10px 20px',
}

export default class ButtonColorful extends Component {

  handleClick = this.props.onClick()

  render() {
   let {bgColor} = this.props 
    const calculatedStyle = {
      ...baseStyles,
      borderColor: bgColor,
      color: bgColor,
    }

    return (
      <div>
        <button
          style={calculatedStyle}
          onClick={this.handleClick}
        >
          Click me
        </button>
      </div>
    )
  }
}
