import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
// import './App.css';
import Home from './components/home'
import Users from './components/users'
import UserShow from './components/userShow'
import Posts from './components/posts'
import PostShow from './components/postShow'

function App() {
  return (
     <BrowserRouter>
     <div className = 'container-fluid' >
        
         <div className ='nav nav-tabs'>
            <Link to ='/'  className = 'nav-link' >  Home </Link> 
            <Link to='/users'  className = 'nav-link'  > Users </Link> 
            <Link to='/posts'   className = 'nav-link'  >Posts </Link> 
         </div>

         <Route path = "/" component = {Home} exact = {true}/>
         <Route path = "/users" component = {Users} exact = {true}/>
         <Route path = "/posts" component = {Posts} exact = {true}/>
         <Route path = "/users/:id" component = {UserShow} exact = {true}/>
         <Route path = "/posts/:id" component = {PostShow} exact = {true}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
