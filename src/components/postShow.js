import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startGetUsers } from '../actions/usersAction'
import {startGetPosts} from  '../actions/postsAction'
import {GetComments} from '../actions/commentAction'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state ={
            post : {},
            user : {},
            postcomments : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
          
        if (this.props.users.length === 0 || this.props.posts.length === 0 || this.props.postcomment.length ===0  ) {
            console.log('before load')
            this.props.dispatch(startGetUsers())
            this.props.dispatch(startGetPosts())
                               
        } 
        this.props.dispatch(GetComments(id))   
        
        
       const refersh = setInterval(
            () => {
               
              if (this.props.users.length > 0 && this.props.posts.length > 0 && this.props.postcomment.length > 0) {
                const post = this.props.posts.filter(post =>{
                    return post.id === parseInt(id)
                })

                const users = this.props.users.filter(user => {                                        
                      return user.id === parseInt(post[0].userId)
                })

                const postcomments = this.props.postcomment

                this.setState({user:users[0] , post:post[0] , postcomments})
                clearInterval(refersh)
              }
            },
            2000
          )
 

        
    }
    render(){
        return (
            <div style = {{backgroundColor:'aqua'}}>
                 <h1> UserName : {this.state.user.name}</h1>
                  <hr/>
                <h2> Title : {this.state.post.title}</h2>
                <h2> Body : {this.state.post.body}</h2>
                <hr/>
                <h2>Comments : </h2>
                <ul>
                    {
                        this.state.postcomments.map (function(ele,i){
                            return (
                                <li key ={i}> {ele.body} </li>
                            )   
                        })
                    }
                </ul>
                <hr/>
                <Link to = {`/users/${this.state.user.id}`}> More about Author -{this.state.user.name}</Link> &nbsp;
                <Link to ='/posts'><button> Goto Posts List</button></Link>
            </div>
        )
    }
}
 


const mapStateToProps = (state) => {
    return {
        users: state.users,
        posts:state.posts,
        postcomment:state.postcomment
    }
}
export default connect(mapStateToProps)(PostShow)
 