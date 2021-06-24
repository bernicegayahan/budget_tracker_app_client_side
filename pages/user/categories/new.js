import { useState } from 'react'; 
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import Router from 'next/router'
import Swal from 'sweetalert2'
import View from '../../../components/View'
import AppHelper from '../../../app-helper';

export default () => {
    return (
        <View title="New Category">
            <Row className="justify-content-center">
                <Col xs md="6">
                    <h3>New Category</h3>
                    <Card>
                        <Card.Header>Category Information</Card.Header>
                        <Card.Body>
                            <NewCategoryForm/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </View>
    )
}

const NewCategoryForm = () => {

    const [categoryName, setCategoryName] = useState("")
    const [typeName, setTypeName] = useState(undefined)

    //create a function that will allow you to create a new category in the database. 
    const createCategory = (e) => {
        e.preventDefault() //to avoid page redirections

        //lets create an object that will describe the request options/payload of the request we want to send. 
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ AppHelper.getAccessToken() }`
            },
            body: JSON.stringify({
                name: categoryName,
                type: typeName
            }) 
        }

        //send the request to the backend project for processing
        fetch(`http://localhost:4000/api/users/add-category`, payload).then(AppHelper.toJSON).then(isSuccessful => {
            //i will describe the procedure upon recieving the response.
            if (isSuccessful === true) {
               Swal.fire('Category Added','The new Category has been successfully Created', 'success')
               Router.push('/user/categories')
            } else {
              Swal.fire('Operation Failed','Something went wrong', 'error')
            }
        })
    }

    return (
        <Form onSubmit={ (e) => createCategory(e) }>
            <Form.Group controlId="categoryName">
                <Form.Label>Category Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" value={categoryName} onChange={ (e) => setCategoryName(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="typeName">
                <Form.Label>Category Type:</Form.Label>
                <Form.Control as="select" value={typeName} onChange={ (e) => setTypeName(e.target.value)} required>
                    <option value selected disabled>Select Category</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}
