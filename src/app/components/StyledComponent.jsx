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
  background: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.container.backgroundColor`)};
  border: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.container.borderWidth`)}px solid ${(props) => get(props.styledComponent, `themes[${props.theme}].present.container.color`)};
  border-radius: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.container.borderRadius`)}px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
 
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.container.color`)};
`;

const Button = styled.button`
  text-align: center;
  color: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.button.color`)};
  border: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.button.borderWidth`)}px solid ${(props) => get(props.styledComponent, `themes[${props.theme}].present.button.color`)};
  border-radius: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.button.borderRadius`)}px;
  background: ${(props) => get(props.styledComponent, `themes[${props.theme}].present.button.backgroundColor`)};
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
 color: ${(props) => props.styledComponent.themes[props.theme].present.container.color};
`;

const ButtonInput = styled.input`
  width: auto;
  text-align: center;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: ${(props) => props.styledComponent.themes[props.theme].present.button.color};
`;

class StyledComponent extends React.Component {
  state = {
    buttonContentState: '',
    containerContentState: '',
    showDropdownCard: false,
    showDropdownButton: false,
    showInput: false
  }

  componentWillMount() {
    const { styledComponent } = this.props
    const theme = styledComponent.activeTheme
    const containerContent = styledComponent.themes[theme].present.container.content
    const buttonContent = styledComponent.themes[theme].present.button.content

    this.setState({
      buttonContentState: buttonContent,
      containerContentState: containerContent,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { styledComponent } = this.props
    const theme = styledComponent.activeTheme
    const nextTheme = nextProps.styledComponent.activeTheme
    // console.log('nextProps.styledComponent', nextProps.styledComponent)
    const buttonContent = styledComponent.themes[nextTheme].present.button.content
    const nextButtonContent = nextProps.styledComponent.themes[nextTheme].present.button.content
    const containerContent = styledComponent.themes[nextTheme].present.container.content
    const nextContainerContent = nextProps.styledComponent.themes[nextTheme].present.container.content

    if (theme !== nextTheme || buttonContent !== nextButtonContent) {
      this.setState({
        buttonContentState: nextButtonContent
      })
    }

    if (theme !== nextTheme || containerContent !== nextContainerContent) {
      this.setState({
        containerContentState: nextContainerContent
      })
    }
  }

  showInput = () => {
    this.setState({
      showInput: true,
    })
  }

  changeButtonContent = (e) => {
    const { actions, styledComponent } = this.props
    const { buttonContentState } = this.state
    const theme = styledComponent.activeTheme
    actions.changeButtonContent(theme, buttonContentState)
  }

  changeContainerContent = (e) => {
    const { actions, styledComponent } = this.props
    const { containerContentState } = this.state
    const theme = styledComponent.activeTheme
    actions.changeContainerContent(theme, containerContentState)
  }

  changeButtonContentState = (e) => {
    this.setState({
      buttonContentState: e.target.value
    })
  }

  changeContainerContentState = (e) => {
    this.setState({
      containerContentState: e.target.value
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

  handleUndo = (e) => {
    const { actions, styledComponent } = this.props
    const theme = styledComponent.activeTheme

    if (styledComponent.themes[theme].past.length > 0) {
      actions.undo(theme)
    }
  }

  render() {
    const { styledComponent } = this.props
    const { showDropdownCard, showDropdownButton, containerContentState, buttonContentState } = this.state
    const theme = styledComponent.activeTheme
    const content = get(styledComponent.themes, `${theme}.content`)

    return (
      <div>
        <Panel>
          <Panel.Heading>
            <strong>Styled Component</strong>
            <button className="pull-right" onClick={this.handleUndo}>
              undo
            </button>
          </Panel.Heading>
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
                value={containerContentState}
                onChange={this.changeContainerContentState}
                theme={theme}
                styledComponent={styledComponent}
                onBlur={this.changeContainerContent}
              />
              <ImageContainer>
                <img src={require('../img/cadaques.jpg')} alt="avatar"/>
              </ImageContainer>

              <Button
                styledComponent={styledComponent}
                theme={theme}
                onMouseOver={this.handleButtonMouseHover}

              >
                <ButtonInput
                  type="text"
                  value={buttonContentState}
                  onChange={this.changeButtonContentState}
                  theme={theme}
                  styledComponent={styledComponent}
                  onBlur={this.changeButtonContent}
                />
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