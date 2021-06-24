import { useState, useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'//import boostrap
import AppNavbar from '../components/NavBar'; 
import { UserProvider } from '../contexts/UserContext'; 
import AppHelper from '../app-helper'; 
import { Container } from 'react-bootstrap'; 

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ email: null })

  useEffect(() => {
  	  if(AppHelper.getAccessToken() !== null){
  	  	  const options = {
  	  	  	headers: { Authorization: `Bearer ${AppHelper.getAccessToken() }`
  	  	  }
  	  	  }  
  	  	fetch('http://localhost:4000/api/users/details', options).then((response) => response.json()).then((userData) => {
             //lets create a control structure to determin the response if a user has been authenticated
             if(typeof userData.email != 'undefined'){
                 setUser({ email: userData.email }) 
             }else{
                 //if the condition was not met meaning the userData is null or undefined
                 setUser({ email: null })
             }
  	  	})      
  	  }
   }, [user.id]
  )

  const unsetUser = () => {
  	//this function will be used to clear out the contents of the local storage.
  	localStorage.clear()
  	setUser({ email: null })
  }
  return(
  	<> 
  	   <UserProvider value={ { user, setUser, unsetUser } }>
		  	<AppNavbar />
		    <Container>
		  	  <Component {...pageProps} />
		  	</Container>
	  	</UserProvider>
  	</>
  	)
}

export default MyApp
