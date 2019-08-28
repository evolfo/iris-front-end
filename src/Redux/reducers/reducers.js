const initialState = {
  modalIsOpen: false,
  formModalIsOpen: false,
  thanksModalOpen: false,
  vipModalIsOpen: false,
  almostThereDisplayed: false,
  thankYouDisplayed: false,
  fanLvl: '',
  loading: false,
  user: {user: {id: 1, first_name: 'ang', phone: '+1 (510)847-9258', email: 'sup@sup.sup', zip_code: '12122'}}
}

export default function mainReducer(state = initialState, action) {
  switch(action.type) {
   case 'ALMOST_DISPLAY':
     return {...state, almostThereDisplayed: true}
   case 'ALMOST_HIDE':
     return {...state, almostThereDisplayed: false}
   case 'THANKS_DISPLAY':
     return {...state, thankYouDisplayed: true}
   case 'THANKS_HIDE':
     return {...state, thankYouDisplayed: false}
   case 'MODAL_OPEN':
     return {...state, modalIsOpen: true}
   case 'MODAL_CLOSE':
     return {...state, modalIsOpen: false}
   case 'FORM_MODAL_OPEN':
     return {...state, formModalIsOpen: true}
   case 'FORM_MODAL_CLOSE':
     return {...state, formModalIsOpen: false}
   case 'THANKS_MODAL_OPEN':
     return {...state, thanksModalOpen: true}
   case 'THANKS_MODAL_CLOSE':
     return {...state, thanksModalOpen: false}
   case 'VIP_MODAL_OPEN':
     return {...state, vipModalIsOpen: true}
   case 'VIP_MODAL_CLOSE':
     return {...state, vipModalIsOpen: false}
   case 'FAN_INPUT':
     return {...state, fanLvl: action.payload}
   case 'CREATE_USER':
     return {...state, user: action.payload}
   case 'LOAD_START':
     return {...state, loading: true }
   case 'LOAD_END':  
     return {...state, loading: false }
   default: 
     return state
  }
}