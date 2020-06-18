import React from 'react'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postsAction'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.dispatch(startGetPosts())
        }

         
    }
    
    render(){
        return(
            <div className ='container'>
                <h1>Available Posts List - {this.props.posts.length}</h1>
                <ul className = 'list-group'>
                    {
                        this.props.posts.map(post => {
                            return <li key={post.id} className ='list-group-item'>
                                    <Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Posts)
 

