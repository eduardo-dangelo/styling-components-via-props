import React from 'react'
import StyleController from './components/StyleController'
import StyledComponent from './components/StyledComponent'
import { Row, Col } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Styling Components via Props</h1>
        <Row>
          <Col sm={6}>
            <StyleController/>
          </Col>
          <Col sm={6}>
            <StyledComponent/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App