import React from 'react'
import { Panel } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'

class StyledComponent extends React.Component {

  render() {
    const { styledComponent } = this.props
    const Wrapper = styled.section`
      padding: 15px;
      background: ${styledComponent.sectionBg};
      text-align: center;
    `;

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: ${styledComponent.sectionColor};
    `;

    const Button = styled.button`
      text-align: center;
      color: ${styledComponent.buttonColor};
      border: 1px solid ${styledComponent.buttonColor};
      background: ${styledComponent.buttonBg};
      margin: auto;
      padding: 10px 15px;
    `;

    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styled Component</strong></Panel.Heading>
          <Panel.Body>
            <Wrapper>
              <Title>Hello World, this is my first styled component!</Title>
              <Button>
                Styled Button
              </Button>
            </Wrapper>
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
  null
)(StyledComponent)