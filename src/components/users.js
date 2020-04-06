import React from 'react'
import { connect } from 'react-redux'
import { startGetUsers } from '../actions/usersAction'
// npm install axios 
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.dispatch(startGetUsers())
        }
    }
    
    render(){
        return(
            <div style = {{backgroundColor:'aqua'}}>
                <h1>Users List - {this.props.users.length}</h1>
                <ul>
                    {
                        this.props.users.map(user => {
                            return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UsersList)
 
