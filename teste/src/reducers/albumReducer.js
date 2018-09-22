import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function albumReducer(state = initialState.albums, action) {
  switch (action.type) {
    case types.LOAD_ALBUMS_SUCCESS:
      return action.albums;

    default:
      return state;
  }
}
