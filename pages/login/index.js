import { useState, useContext } from 'react';
import UserContext from '../../UserContext';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { GoogleLogin } from "react-google-login"
//lets acquire our view component
import View from '../../components/View';
//lets acquire our helper document
import AppHelper from '../../app-helper.js';
import Router from 'next/router'

import dynamic from 'next/dynamic'
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false })

export default function index() {
    return (
        <View title={'Booking App Login Page'}>
            <ParticlesBg type="cobweb" bg={true} />
            <Row className="justify-content-center">
                <Col xs md="6">
                    <Login />
                </Col>
            </Row>
        </View>
    )
}



//lets create a function that will allow us to communicate with google and authenticate the user by generating an accessToken
//create a paramter that will describe the response of google.
const authenticateGoogleToken = (response) => {
    //lets create a checker for us to be able to catch first the response from google.
    console.log(response)

    //simply save the accesstoken inside our local storage
    localStorage.setItem('googleToken', response.accessToken)
    //send a request to our backend project which will allow you to get the information about the user.
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokenId: response.accessToken })
    }

    //since we have created the payload structure
    fetch(`${AppHelper.API_URL}/users/verify-google-id-token`, payload).then(AppHelper.toJSON).then(data => {
        //lets create a control structure to determine the procedure when receiving the response. 
        if (typeof data.accessToken !== 'undefined') {
            //save the access token inside the local storage
            localStorage.setItem('token', data.accessToken)
            retrieveUserDetails(data.accessToken)
        } else {
            //what will be the response if the token id from google was not verified?
            if (data.error == 'google-auth-error') {
                Swal.fire(
                    'Google Auth Error',
                    'Google Authentication Failed',
                    'error')
            } else if (data.error === 'login-type-error') {
                Swal.fire(
                    'Google Auth Error',
                    'You might have registered through a different login procedure.',
                    'error')
            }
        }
    })
}



//lets create a function that will send a request to authenticate the user
function Login() {
    //lets consume the values provided by the context object.
    const { user, setUser } = useContext(UserContext);

    //lets define a state for our token id
    const [tokenId, setTokenId] = useState(null)

    //lets define a state for our components
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const authenticate = (e) => {
        e.preventDefault() //to avoid page redirection.
        //attack the url address of the login endpoint

        //practice task, lets refactor the current structure of our fetch request by storing the payload inside an object.
        const laman = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }

        fetch(`${AppHelper.API_URL}/users/login`, laman).then(AppHelper.toJSON).then(data => {
            console.log(data);
            //lets create a control structure that will determine the response to the user.
            if (typeof data.accessToken !== "undefined") {
                //next task is to save the access token inside our local storage object
                localStorage.setItem('token', data.accessToken)
                retrieveUserDetails(data.accessToken)
            } else {
                //inside this branch we are going to give it these exact conditions upon failure in logging in.
                if (data.error === 'does-not-exist') {
                    Swal.fire('Authentication Failed', 'User Does Not Exist', 'error')
                } else if (data.error === 'incorrect-password') {
                    Swal.fire('Authentication Failed', 'Password is incorrect', 'error')
                } else if (data.error === 'login-type-error') {
                    Swal.fire('Authentication Failed', 'You may have registered using a different method, try using an alternative login method.', 'error')
                }
            }
        })
    }

    //new location for retrieve user details method.
    //lets create a function that will allow us to retrieve the information/details about the user.

    //upon retrieving the info about the user, the user has to be authenticated first.
    const retrieveUserDetails = (accessToken) => {
        //lets create an object which we will name as option. and the value it holds is the access token
        const options = {
            headers: { Authorization: `Bearer ${accessToken}` }
        } //this will serve as the payload of the request.

        //send the request together with the payload 
        fetch(`${AppHelper.API_URL}/users/details`, options).then(AppHelper.toJSON).then(data => {
            //change the value of the user component by targeting it's state setter. 
            setUser({ id: data._id, isAdmin: data.isAdmin })
            //lets redirect the user inside the courses page.
            Router.push('/user/categories');
        })
    }

    return (
        <Container>
            <h1>Log In Page</h1>
            <Form onSubmit={e => authenticate(e)}>
                {/* email*/}
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control value={email} placeholder="Insert Email Here" type="email" onChange={e => setEmail(e.target.value)} required />
                </Form.Group>
                {/* password*/}
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control value={password} placeholder="Insert Password Here" onChange={e => setPassword(e.target.value)} type="password" required />
                </Form.Group>
                <Button className="mt-3 mb-3 w-100" variant="dark" type="submit">Log In</Button>

                {/* <GoogleLogin
                    clientId="882160198246-olkr54sokvce6a9pq280s5t60aj0c14t.apps.googleusercontent.com" //Client Id from Google API console.
                    className="w-100 mt-3 text-center d-flex justify-content-center"
                    buttonText="Log In with Gmail" //text to be displayed
                    onSuccess={authenticateGoogleToken} //callback function that is run on success
                    onFailure={authenticateGoogleToken}
                // callback function that is run on failure. 
                /> */}
            </Form>
        </Container>
    )
}

