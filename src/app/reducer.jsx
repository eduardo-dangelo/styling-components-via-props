
const CHANGE_BUTTON_BACKGROUND_COLOR = 'styledComponent/CHANGE_BUTTON_BACKGROUND_COLOR'
const CHANGE_BUTTON_COLOR = 'styledComponent/CHANGE_BUTTON_COLOR'
const CHANGE_CONTAINER_BACKGROUND_COLOR = 'styledComponent/CHANGE_CONTAINER_BACKGROUND_COLOR'
const CHANGE_CONTAINER_COLOR = 'styledComponent/CHANGE_CONTAINER_COLOR'

const initialValues = {
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#BBBBBB',
    borderStyle: 'solid',
    color: '#666666',
  },
  button: {
    color: '#666666',
    content: 'action button',
    backgroundColor: '#22AA44',
  },
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case CHANGE_CONTAINER_BACKGROUND_COLOR:
      return {
        ...state,
        container: {
          ...state.container,
          backgroundColor: action.payload,
        }
      };
    case CHANGE_CONTAINER_COLOR:
      return {
        ...state,
        container: {
          ...state.container,
          color: action.payload,
        }
      };
    case CHANGE_BUTTON_BACKGROUND_COLOR:
      return {
        ...state,
        button: {
          ...state.button,
          backgroundColor: action.payload,
        }
      };
    case CHANGE_BUTTON_COLOR:
      return {
        ...state,
        button: {
          ...state.button,
          color: action.payload,
        }
      };
    default:
      return state;
  }
}

const changeContainerBackgroundColor = (value) => ({ type: CHANGE_CONTAINER_BACKGROUND_COLOR, payload: value })
const changeContainerColor = (value) => ({ type: CHANGE_CONTAINER_COLOR, payload: value })
const changeButtonBackgroundColor = (color) => ({ type: CHANGE_BUTTON_BACKGROUND_COLOR, payload: color })
const changeButtonColor = (color) => ({ type: CHANGE_BUTTON_COLOR, payload: color })

const updateValue = (value, key) => {
  switch (key) {
    case 'containerBackgroundColor':
      return changeContainerBackgroundColor(value.hex)
    case 'containerColor':
      return changeContainerColor(value.hex)
    case 'buttonBackgroundColor':
      return changeButtonBackgroundColor(value.hex)
    case 'buttonColor':
      return changeButtonColor(value.hex)
  }
}

export const actions = {
  updateValue,
}