import axios from 'axios'
  
export const setComments= (comments) => {
    return { type: 'SET_COMMENTS', payload: comments}
}
  
export const GetComments= (id) => {  
      console.log(id)
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( response => {
            const comments = response.data
            // console.log(comments)
            dispatch(setComments(comments))
        })

        .catch( (err) => {
            console.log(err)
        })  
    }
}
 