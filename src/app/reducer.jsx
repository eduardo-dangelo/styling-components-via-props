
const CHANGE_BUTTON_BACKGROUND_COLOR = 'styledComponent/CHANGE_BUTTON_BACKGROUND_COLOR'
const CHANGE_BUTTON_COLOR = 'styledComponent/CHANGE_BUTTON_COLOR'
const CHANGE_CONTAINER_BACKGROUND_COLOR = 'styledComponent/CHANGE_CONTAINER_BACKGROUND_COLOR'
const CHANGE_CONTAINER_COLOR = 'styledComponent/CHANGE_CONTAINER_COLOR'
const CHANGE_THEME = 'styledComponent/CHANGE_THEME'

const initialValues = {
  activeTheme: 'light',
  themes: {
    dark: {
      button: {
        backgroundColor: '#696893',
        color: '#efefef',
      },
      container: {
        backgroundColor: '#1d1c23',
        color: '#d1d1d1',
      },
    },
    light: {
      button: {
        backgroundColor: '#b7b5ff',
        color: '#232323',
      },
      container: {
        backgroundColor: '#FFFFFF',
        color: '#666666',
      },
    },
  }
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case CHANGE_BUTTON_BACKGROUND_COLOR:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            button: {
              ...state.themes[action.payload.theme].container,
              backgroundColor: action.payload.value
            }
          }
        }
      };
    case CHANGE_BUTTON_COLOR:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            button: {
              ...state.themes[action.payload.theme].container,
              color: action.payload.value
            }
          }
        }
      };
    case CHANGE_CONTAINER_BACKGROUND_COLOR:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            container: {
              ...state.themes[action.payload.theme].container,
              backgroundColor: action.payload.value
            }
          }
        }
      };
    case CHANGE_CONTAINER_COLOR:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            container: {
              ...state.themes[action.payload.theme].container,
              color: action.payload.value
            }
          }
        }
      };
    case CHANGE_THEME:
      return {
        ...state,
        activeTheme: action.payload
      };
    default:
      return state;
  }
}

const changeContainerBackgroundColor = (theme, value) => ({
  type: CHANGE_CONTAINER_BACKGROUND_COLOR,
  payload: {
    theme,
    value
  }
})

const changeContainerColor = (theme, value) => ({
  type: CHANGE_CONTAINER_COLOR,
  payload: {
    theme,
    value
  }
})

const changeButtonBackgroundColor = (theme, value) => ({
  type: CHANGE_BUTTON_BACKGROUND_COLOR,
  payload: {
    theme,
    value
  }
})

const changeButtonColor = (theme, value) => ({
  type: CHANGE_BUTTON_COLOR,
  payload: {
    theme,
    value
  }
})

const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme
})


const updateValue = (key, theme, value) => {
  switch (key) {
    case 'buttonBackgroundColor':
      return changeButtonBackgroundColor(theme, value.hex)
    case 'buttonColor':
      return changeButtonColor(theme, value.hex)
    case 'containerBackgroundColor':
      return changeContainerBackgroundColor(theme, value.hex)
    case 'containerColor':
      return changeContainerColor(theme, value.hex)
  }
}

export const actions = {
  changeTheme,
  updateValue,
}