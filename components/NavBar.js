import { Navbar, Nav } from 'react-bootstrap';
//for me to be able to create routes for each item inside the navbar i'm going to use the Link from next
import Link from 'next/link'

//i want to be able to create routes for my navbar elements

//lets create a function this time using an es6 format

export default () => {
	return(
	<Navbar bg="dark" expand="lg" fixed="top" variant="dark">
	  <Link href="/register">
	    <a className="nav-link">Register</a>
	  </Link>
	</Navbar>
	)
}