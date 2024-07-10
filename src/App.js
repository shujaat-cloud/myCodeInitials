// import logo from './logo.svg';
// import './App.css';
import Router from './components/Router'
import React, { useState} from 'react';


import BasicButtons from './BasicButtons';
import MediaCard from './components/cards/MediaCard'

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';


function App() {
  const users = ["Home","Visit-Site","Gallery","About Us","Contact Us"]
  // const [myUser,setmyUser]=useState("")



  
  return (
    <div >
      <header>

        {/* {users.map((ele,id)=>{
          return(
            
              <a href="" style={{display:'inline-block',marginLeft:'30px'}}>{ele}</a>
            )

        })} */}
        <Router />
       


        

        {/* <h1>This is My World</h1> */}
        
      </header>
    </div>
  );
}

export default App;
