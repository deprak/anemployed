import { createStore, combineReducers, applyMiddleware } from 'redux'
import { statusReducer, jobReducer } from './reducers'
import { thunk } from './middlewares'

const rootReducer = combineReducers({
  status: statusReducer,
  jobs: jobReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk   
  )
)
export default store