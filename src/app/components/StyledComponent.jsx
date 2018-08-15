import React from 'react'
import { Panel } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { get } from 'lodash'

class StyledComponent extends React.Component {

  render() {
    const { styledComponent } = this.props
    const theme = styledComponent.activeTheme

    const Wrapper = styled.section`
      padding: 15px;
      background: ${get(styledComponent, `themes[${theme}].container.backgroundColor`)};
      border: 1px solid ${get(styledComponent, `themes[${theme}].container.color`)};
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.5);
    `;

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: ${get(styledComponent, `themes[${theme}].container.color`)};
    `;

    const Button = styled.button`
      text-align: center;
      color: ${get(styledComponent, `themes[${theme}].button.color`)};
      border: 1px solid ${get(styledComponent, `themes[${theme}].button.color`)};
      background: ${get(styledComponent, `themes[${theme}].button.backgroundColor`)};
      margin: auto;
      padding: 10px 15px;
    `;

    const ImageContainer = styled.div`
      position: relative;
      margin: 30px auto;
      max-width: 300px;
      
      img {
        width: 100%;
      }
    `;

    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styled Component</strong></Panel.Heading>
          <Panel.Body>
            <Wrapper>
              <Title>Hello World, this is my first styled component!</Title>
              <ImageContainer>
                <img src={require('../img/cadaques.jpg')} alt="avatar"/>
              </ImageContainer>
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