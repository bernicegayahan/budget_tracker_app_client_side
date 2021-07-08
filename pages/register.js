import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
//import { stringify } from 'querystring';
import dynamic from 'next/dynamic'
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false })


export default function Register() {

	//lets bind our form components inside a state hook 
	//lets create a state for our missing fieds.
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mobileNo, setMobileNo] = useState(0)
	const [email, setEmail] = useState("") //assign an initial value.
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [btnActive, setBtnActive] = useState(false)


	//our new task for ste 6 is to create a function to simulate a user register page by clearing out the input fields and display a response message. 
	//we need to pass this inside our form  

	//make this page an actual register page.

	function registerUser(e) {
		e.preventDefault() //what does this do? this prevents page redirection.


		//send a request to our register endpoint
		fetch('http://localhost:4000/api/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				mobileNo: mobileNo,
				password: password1
			})
		}).then(res => res.json()).then(convertedData => {
			console.log(convertedData)
			if (convertedData === true) {
				Swal.fire({
					icon: "success",
					title: "Successfully Registered!",
					text: "Thank you for registering."
				})

				setEmail("")
				setPassword1("")
				setPassword2("")
				setFirstName("")
				setLastName("")
				setMobileNo(0)
			} else {
				Swal.fire({
					icon: "error",
					title: "Registration Failed!!",
					text: "Something went wrong, please try again later."
				})
			}
		})
	}

	//our next goal is to change the state of our register button so that we will be allowed to proceed to the next step.

	//in our effect hook, lets include the new components to make sure that the user would fill in data first before being allowed to proceed with the next procedure.

	useEffect(() => {
		//we want to validate if all input fields are filled. 
		//we want to validate if password will match
		if ((firstName !== "" && lastName !== "" && mobileNo !== "" && email !== "" && password1 !== "" && password2 !== "") && (password2 === password1)) {
			setBtnActive(true)
		} else {
			setBtnActive(false)
		}
	})

	//this is just going to be a very simple register page "simulation"
	//email, password, and confirm password
	return (
		<Container>

			<Row className="justify-content-center">
				<h2 className="mt-5"> Register New User </h2>
				<ParticlesBg type="cobweb" bg={true} />
				<Col xs md="6">

					<Form onSubmit={(e) => registerUser(e)}>

						{/*user's first name*/}
						<Form.Group>
							<Form.Label>Enter First Name:</Form.Label>
							<Form.Control value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Insert First Name Here" required />
						</Form.Group>
						{/*user's last name*/}
						<Form.Group>
							<Form.Label>Enter Last Name:</Form.Label>
							<Form.Control value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Insert Last Name Here" required />
							{/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else!
                    </Form.Text> */}
						</Form.Group>
						{/*user's mobile number*/}
						<Form.Group>
							<Form.Label>Enter Mobile Number:</Form.Label>
							<Form.Control value={mobileNo} onChange={e => setMobileNo(e.target.value)} type="number" placeholder="Insert Mobile Number Here" required />
						</Form.Group>
						{/*user's email*/}

						<Form.Group>
							<Form.Label>User Email Address</Form.Label>
							<Form.Control onChange={action => setEmail(action.target.value)} value={email} type="email" placeholder="Insert Email Address Here" required />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else!
							</Form.Text>
						</Form.Group>


						{/*password*/}
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={gawa => setPassword1(gawa.target.value)} value={password1} type="password" placeholder="Insert Password Here" required />
						</Form.Group>
						{/*confirm password*/}
						<Form.Group>
							<Form.Label>Confirm Password </Form.Label>
							<Form.Control onChange={gawa => setPassword2(gawa.target.value)} value={password2} type="password" placeholder="Confirm Password Here" required />
						</Form.Group>


						{btnActive ?
							<Button type="submit" className="mt-3 mb-3 w-100" variant="dark">Register!</Button>
							:
							<Button type="submit" className="mt-3 mb-3 w-100" variant="dark" disabled>Register!</Button>
						}


					</Form>
				</Col>
			</Row>
		</Container>
	)
}
