
const CHANGE_SECTION_BG = 'styledComponent/CHANGE_SECTION_BG'
const CHANGE_SECTION_COLOR = 'styledComponent/CHANGE_SECTION_COLOR'
const CHANGE_BUTTON_BG = 'styledComponent/CHANGE_BUTTON_BG'
const CHANGE_BUTTON_COLOR = 'styledComponent/CHANGE_BUTTON_COLOR'

const initialValues = {
  sectionBg: 'papayawhip',
  sectionColor: 'palevioletred',
  buttonBg: '#bbbbbb',
  buttonColor: 'black'
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case CHANGE_SECTION_BG:
      return {
        ...state,
        sectionBg: action.payload,
      };
    case CHANGE_SECTION_COLOR:
      return {
        ...state,
        sectionColor: action.payload,
      };
    case CHANGE_BUTTON_BG:
      return {
        ...state,
        buttonBg: action.payload,
      };
    case CHANGE_BUTTON_COLOR:
      return {
        ...state,
        buttonColor: action.payload,
      };
    default:
      return state;
  }
}

const changeSectionBg = (color) => ({ type: CHANGE_SECTION_BG, payload: color })
const changeSectionColor = (color) => ({ type: CHANGE_SECTION_COLOR, payload: color })
const changeButtonBg = (color) => ({ type: CHANGE_BUTTON_BG, payload: color })
const changeButtonColor = (color) => ({ type: CHANGE_BUTTON_COLOR, payload: color })

export const actions = {
  changeSectionBg,
  changeSectionColor,
  changeButtonBg,
  changeButtonColor,
}