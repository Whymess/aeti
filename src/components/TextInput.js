import React, { Component } from 'react'

export class TextInput extends Component {

   state = {
      text: '',
    }

  handleChange = (event) => this.setState({text: event.target.value})

  render() {
   let {text} = this.state
  return (
       <form onSubmit={(e) => this.props.handleSubmit(e,text)}>
          <input
            style={{margin: 10}}
            type="text"
            value={text}
            onChange={this.handleChange}
        />
        <input type="submit" value="Send" />
      </form>

    )
  }
}
