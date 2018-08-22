import React from 'react'
import { Button, ButtonGroup, ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ColorKnob from "./ColorKnob";
import { map } from 'lodash'

class KnobController extends React.Component {
  render() {
    const { actions, actionKey, theme, value, options, type } = this.props

    const action = (newValue) => {
      actions.updateValue(actionKey, theme, newValue)
    }

    if (type === 'btnGroup') {
      return (
        <ButtonGroup>
          <ToggleButtonGroup
            value={value}
            onChange={action}
            type="radio"
            name="options"
            defaultValue={1}
          >
            {map(options, (option, key) => {
              return (
                <ToggleButton
                  key={key}
                  bsSize={'xs'}
                  value={option}
                  bsStyle={option === value ? 'info': 'default'}
                >
                  {option}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>
        </ButtonGroup>
      )
    }

    if (type === 'color') {
      return (
        <ColorKnob
          color={value}
          onChangeComplete={action}
        />
      )
    }
  }
}

export default KnobController