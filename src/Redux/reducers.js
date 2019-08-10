const initialState = {
  modalIsOpen: false,
  formModalIsOpen: false,
  fanLvl: ''
}

export default function expansionReducer(state = initialState, action) {
  switch(action.type) {
   case 'EXPANDER_OPEN':
     return {...state, expanded: !state.expanded}
   case 'EXPANDER_CLOSE':
     return {...state, expanded: false}
   case 'MODAL_OPEN':
     return {...state, modalIsOpen: true}
   case 'MODAL_CLOSE':
     return {...state, modalIsOpen: false}
   case 'FORM_OPEN':
     return {...state, formModalIsOpen: true}
   case 'FORM_CLOSE':
     return {...state, formModalIsOpen: false}
   case 'FAN_INPUT':
     return {...state, fanLvl: action.payload}
   default: 
     return state
  }
}