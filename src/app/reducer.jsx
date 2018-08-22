import { last } from 'lodash'

const CHANGE_BUTTON_BACKGROUND_COLOR = 'styledComponent/CHANGE_BUTTON_BACKGROUND_COLOR'
const CHANGE_BUTTON_BORDER_RADIUS = 'styledComponent/CHANGE_BUTTON_BORDER_RADIUS'
const CHANGE_BUTTON_BORDER_WIDTH = 'styledComponent/CHANGE_BUTTON_BORDER_WIDTH'
const CHANGE_BUTTON_COLOR = 'styledComponent/CHANGE_BUTTON_COLOR'
const CHANGE_BUTTON_CONTENT = 'styledComponent/CHANGE_BUTTON_CONTENT'
const CHANGE_CONTAINER_BACKGROUND_COLOR = 'styledComponent/CHANGE_CONTAINER_BACKGROUND_COLOR'
const CHANGE_CONTAINER_BORDER_RADIUS = 'styledComponent/CHANGE_CONTAINER_BORDER_RADIUS'
const CHANGE_CONTAINER_BORDER_WIDTH = 'styledComponent/CHANGE_CONTAINER_BORDER_WIDTH'
const CHANGE_CONTAINER_COLOR = 'styledComponent/CHANGE_CONTAINER_COLOR'
const CHANGE_CONTAINER_CONTENT = 'styledComponent/CHANGE_CONTAINER_CONTENT'
const CHANGE_THEME = 'styledComponent/CHANGE_THEME'
const UNDO = 'styledComponent/UNDO'

const initialValues = {
  activeTheme: 'light',
  themes: {
    dark: {
      past: [],
      present: {
        button: {
          backgroundColor: '#696893',
          borderRadius: 0,
          borderWidth: 1,
          color: '#efefef',
          content: 'Action Button',
        },
        container: {
          backgroundColor: '#1d1c23',
          borderRadius: 0,
          borderWidth: 1,
          color: '#d1d1d1',
          content: 'Hello World, this is my first styled component!',
        },
      }
    },
    light: {
      past: [],
      present: {
        button: {
          backgroundColor: '#b7b5ff',
          borderRadius: 0,
          borderWidth: 1,
          color: '#232323',
          content: 'Action Button',
        },
        container: {
          backgroundColor: '#FFFFFF',
          borderRadius: 0,
          borderWidth: 1,
          color: '#666666',
          content: 'Hello World, this is my first styled component!',
        },
      }
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
            past: [...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              button: {
                ...state.themes[action.payload.theme].present.button,
                backgroundColor: action.payload.value
              }
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
            past: [ ...state.themes[ action.payload.theme ].past, state.themes[ action.payload.theme ].present],
            present: {
              ...state.themes[ action.payload.theme ].present,
              button: {
                ...state.themes[ action.payload.theme ].present.button,
                borderWidth: action.payload.value
              }
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
            past: [ ...state.themes[ action.payload.theme ].past, state.themes[ action.payload.theme ].present],
            present: {
              ...state.themes[ action.payload.theme ].present,
              button: {
                ...state.themes[ action.payload.theme ].present.button,
                borderRadius: action.payload.value
              }
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
            past: [ ...state.themes[ action.payload.theme ].past, state.themes[ action.payload.theme ].present],
            present: {
              ...state.themes[ action.payload.theme ].present,
              button: {
                ...state.themes[ action.payload.theme ].present.button,
                color: action.payload.value
              }
            }
          }
        }
      };
    case CHANGE_BUTTON_CONTENT:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              button: {
                ...state.themes[action.payload.theme].present.button,
                content: action.payload.value
              }
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
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              container: {
                ...state.themes[action.payload.theme].present.container,
                backgroundColor: action.payload.value
              }
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
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              container: {
                ...state.themes[action.payload.theme].present.container,
                borderWidth: action.payload.value
              }
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
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              container: {
                ...state.themes[action.payload.theme].present.container,
                borderRadius: action.payload.value
              }
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
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              container: {
                ...state.themes[action.payload.theme].present.container,
                color: action.payload.value
              }
            }
          }
        }
      };
    case CHANGE_CONTAINER_CONTENT:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            past: [ ...state.themes[action.payload.theme].past, state.themes[action.payload.theme].present],
            present: {
              ...state.themes[action.payload.theme].present,
              container: {
                ...state.themes[action.payload.theme].present.container,
                content: action.payload.value
              }
            }
          }
        }
      };
    case CHANGE_THEME:
      return {
        ...state,
        activeTheme: action.payload
      };
    case UNDO:
      return {
        ...state,
        themes: {
          ...state.themes,
          [action.payload.theme]: {
            past: state.themes[action.payload.theme].past.slice(0, state.themes[action.payload.theme].past.length - 1),
            present: last(state.themes[action.payload.theme].past)
          }
        }
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

const changeButtonContent = (theme, value) => ({
  type: CHANGE_BUTTON_CONTENT,
  payload: {
    theme,
    value
  }
})

const changeContainerContent = (theme, value) => ({
  type: CHANGE_CONTAINER_CONTENT,
  payload: {
    theme,
    value
  }
})

const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme
})

const undo = (theme) => ({
  type: UNDO,
  payload: {
    theme
  }
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
  changeContainerContent,
  changeButtonContent,
  updateValue,
  undo,
}