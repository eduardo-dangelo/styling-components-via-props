import React from 'react'
import Controller from './components/Controller/Controller'
import StyledComponent from './components/StyledComponent'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Header = styled.div`
  padding: 15px;
  margin-bottom: 30px;
  background: #141414;
  color: #d8d8d8;
  
  h3 {
    margin: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <div className="container">
            <h3>Styling Components via Props</h3>
          </div>
        </Header>
        <div className="container">
          <Row>
            <Col sm={7}>
              <StyledComponent/>
            </Col>
            <Col sm={5}>
              <Controller/>
            </Col>
            {/*<Col sm={2}/>*/}
          </Row>
        </div>
      </div>
    )
  }
}

export default App