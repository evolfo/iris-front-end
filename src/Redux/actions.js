// DISPATCH

export const expanderOpen = () => {
  return { type: 'EXPANDER_OPEN' }
}

export const expanderModalClose = () => {
  return { type: 'EXPANDER_CLOSE' }
}

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

export const fanLevel = (level) => {
  return { type: 'FAN_INPUT', payload: level }
}