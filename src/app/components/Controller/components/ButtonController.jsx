import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { actions } from '../../../reducer'
import styled from 'styled-components'
import { get } from 'lodash'
import KnobController from './knobs/KnobController'

const List = styled.ul`
  padding-left: 15px;
  max-width: 280px;
  color: black;
`;

const ListItem = styled.li`
  //align-items: center;
  justify-content: space-between;
  clear: both;
  display: flex;
  margin-bottom: 5px;
  
  & > div, strong {
    float: left;
    margin-right: 15px;
  }
`;

class Controller extends React.Component {

  handleChangeTheme = (theme) => () => {
    const { actions } = this.props
    actions.changeTheme(theme)
  };

  render() {
    const { styledComponent, actions } = this.props
    const theme = get(styledComponent, 'activeTheme')

    const buttonBackgroundColor = get(styledComponent, `themes[${theme}].button.backgroundColor`)
    const buttonBorderWidth = get(styledComponent, `themes[${theme}].button.borderWidth`)
    const buttonBorderRadius = get(styledComponent, `themes[${theme}].button.borderRadius`)
    const buttonColor = get(styledComponent, `themes[${theme}].button.color`)

    return (
      <List>
        <ListItem>
          <strong>background-color:</strong>
          <KnobController
            actionKey="buttonBackgroundColor"
            actions={actions}
            theme={theme}
            type="color"
            value={buttonBackgroundColor}
          />
        </ListItem>
        <ListItem>
          <strong>color:</strong>
          <KnobController
            actionKey="buttonColor"
            actions={actions}
            theme={theme}
            type="color"
            value={buttonColor}
          />
        </ListItem>
        <ListItem>
          <strong>border-width:</strong>
          <KnobController
            actionKey="buttonBorderWidth"
            actions={actions}
            theme={theme}
            type="btnGroup"
            value={buttonBorderWidth}
            options={[0,1,2,3,4,5,6]}
          />
        </ListItem>
        <ListItem>
          <strong>border-radius:</strong>
          <KnobController
            actionKey="buttonBorderRadius"
            actions={actions}
            theme={theme}
            type="btnGroup"
            value={buttonBorderRadius}
            options={[0,3,5,7,8,10]}
          />
        </ListItem>
      </List>
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