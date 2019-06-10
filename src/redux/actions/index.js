export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SAVE_DATA = 'SAVE_DATA'
export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA'


export const increment = num => ({ type: INCREMENT, num })
export const decrement = num => ({ type: DECREMENT, num })
export const fetchDataSaga = () => ({ type: FETCH_DATA_SAGA })
export const saveData = data => ({ type: SAVE_DATA, data })
