import { combineReducers, } from 'redux'

import AlbunsReducer from './albunsReducer'

export default combineReducers({
    albuns: AlbunsReducer,
})
