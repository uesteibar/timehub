import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import {
  reducer as timelineReducer,
  initialState as timelineInitialState,
} from './timeline'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combinedReducers = combineReducers({ timeline: timelineReducer })

const store = createStore(
  combinedReducers,
  { timeline: timelineInitialState },
  composeEnhancers(applyMiddleware(thunk)),
)

export default store
