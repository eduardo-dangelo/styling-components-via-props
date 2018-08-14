import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../../reducer'
import ColorKnob from './components/knobs/ColorKnob'
import styled from 'styled-components'
import SliderKnob from "./components/knobs/SliderKnob";

class Controller extends React.Component {
  state = {
    container: {
      backgroundColor: '#FFFFFF',
      borderWidth: 3,
      borderColor: '#BBBBBB',
      borderStyle: 'solid'
    },
    button: {
      color: '#666666',
      backgroundColor: '#22AA44',
    },
    image: {
      filter: 'none',
      percentage: 0,
      size: 100,
    }
  };

  changeSectionBackground = (color) => {
    const { actions } = this.props
    
    actions.changeSectionBg(color.hex)
  };

  changeSectionTextColor = (color) => {
    const { actions } = this.props
    
    actions.changeSectionColor(color.hex)
  };

  changeButtonBackground = (color) => {
    const { actions } = this.props
    
    actions.changeButtonBg(color.hex)
  };

  changeButtonColor = (color) => {
    const { actions } = this.props
    
    actions.changeButtonColor(color.hex)
  };

  update = () => {
    console.log('this.props', this.props)
  }

  knob = (type, value, key) => {
    const { actions } = this.props

    const action = (newValue) => {
      actions.updateValue(newValue, key)
    }

    switch (type) {
      case 'color':
        return (
          <ColorKnob
            color={value}
            onChangeComplete={action}
          />
        )
      case 'slider':
        return (
          <SliderKnob handleChange={action}/>
        )
    }
  }

  render() {
    const {
      styledComponent: {
        container: {
          backgroundColor: containerBackgroundColor,
          color: containerColor,
        },
        button: {
          backgroundColor: buttonBackgroundColor,
          color: buttonColor
        }
      }
    } = this.props

    const List = styled.ul`
      
    `;

    const ListItem = styled.li`
      //display: flex;
      //align-items: center;
      justify-content: space-between;
    `;

    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styling Controller</strong></Panel.Heading>
          <Panel.Body>
            <Row>
              <Col sm={12}>
                <h4><strong>CONTAINER:</strong></h4>
                <List>
                  <ListItem>
                    <strong>background-color:</strong>
                    {this.knob('color', containerBackgroundColor, 'containerBackgroundColor')}
                  </ListItem>
                  <ListItem>
                    <strong>color:</strong>
                    {this.knob('color', containerColor, 'containerColor')}
                  </ListItem>
                </List>
              </Col>
              <Col sm={12}>
                <h4><strong>BUTTON:</strong></h4>
                <List>
                  <ListItem>
                    <strong>background-color:</strong>
                    {this.knob('color', buttonBackgroundColor, 'buttonBackgroundColor')}
                  </ListItem>
                  <ListItem>
                    <strong>color:</strong>
                    {this.knob('color', buttonColor, 'buttonColor')}
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
        <SliderKnob />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    styledComponent: state.styledComponent
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  }),
)(Controller)