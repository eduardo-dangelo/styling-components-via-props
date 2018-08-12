import React from 'react'
import { ChromePicker } from 'react-color'
import styled from 'styled-components'

class ColorKnob extends React.Component {
  state = {
    showColorPicker: false,
  }

  handleClick = () => {

    if (this.state.showColorPicker) {
      this.setState({ showColorPicker: false })
    }

    if (!this.state.showColorPicker) {
      this.setState({ showColorPicker: true })
    }
  }

  handleBlur = () => {
    console.log('asjdhaksjdhkasjdhkasjdh')
    this.setState({ showColorPicker: false })
  }

  render() {
    const { color, onChangeComplete } = this.props
    const { showColorPicker } = this.state

    const Button = styled.button`
      width: 16px;
      height: 16px;
      border: 1px solid #9b9b9b;
      background: ${color};
      margin-right: 10px;
    `;

    const OverlayContainer = styled.div`
      position: absolute;
      z-index: 2;
    `;

    return (
      <div>
        <Button onClick={this.handleClick} />
        {color}
        {showColorPicker && (
          <OverlayContainer >
            <ChromePicker
              color={color}
              onChangeComplete={onChangeComplete}
            />
          </OverlayContainer>
        )}
      </div>
    )
  }
}

export default ColorKnob