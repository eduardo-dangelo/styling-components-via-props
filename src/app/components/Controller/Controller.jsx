import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../../reducer'
import ColorKnob from './components/knobs/ColorKnob'

class Controller extends React.Component {
  state = {
    sectionBackground: '#fff',
    sectionColor: '#666',
    buttonBackground: '#666',
    buttonColor: '#fff',
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

  update = ({props}) => {
    console.log('this.props', this.props)
  }

  knob = (type, value, key) => {
    const { actions } = this.props

    const action = (newValue) => {
      actions.updateValue(newValue, key)
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

  render() {
    const { styledComponent } = this.props
    const container = styledComponent.container
    const heading = styledComponent.heading
    const image = styledComponent.image
    const button = styledComponent.button

    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styling Controller</strong></Panel.Heading>
          <Panel.Body>
            <Row>
              <Col sm={12}>
                <h4><strong>CONTAINER:</strong></h4>
                <ul>
                  <li>
                    <strong>background-color:</strong>
                    {this.knob('color', container.backgroundColor, 'containerBackgroundColor')}
                  </li>
                  {/*<li>*/}
                    {/*<strong>border-width:</strong>*/}
                    {/*{this.knob('slider', container.borderWidth, 'containerBorderWidth')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>border-type:</strong>*/}
                    {/*{this.knob('select', container.borderStyle, 'containerBorderStyle')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>border-color:</strong>*/}
                    {/*{this.knob('color', container.borderColor, 'containerBorderColor')}*/}
                  {/*</li>*/}
                </ul>
              </Col>
              <Col sm={12}>
                <h4><strong>HEADING:</strong></h4>
                <ul>
                  {/*<li>*/}
                    {/*<strong>color:</strong>*/}
                    {/*{this.knob('color', heading.color, 'headingColor')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>content:</strong>*/}
                    {/*{this.knob('text', heading.content, 'headingContent')}*/}
                  {/*</li>*/}
                </ul>
              </Col>
              <Col sm={12}>
                <h4><strong>BUTTON:</strong></h4>
                <ul>
                  {/*<li>*/}
                    {/*<strong>color:</strong>*/}
                    {/*{this.knob('color', button.color, 'buttonColor')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>background-color:</strong>*/}
                    {/*{this.knob('color', button.backgroundColor, 'buttonBackgroundColor')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>content:</strong>*/}
                    {/*{this.knob('text', button.content, 'buttonContent')}*/}
                  {/*</li>*/}
                </ul>
              </Col>
              <Col sm={12}>
                <h4><strong>IMAGE:</strong></h4>
                <ul>
                  {/*<li>*/}
                    {/*<strong>filter:</strong>*/}
                    {/*{this.knob('select', image.filter, 'imageFilter')}*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<strong>size</strong>*/}
                    {/*{this.knob('slider', image.size, 'imageSize')}*/}
                  {/*</li>*/}
                </ul>
              </Col>
              {/*<Col md={6}>*/}
                {/*<h4>Section background:</h4>*/}
                {/*<ChromePicker*/}
                  {/*color={styledComponent.sectionBg}*/}
                  {/*onChangeComplete={this.changeSectionBackground}*/}
                {/*/>*/}
              {/*</Col>*/}
              {/*<Col md={6}>*/}
                {/*<h4>Section text-color:</h4>*/}
                {/*<ChromePicker*/}
                  {/*color={styledComponent.sectionColor}*/}
                  {/*onChangeComplete={this.changeSectionTextColor}*/}
                {/*/>*/}
              {/*</Col>*/}
              {/*<Col md={12}>*/}
                {/*<h4><strong>BUTTON:</strong></h4>*/}
              {/*</Col>*/}
              {/*<Col md={6}>*/}
                {/*<h4>Button background:</h4>*/}
                {/*<ChromePicker*/}
                  {/*color={styledComponent.buttonBg}*/}
                  {/*onChangeComplete={this.changeButtonBackground}*/}
                {/*/>*/}
              {/*</Col>*/}
              {/*<Col md={6}>*/}
                {/*<h4>Button color:</h4>*/}
                {/*<ChromePicker*/}
                  {/*color={styledComponent.buttonColor}*/}
                  {/*onChangeComplete={this.changeButtonColor}*/}
                {/*/>*/}
              {/*</Col>*/}
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