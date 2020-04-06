const commentInitialState = []

const commentsReducer = (state = commentInitialState, action) => {
    switch(action.type) {
        case 'SET_COMMENTS' : {
            return [].concat(action.payload)
        }

        case 'RESET_COMMENTS' : {
            return state = {}
        }
        
        default: {
             return [].concat(state)
        }
    }
}

export default commentsReducer