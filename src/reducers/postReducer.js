const postInitialState = []

const postReducer = (state = postInitialState, action) => {
    switch(action.type) {
        case 'GET_SPECIFIC_POST' : {
            return [].concat(action.payload)
        }
        default: {
             return [].concat(state)
        }
    }
}

export default postReducer