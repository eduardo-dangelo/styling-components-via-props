import React from 'react'
import { Panel, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../../reducer'
import ColorKnob from './components/knobs/ColorKnob'
import styled from 'styled-components'
import { get } from 'lodash'

const List = styled.ul`
      
    `;

const ListItem = styled.li`
      //display: flex;
      //align-items: center;
      justify-content: space-between;
    `;

class Controller extends React.Component {

  handleChangeTheme = (theme) => () => {
    const { actions } = this.props
    actions.changeTheme(theme)
  };

  renderColorKnob = (key, theme, value) => {
    const { actions } = this.props

    const action = (newValue) => {
      actions.updateValue(key, theme, newValue)
    }

    return (
      <ColorKnob
        color={value}
        onChangeComplete={action}
      />
    )
  }

  render() {
    const { styledComponent } = this.props
    const theme = get(styledComponent, 'activeTheme')

    const buttonBackgroundColor = get(styledComponent, `themes[${theme}].button.backgroundColor`)
    const buttonColor = get(styledComponent, `themes[${theme}].button.color`)
    const containerBackgroundColor = get(styledComponent, `themes[${theme}].container.backgroundColor`)
    const containerColor = get(styledComponent, `themes[${theme}].container.color`)

    return (
      <div>
        <Panel>
          <Panel.Heading>
            <strong>Styling Controller</strong>
          </Panel.Heading>
          <Panel.Body>
            <Row>
              <Col sm={12}>
                <h4><strong>THEME:</strong></h4>
                <ButtonGroup>
                  <Button
                    bsStyle={theme === 'dark' ? 'info' : 'default'}
                    onClick={this.handleChangeTheme('dark')}
                  >
                    Dark
                  </Button>
                  <Button
                    bsStyle={theme === 'light' ? 'info' : 'default'}
                    onClick={this.handleChangeTheme('light')}
                  >
                    Light
                  </Button>
                </ButtonGroup>
              </Col>
              <Col sm={12}>
                <h4><strong>CONTAINER:</strong></h4>
                <List>
                  <ListItem>
                    <strong>background-color:</strong>
                    {this.renderColorKnob('containerBackgroundColor', theme, containerBackgroundColor)}
                  </ListItem>
                  <ListItem>
                    <strong>color:</strong>
                    {this.renderColorKnob('containerColor', theme, containerColor)}
                  </ListItem>
                </List>
              </Col>
              <Col sm={12}>
                <h4><strong>BUTTON:</strong></h4>
                <List>
                  <ListItem>
                    <strong>background-color:</strong>
                    {this.renderColorKnob('buttonBackgroundColor', theme, buttonBackgroundColor)}
                  </ListItem>
                  <ListItem>
                    <strong>color:</strong>
                    {this.renderColorKnob('buttonColor', theme, buttonColor)}
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
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