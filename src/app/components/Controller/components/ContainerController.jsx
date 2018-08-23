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

    const containerBackgroundColor = get(styledComponent, `themes[${theme}].present.container.backgroundColor`)
    const containerBorderWidth = get(styledComponent, `themes[${theme}].present.container.borderWidth`)
    const containerBorderRadius = get(styledComponent, `themes[${theme}].present.container.borderRadius`)
    const containerColor = get(styledComponent, `themes[${theme}].present.container.color`)

    return (
      <List>
        <ListItem>
          <strong>background-color:</strong>
          <KnobController
            actionKey="containerBackgroundColor"
            actions={actions}
            theme={theme}
            type="color"
            value={containerBackgroundColor}
          />
        </ListItem>
        <ListItem>
          <strong>color:</strong>
          <KnobController
            actionKey="containerColor"
            actions={actions}
            theme={theme}
            type="color"
            value={containerColor}
          />
        </ListItem>
        <ListItem>
          <strong>border-width:</strong>
          <KnobController
            actionKey="containerBorderWidth"
            actions={actions}
            theme={theme}
            type="btnGroup"
            value={containerBorderWidth}
            options={[0,1,2,3,4,5,18]}
          />
        </ListItem>
        <ListItem>
          <strong>border-radius:</strong>
          <KnobController
            actionKey="containerBorderRadius"
            actions={actions}
            theme={theme}
            type="btnGroup"
            value={containerBorderRadius}
            options={[0,3,14,18,25,90]}
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