import React from 'react'
import { ButtonToolbar, DropdownButton, MenuItem, Panel } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { get } from 'lodash'
// import FaEllipsis from 'react-icons/fa'
import ContainerController from './Controller/components/ContainerController'
import ButtonController from './Controller/components/ButtonController'
import { FadeIn } from 'animate-css-styled-components';
import { bindActionCreators } from "redux"
import { actions } from "../reducer";

const Wrapper = styled.section`
  padding: 15px;
  background: ${(props) => get(props.styledComponent, `themes[${props.theme}].container.backgroundColor`)};
  border: ${(props) => get(props.styledComponent, `themes[${props.theme}].container.borderWidth`)}px solid ${(props) => get(props.styledComponent, `themes[${props.theme}].container.color`)};
  border-radius: ${(props) => get(props.styledComponent, `themes[${props.theme}].container.borderRadius`)}px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
 
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => get(props.styledComponent, `themes[${props.theme}].container.color`)};
`;

const Button = styled.button`
  text-align: center;
  color: ${(props) => get(props.styledComponent, `themes[${props.theme}].button.color`)};
  border: ${(props) => get(props.styledComponent, `themes[${props.theme}].button.borderWidth`)}px solid ${(props) => get(props.styledComponent, `themes[${props.theme}].button.color`)};
  border-radius: ${(props) => get(props.styledComponent, `themes[${props.theme}].button.borderRadius`)}px;
  background: ${(props) => get(props.styledComponent, `themes[${props.theme}].button.backgroundColor`)};
  margin: auto;
  padding: 10px 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 30px auto;
  max-width: 300px;
  z-index: 0;
  
  img {
    width: 100%;
    z-index: 0;
  }
`;

const ButtonToolbarWapper = styled(ButtonToolbar)`
  position: absolute;
  top: 70px;
  right: 45px;
  
  .dropdown-toggle {
    border-radius: 50%;
    border: 1px solid black;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    padding: 2px 6px;
    background: white !important;
    color: #444444;
  }
  
  .dropdown-menu {
    min-width: 280px;
    padding: 15px 0!important;
    background: rgba(255,255,255,0.9);
    //top: 45px;
    //right: -30px;
  }
  `;

const ButtonToolbarWapper2 = styled(ButtonToolbar)`
  position: absolute;
  margin-left: 80px;
  bottom: 81px;
  //right: 200px;
  
  .dropdown-toggle {
    border-radius: 50%;
    border: 1px solid black;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    padding: 2px 6px;
    background: white !important;
    color: #444444;
    opacity: 1;
  }
  
  .dropdown-menu {
    min-width: 280px;
    padding: 15px 0!important;
    background: rgba(255,255,255,0.8);
    //top: 45px;
    //right: -30px;
  }
`;

const Input = styled.input`
  width: 100%;
  text-align: center;
  background: transparent;
  font-size: 1.5em;
  border: none;
  margin-top: 20px;
  padding: 0;
 color: ${(props) => props.styledComponent.themes[props.theme].container.color};
`;

class StyledComponent extends React.Component {
  state = {
    showDropdownCard: false,
    showDropdownButton: false,
    stateContent: '',
    showInput: false
  }

  componentWillMount() {
    const { styledComponent } = this.props
    const theme = styledComponent.activeTheme
    const content = styledComponent.themes[theme].content

    this.setState({
      stateContent: content,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { styledComponent } = this.props
    const theme = styledComponent.activeTheme
    const nextTheme = nextProps.styledComponent.activeTheme

    if (theme !== nextTheme) {
      this.setState({
        stateContent: styledComponent.themes[nextTheme].content
      })
    }
  }

  showInput = () => {
    this.setState({
      showInput: true,
    })
  }

  changeContent = (e) => {
    const { actions, styledComponent } = this.props
    const { stateContent } = this.state
    const theme = styledComponent.activeTheme
    actions.changeContent(theme, stateContent)
    this.setState({
      showInput: false,
    })
  }

  changeStateContent = (e) => {
    this.setState({
      stateContent: e.target.value
    })
  }

  handleCardMouseHover = () => {
    this.setState({
      showDropdownCard: true
    })
  }

  handleCardMouseLeave = () => {
    this.setState({
      showDropdownCard: false,
      showDropdownButton: false
    })
  }

  handleButtonMouseHover = () => {
    this.setState({
      showDropdownButton: true
    })
  }

  render() {
    const { styledComponent } = this.props
    const { showDropdownCard, showDropdownButton, stateContent, showInput } = this.state
    const theme = styledComponent.activeTheme
    const content = get(styledComponent.themes, `${theme}.content`)

    return (
      <div>
        <Panel>
          <Panel.Heading><strong>Styled Component</strong></Panel.Heading>
          <Panel.Body>
            <Wrapper
              styledComponent={styledComponent}
              theme={theme}
              onMouseOver={this.handleCardMouseHover}
              onMouseLeave={this.handleCardMouseLeave}
            >
              {showDropdownCard && (
                <ButtonToolbarWapper>
                  <DropdownButton
                    bsStyle="default"
                    title={'...'}
                    noCaret
                    pullRight
                    id="dropdown-no-caret"
                  >
                    <ContainerController/>
                  </DropdownButton>
                </ButtonToolbarWapper>
              )}
              <Input
                type="text"
                value={stateContent}
                onChange={this.changeStateContent}
                theme={theme}
                styledComponent={styledComponent}
                onBlur={this.changeContent}
              />
              <ImageContainer>
                <img src={require('../img/cadaques.jpg')} alt="avatar"/>
              </ImageContainer>
              <Button
                styledComponent={styledComponent}
                theme={theme}
                onMouseOver={this.handleButtonMouseHover}

              >
                Styled Button
                {showDropdownButton && (
                  <ButtonToolbarWapper2>
                    <DropdownButton
                      bsStyle="default"
                      title={'...'}
                      noCaret
                      pullRight
                      id="dropdown-no-caret"
                    >
                      <ButtonController tabindex={"0"}/>
                    </DropdownButton>
                  </ButtonToolbarWapper2>
                )}
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
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  }),
)(StyledComponent)