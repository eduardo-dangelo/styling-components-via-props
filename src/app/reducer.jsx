const CHANGE_BUTTON_BACKGROUND_COLOR = 'styledComponent/CHANGE_BUTTON_BACKGROUND_COLOR'
const CHANGE_BUTTON_BORDER_RADIUS = 'styledComponent/CHANGE_BUTTON_BORDER_RADIUS'
const CHANGE_BUTTON_BORDER_WIDTH = 'styledComponent/CHANGE_BUTTON_BORDER_WIDTH'
const CHANGE_BUTTON_COLOR = 'styledComponent/CHANGE_BUTTON_COLOR'
const CHANGE_CONTAINER_BACKGROUND_COLOR = 'styledComponent/CHANGE_CONTAINER_BACKGROUND_COLOR'
const CHANGE_CONTAINER_BORDER_RADIUS = 'styledComponent/CHANGE_CONTAINER_BORDER_RADIUS'
const CHANGE_CONTAINER_BORDER_WIDTH = 'styledComponent/CHANGE_CONTAINER_BORDER_WIDTH'
const CHANGE_CONTAINER_COLOR = 'styledComponent/CHANGE_CONTAINER_COLOR'
const CHANGE_CONTENT = 'styledComponent/CHANGE_CONTENT'
const CHANGE_THEME = 'styledComponent/CHANGE_THEME'

const initialValues = {
  activeTheme: 'light',
  themes: {
    dark: {
      button: {
        backgroundColor: '#696893',
        borderRadius: 0,
        borderWidth: 1,
        color: '#efefef',
      },
      container: {
        backgroundColor: '#1d1c23',
        borderRadius: 0,
        borderWidth: 1,
        color: '#d1d1d1',
      },
      content: 'Hello World, this is my first styled component!',
    },
    light: {
      button: {
        backgroundColor: '#b7b5ff',
        borderRadius: 0,
        borderWidth: 1,
        color: '#232323',
      },
      container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        borderWidth: 1,
        color: '#666666',
      },
      content: 'Hello World, this is my first styled component!',
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
            ...state.themes[action.payload.theme],
            button: {
              ...state.themes[action.payload.theme].button,
              backgroundColor: action.payload.value
            }
          }
        }
      };
    case CHANGE_BUTTON_BORDER_WIDTH:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            ...state.themes[action.payload.theme],
            button: {
              ...state.themes[action.payload.theme].button,
              borderWidth: action.payload.value
            }
          }
        }
      };
    case CHANGE_BUTTON_BORDER_RADIUS:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            ...state.themes[action.payload.theme],
            button: {
              ...state.themes[action.payload.theme].button,
              borderRadius: action.payload.value
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
            ...state.themes[action.payload.theme],
            button: {
              ...state.themes[action.payload.theme].button,
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
            ...state.themes[action.payload.theme],
            container: {
              ...state.themes[action.payload.theme].container,
              backgroundColor: action.payload.value
            }
          }
        }
      };
    case CHANGE_CONTAINER_BORDER_WIDTH:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            ...state.themes[action.payload.theme],
            container: {
              ...state.themes[action.payload.theme].container,
              borderWidth: action.payload.value
            }
          }
        }
      };
    case CHANGE_CONTAINER_BORDER_RADIUS:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            ...state.themes[action.payload.theme],
            container: {
              ...state.themes[action.payload.theme].container,
              borderRadius: action.payload.value
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
            ...state.themes[action.payload.theme],
            container: {
              ...state.themes[action.payload.theme].container,
              color: action.payload.value
            }
          }
        }
      };
    case CHANGE_CONTENT:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            ...state.themes[action.payload.theme],
            content: action.payload.value
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

const changeButtonBorderWidth = (theme, value) => ({
  type: CHANGE_BUTTON_BORDER_WIDTH,
  payload: {
    theme,
    value
  }
})

const changeButtonBorderRadius = (theme, value) => ({
  type: CHANGE_BUTTON_BORDER_RADIUS,
  payload: {
    theme,
    value
  }
})


const changeContainerBackgroundColor = (theme, value) => ({
  type: CHANGE_CONTAINER_BACKGROUND_COLOR,
  payload: {
    theme,
    value
  }
})

const changeContainerBorderWidth = (theme, value) => ({
  type: CHANGE_CONTAINER_BORDER_WIDTH,
  payload: {
    theme,
    value
  }
})

const changeContainerBorderRadius = (theme, value) => ({
  type: CHANGE_CONTAINER_BORDER_RADIUS,
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

const changeContent = (theme, value) => ({
  type: CHANGE_CONTENT,
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
    case 'buttonBorderWidth':
      return changeButtonBorderWidth(theme, value)
    case 'buttonBorderRadius':
      return changeButtonBorderRadius(theme, value)
    case 'buttonColor':
      return changeButtonColor(theme, value.hex)
    case 'containerBackgroundColor':
      return changeContainerBackgroundColor(theme, value.hex)
    case 'containerBorderRadius':
      return changeContainerBorderRadius(theme, value)
    case 'containerBorderWidth':
      return changeContainerBorderWidth(theme, value)
    case 'containerColor':
      return changeContainerColor(theme, value.hex)
  }
}

export const actions = {
  changeTheme,
  changeContent,
  updateValue,
}