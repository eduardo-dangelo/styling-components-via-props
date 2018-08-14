import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SliderKnob extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  onChangeComplete = (value) => {
    const { handleChange } = this.props
    this.setState({
      volume: value
    })
    handleChange(value)
  }

  render() {
    let { volume } = this.state
    return (
      <Slider
        value={volume}
        onChange={this.handleOnChange}
        onChangeComplete={this.onChangeComplete}
      />
    )
  }
}

export default SliderKnob