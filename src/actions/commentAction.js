import axios from 'axios'
  
export const setComments= (comments) => {
    return { type: 'SET_COMMENTS', payload: comments}
}

 
 
export const startGetPosts = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( response => {
            this.setState ({ comments : response.data})
            dispatch(setComments(comments))
        })

        .catch( (err) => {
            console.log(err)
        })  
    }
}
 