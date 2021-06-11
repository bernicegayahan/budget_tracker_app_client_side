//we want to build our first page, register. 
//lets acquire the components needed to build this page from 'react-boostrap';

import {Form, Button, Container} from 'react-bootstrap'
import View from '../components/View';

//lets create an anonynous function and declare it ad the default export of this document.
export default () => {
	return(
	   <View title="Register Account">
	     <Register />
	   </View>
	)
}

//POSSIBLE WEEKEND TASK:
// => create a Home page/landing page for your budget tracker (feauture/ display functionalities of the app.)
//=> another stretch goal for the register page (create a logic that will require the user to choose a password that will contain both alphanumeric characters, one special character, min=8 , max=16)


//create a function that will describe the structure of our component
const Register = () => {
	return(
		<Container>
		    <h1>Register Page </h1>
			<Form>
			  {/*first Name*/}
			   <Form.Group>
				  	<Form.Label>First Name:</Form.Label>
				  	<Form.Control type="text" placeholder="Insert First Name Here" required/>
			  </Form.Group>
			  {/*last Name*/}
			  <Form.Group>
				  	<Form.Label>Last Name:</Form.Label>
				  	<Form.Control type="text" placeholder="Insert Last Name Here" required/>
			  </Form.Group>
			  {/*email*/}
			  <Form.Group>
				  	<Form.Label>Email</Form.Label>
				  	<Form.Control type="email" placeholder="Insert Email Address Here" required/>
			  </Form.Group>
			  {/* mobile number */}
			  <Form.Group>
			  	<Form.Label>Mobile Number:</Form.Label>
			  	<Form.Control type="number" placeholder="Insert Mobile Number Here" required/>
			  </Form.Group>
			  {/*password */}
			  <Form.Group>
			  	<Form.Label>Password:</Form.Label>
			  	<Form.Control type="password" placeholder="Insert Password Here" required/>
			  </Form.Group>
			  {/*confirm password*/}
			  <Form.Group>
			  	<Form.Label>Confirm Password:</Form.Label>
			  	<Form.Control type="password" placeholder="Confirm Password Here" required/>
			  </Form.Group>

			  <Button className="mt-3"variant="success" type="submit">Register</Button>
			</Form>
		</Container>
	)
}