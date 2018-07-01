import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import { ChromePicker  } from 'react-color'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../reducer'

class StyleController extends React.Component {
  state = {
    sectionBackground: '#fff',
    sectionColor: '#666',
    buttonBackground: '#666',
    buttonColor: '#fff'
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

  render() {
    const { styledComponent } = this.props
    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styling Controller</strong></Panel.Heading>
          <Panel.Body>
            <Row>
              <Col sm={12}>
                <h4><strong>SECTION:</strong></h4>
              </Col>
              <Col md={6}>
                <h4>Section background:</h4>
                <ChromePicker
                  color={styledComponent.sectionBg}
                  onChangeComplete={this.changeSectionBackground}
                />
              </Col>
              <Col md={6}>
                <h4>Section text-color:</h4>
                <ChromePicker
                  color={styledComponent.sectionColor}
                  onChangeComplete={this.changeSectionTextColor}
                />
              </Col>
              <Col md={12}>
                <h4><strong>BUTTON:</strong></h4>
              </Col>
              <Col md={6}>
                <h4>Button background:</h4>
                <ChromePicker
                  color={styledComponent.buttonBg}
                  onChangeComplete={this.changeButtonBackground}
                />
              </Col>
              <Col md={6}>
                <h4>Button color:</h4>
                <ChromePicker
                  color={styledComponent.buttonColor}
                  onChangeComplete={this.changeButtonColor}
                />
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
)(StyleController)