import React from 'react'
import { Panel, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../../reducer'
import ColorKnob from './components/knobs/ColorKnob'
import styled from 'styled-components'
import { get } from 'lodash'
import KnobController from './components/knobs/KnobController'
import ContainerController from './components/ContainerController'
import ButtonController from './components/ButtonController'

const List = styled.ul`
  padding-left: 15px;
`;

const ListItem = styled.li`
  //align-items: center;
  justify-content: space-between;
  clear: both;
  display: table;
  margin-bottom: 5px;
  
  & > div, strong {
    float: left;
    margin-right: 15px;
  }
`;

const Heading = styled.h4`
  margin-top: 35px;
`;

class Controller extends React.Component {

  handleChangeTheme = (theme) => () => {
    const { actions } = this.props
    actions.changeTheme(theme)
  };

  render() {
    const { styledComponent } = this.props
    const theme = get(styledComponent, 'activeTheme')
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
                <Heading><strong>CONTAINER:</strong></Heading>
                <ContainerController/>
              </Col>
              <Col sm={12}>
                <Heading><strong>BUTTON:</strong></Heading>
                <ButtonController/>
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