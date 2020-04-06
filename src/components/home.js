import React from 'react'
 

function Home(props){
    props.dispatch(resetComments())
    return (
        <div style = {{backgroundColor:'aqua'}}>
            <h2> Home page of bloger site</h2>
        </div>
    )
}

export default Home