import { useState, useContext } from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserContext from '../contexts/UserContext'; 
import View from '../components/View'; 
import Swal from 'sweetalert2'
import Router from 'next/router'

export default function Home() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const { user, setUser } = useContext(UserContext)

   if(user.email !== null) {
    Router.push('/user/records');
   }
   
  //lets create a function to retrieve the user details before the client can be redirected inside the rECORDS page. 
  const retrieveUserDetails = (accessToken) => {
     //we have to make sure the user has already been verified meaning it was already granted access token.
     const options = {
         headers: { Authorization: `Bearer ${accessToken}`}
     }
     //create a request going to the desired enspoint with the payload.
     fetch('http://localhost:4000/api/users/details', options).then((response) => response.json()).then(data => {
         setUser({ email: data.email }) //lets acquiring the email property from the data res. 
         Router.push('/user/records') 
     })
  }

  function login(e){
    e.preventDefault()
    //describe the request to login
    fetch("http://localhost:4000/api/users/login", {
    	method: 'POST',
    	headers: {
    		'Content-Type': 'application/json'
    	},
    	body: JSON.stringify({
    		email: email,
    		password: password
    	}) //for the request to be accepted by the api
    }).then(res => res.json()).then(data => {
    	//lets create a control structure
    	if(typeof data.accessToken !== "undefined") {
    		//store the access token in the local storage
    		localStorage.setItem('token', data.accessToken)
        retrieveUserDetails(data.accessToken)
    		Swal.fire({
    			icon: 'success',
    			title: 'Successfully Logged In'
    		})
 		
    	} else {
           Swal.fire('Login Error', 'You may have registered using a different login procedure', 'error')
    	}
    })
  }
  return (
      <View title={ 'Budget Tracking App' }>
         <h1>Welcome!</h1>
          <p>Login by using your Registered Email.</p>
	        <Form onSubmit={e => login(e)}>
	            <Form.Group controlId="email">
	                <Form.Label>Email:</Form.Label>
	                <Form.Control type="text" value={email} onChange={e=>setEmail(e.target.value)} required/>
	            </Form.Group>
	            <Form.Group controlId="password">
	                <Form.Label>Password:</Form.Label>
	                <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
	            </Form.Group>
	            <Button type="submit" variant="primary" className="btn-block mb-3">Submit</Button>
	        </Form>
      </View>
  )
}
