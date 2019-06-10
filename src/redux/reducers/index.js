import { combineReducers } from 'redux'
import count from './countReducer'
import about from "@/redux/reducers/aboutReducer"

const rootReducer = combineReducers({
  count,
  about
})

export default rootReducer
