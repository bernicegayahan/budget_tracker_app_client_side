import { useState, useContext } from 'react'
import UserContext from '../UserContext';
import { Navbar, Container, Nav } from 'react-bootstrap';
//lets acquire the routing components of ,next JS
import Link from 'next/link'

export default function NavBar() {
	const [isExpanded, setIsExpanded] = useState(false)

	//lets destructure the context object and acquire the values/components you want to consume.
	const { user } = useContext(UserContext)

	//lets create a ternary structure for us to be able to determine what element can be seen if user is mounted.

	return (
		// lets render the navbar component as routing components
		<Navbar expanded={isExpanded} className="justify-content-between" expand="lg" variant="dark" bg="dark" fixed="top">
			<Container>
				<Link href="/">
					<a className="navbar-brand">Budget Tracker App</a>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
					<Nav className="mr-auto">

						<Link href="/register">
							<a className="nav-link">Register</a>
						</Link>

						<Link href="/login">
							<a className="nav-link">Log In</a>
						</Link>

						<Link href="/user/categories">
							<a className="nav-link">Categories</a>
						</Link>

						{/*   <Link href="/transactions">
                            <a className="nav-link">Transactions</a>
                        </Link> */}


						<Link href="/user/categories/new">
							<a className="nav-link">New Category</a>
						</Link>

						<Link href="/user/records">
							<a className="nav-link">Records</a>
						</Link>
						<Link href="/user/records/new">
							<a className="nav-link">Create Records</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
