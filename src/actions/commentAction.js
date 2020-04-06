import axios from 'axios'
  
export const setComments= (comments) => {
    return { type: 'SET_COMMENTS', payload: comments}
}

export const reset = () =>{
    return { type: 'RESET_COMMENTS'}
}
 
 
export const startGetComments= (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( response => {
            const comments = response.data
            dispatch(setComments(comments))
        })

        .catch( (err) => {
            console.log(err)
        })  
    }
}

export const resetComments = () =>{
    return (dispatch) => {
        dispatch(reset())
    }
}
 