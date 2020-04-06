const postsInitialState = []

const postsReducer = (state = postsInitialState, action) => {
    switch(action.type) {
        case 'SET_POSTS' : {
            return [].concat(action.payload)
        }
        default: {
             return [].concat(state)
        }
    }
}

export default postsReducer