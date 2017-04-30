/* eslint-disable no-unused-vars */
import thunk from 'redux-thunk'
/* eslint-enable no-unused-vars */

const initialState = {
  timeline: {},
  isLoading: false,
  error: null,
}

const types = {
  TIMELINE_REQUEST: 'TIMELINE/TIMELINE_REQUEST',
  TIMELINE_SUCCESS: 'TIMELINE/TIMELINE_SUCCESS',
  TIMELINE_FAILURE: 'TIMELINE/TIMELINE_FAILURE',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TIMELINE_REQUEST:
      return { ...state, isLoading: true, error: null }
    case types.TIMELINE_SUCCESS:
      return { ...state, isLoading: false, timeline: action.timeline }
    case types.TIMELINE_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}

const actions = {
  fetchTimeline: key => fetchTimelineThunk(key),
}

const fetchTimelineThunk = key => {
  return dispatch => {
    dispatch({ type: types.TIMELINE_REQUEST })

    return fetch(`/api/${key}`).then(res => res.json()).then(json => {
      if (json.error && json.error.statusCode >= 400) {
        return dispatch({ type: types.TIMELINE_FAILURE, error: json })
      }
      return dispatch({ type: types.TIMELINE_SUCCESS, timeline: json })
    })
  }
}

export { initialState, actions, reducer }
