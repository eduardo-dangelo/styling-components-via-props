import React from 'react'
import { ChromePicker } from 'react-color'
import styled from 'styled-components'

const Knob = styled.div`
  position: relative;
`;

const Button = styled.button`
      width: 16px;
      height: 16px;
      border: 1px solid #9b9b9b;
      background: ${(props) => (props.color)};
      margin-right: 10px;
    `;

const OverlayContainer = styled.div`
      position: absolute;
      z-index: 4;
      right: calc(100% - 16px);
    `;

const HiddenElement = styled.div`
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    `;


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

    return (
      <Knob>
        <Button color={color} onClick={this.handleClick} />
        {color}
        {showColorPicker && (
          <OverlayContainer >
            <ChromePicker
              color={color}
              tabindex={'0'}
              onChangeComplete={onChangeComplete}
              display={showColorPicker}
            />
          </OverlayContainer>
        )}
        {showColorPicker && <HiddenElement onClick={this.handleBlur}/>}
      </Knob>
    )
  }
}

export default ColorKnob