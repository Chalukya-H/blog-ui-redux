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
          
            this.props.dispatch(startGetUsers())
            this.props.dispatch(startGetPosts())
                               
        } 
        this.props.dispatch(GetComments(id))   
        const postcomments = this.props.postcomment
        
       const refersh = setInterval(
            () => {
               
              if (this.props.users.length > 0 && this.props.posts.length > 0 && postcomments.length > 0) {
                const post = this.props.posts.filter(post =>{
                    return post.id === parseInt(id)
                })

                const users = this.props.users.filter(user => {                                        
                      return user.id === parseInt(post[0].userId)
                })
 
                this.setState({user:users[0] , post:post[0] , postcomments})
                clearInterval(refersh)
              }
            },
            2000
          )
 

        
    }
    render(){
        return (
            <div className = 'container border'>
                 <div className = 'row'>
                    <div className ='col border rounded-pill'>
                        <h2> UserName : {this.state.user.name}</h2>
                    </div>
                 </div>
                 <div className = 'row'>
                    <div className ='col-md-12 border'>
                         <h3> Title : <br/></h3> <h4>{this.state.post.title}</h4>
                         <h3> Body : <br/></h3> <h4>{this.state.post.body}</h4>
                    </div>
                 </div>
                  
                <h2>Comments : </h2>
                <ul className ='list-group'>
                    {
                        this.state.postcomments.map (function(ele,i){
                            return (
                                <li key ={i} className = 'list-group-item'> {ele.body} </li>
                            )   
                        })
                    }
                </ul>
                <hr/>
                <div className = 'breadcrumb'>
                    <Link to = {`/users/${this.state.user.id}`} className = 'breadcrumb-item'> More about Author -{this.state.user.name}</Link> &nbsp;
                    <Link to ='/posts' className = 'breadcrumb-item'>  Goto Posts List </Link>
                </div>
                
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
 