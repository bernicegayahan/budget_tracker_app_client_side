//we want to build our first page, register. 
//lets acquire the components needed to build this page from 'react-boostrap';

import {Form, Button, Container} from 'react-bootstrap'

//create a function that will describe the structure of our component
export default function Register() {
	return(
		<Container className="mt-5">
		    <h1 className="mt-3">Register Page </h1>
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