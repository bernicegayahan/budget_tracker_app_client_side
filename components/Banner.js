//lets practice creating components using JSX syntax
//the purpose of this componet is to be the hero section of our page.
import { Jumbotron, Container } from 'react-bootstrap'//i'll be using a named export method to acquire my components from react-bootstrap
//lets acquire the bootstrap grid system
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';


//i will creata a function that will return the structure of my component
//for this example lets create this function in a es6 format
const Banner = ({ data }) => {
    //lets declare a return scope to determine the anatomy of the element.
    //lets destructure the data prop into its properties
    const { title, content, destination, label } = data
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1> {title} </h1>
                        <p> {content} </p>
                        <Link to={destination}> {label} </Link>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;
