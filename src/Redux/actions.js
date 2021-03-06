// const baseURL = 'http://localhost:3000/api/v1/'
const baseURL = "https://api.irislune.com/api/v1/"

// DISPATCH

export const almostThereDisplay = () => {
  return { type: 'ALMOST_DISPLAY' }
}

export const almostThereHide = () => {
  return { type: 'ALMOST_HIDE' }
}

export const thanksDisplay = () => {
  return { type: 'THANKS_DISPLAY' }
}

export const thanksHide = () => {
  return { type: 'THANKS_HIDE' }
}

//MODALS
export const modalOpen = () => {
  return { type: 'MODAL_OPEN' }
}

export const modalClose = () => {
  return { type: 'MODAL_CLOSE' }
}

export const formModalOpen = () => {
  return { type: 'FORM_MODAL_OPEN' }
}

export const formModalClose = () => {
  return { type: 'FORM_MODAL_CLOSE' }
}

export const thanksModalOpen = () => {
  return { type: 'THANKS_MODAL_OPEN' }
}

export const thanksModalClose = () => {
  return { type: 'THANKS_MODAL_CLOSE' }
}

export const vipModalOpen = () => {
  return { type: 'VIP_MODAL_OPEN' }
}

export const vipModalClose = () => {
  return { type: 'VIP_MODAL_CLOSE' }
}
//END MODALS

// fan level
export const fanLevel = (level) => {
  return { type: 'FAN_INPUT', payload: level }
}

// CREATING A USER
const creatingUser = userObj => {
  return { type: 'CREATE_USER', payload: userObj }
}

// ADDING A PURCHASE
const addPurchase = purchaseObj => {
  console.log('actions', purchaseObj)
  return { type: 'ADD_PURCHASE', payload: purchaseObj }
}

// LOADING
export const loadingStart = () => {
  return { type: 'LOAD_START' }
}

export const loadingEnd = () => {
  return { type: 'LOAD_END' }
}

// // SAVING MESSAGE
// const savingMessage = message => {
// 	return { type: 'SAVE_MESSAGE', payload: message }
// }

// API CALLS

// creating a new message
export const saveMessage = (message, userId) => {
	return dispatch => {
	  return fetch(baseURL + 'messages', {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json",
	        "Accepts": "application/json"
	      },
	      body: JSON.stringify({ content: message, user_id: userId })
	   })
	     .then(resp => resp.json())
	     .then(messageObj => {
	       console.log('done', messageObj)
	     })
	     .catch(error => console.log(error))
	}
}

// creating a new user
export const createUser = user => {
  return dispatch => {
	return fetch(baseURL + 'users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ first_name: user.firstName, last_name: user.lastName, zip_code: user.zipCode, email: user.email, fan_level: user.fanLvl })
   })
     .then(resp => resp.json())
     .then(userObj => {
       dispatch(creatingUser(userObj))
     })
     .catch(error => console.log(error))
  }
}

// adding phone number to user
export const addPhoneToUser = (userPhone, userId) => {
  return dispatch => {
	return fetch(baseURL + 'users/' + userId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ phone: userPhone })
   })
     .then(resp => resp.json())
     .then(userObj => {
       console.log('adding Phone done', userObj)
     })
     .catch(error => console.log(error))
  }
}

// updating user after starter pack bundle purchase
export const updateUser = (userObj, userId) => {
  return dispatch => {
    return fetch(baseURL + 'users/' + userId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ first_name: userObj.firstName, last_name: userObj.lastName, email: userObj.emailAddress, phone: userObj.phoneNumber, 
        billing_address: userObj.address, zip_code: userObj.zipCode })
    })
     .then(resp => resp.json())
     .then(userObj => {
       console.log('updating User done', userObj)
     })
     .catch(error => console.log(error))
    }
}

// creating a purchase
export const createPurchase = purchase => {
  return dispatch => {
	return fetch(baseURL + 'purchases', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ amount: purchase.amount, bundle_name: purchase.bundleName, user_id: purchase.userId })
   })
     .then(resp => resp.json())
     .then(purchaseObj => {
       addPurchase(purchaseObj)
       console.log('purchase created!')
     })
     .catch(error => console.log(error))
  }
}
