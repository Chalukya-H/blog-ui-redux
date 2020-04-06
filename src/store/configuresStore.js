import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        users: usersReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore
