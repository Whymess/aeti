import React, { Component } from 'react'

// BUG DESCRIPTION: This component is a button that, when clicked, is supposed to do two things:
// 1) change the parent page's background color (according to the `potentialColors` array in App.js)
// 2) change the button's own text color to match the page's background color.

// There are at least two bugs currently.
// Bug 1: the page color doesn't change when you click the button.
// Bug 2: the button text color doesn't match the page color.

// Once you fix the first two bugs, you may notice:
// Bug 3: When you hit the end of the canned set of six colors, the page colors stop updating.
// Address this so further clicks resume changing colors from the beginning of the array.

const baseStyles = {
  backgroundColor: 'rgba(255, 255, 255, .8)',
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 'bold',
  padding: '10px 20px',
}

export class ButtonColorful extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bgColor: this.props.bgColor,
    }
  }

  handleClick = this.props.onClick()

  render() {
    const {bgColor} = this.state

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
