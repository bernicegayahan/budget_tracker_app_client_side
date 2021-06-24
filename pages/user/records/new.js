import { useState } from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import Router from 'next/router'
import View from '../../../components/View'
import Swal from 'sweetalert2'
import AppHelper from '../../../app-helper';

export default () => {
    return (
        <View title="New Record">
            <Row className="justify-content-center">
                <Col xs md="6">
                    <h3>New Record</h3>
                    <Card>
                        <Card.Header>Record Information</Card.Header>
                        <Card.Body>
                            <NewRecordForm/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </View>
    )
}

const NewRecordForm = () => {
    const [ categoryName, setCategoryName ] = useState(undefined);
    const [ typeName, setTypeName] = useState(undefined);
    const [ amount, setAmount] = useState(0);
    const [ description, setDescription] = useState("");
    const [ categories, setCategories] = useState([]);

    
    const getCategories = (value) => {
       setTypeName(value)

       const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ AppHelper.getAccessToken()}`
          },
          body: JSON.stringify({ typeName: value })
       }

       //send a request using fetch
       fetch(`http://localhost:4000/api/users/get-categories`, payload).then(AppHelper.toJSON).then(data => {
            setCategories(data)
       })
    }
    return (
        <Form>
            <Form.Group controlId="typeName">
                <Form.Label>Category Type:</Form.Label>
                <Form.Control as="select" value={ typeName } onChange={ (e) => getCategories(e.target.value) }required>

                    <option value selected disabled>Select Category</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="categoryName">
                <Form.Label>Category Name:</Form.Label>
                <Form.Control as="select" value={ categoryName } onChange={ (e) => setCategoryName(e.target.value)} required>
                    <option value selected disabled>Select Category Name</option>
                    {
                      categories.map((category) => {
                         return (
                            <option key={ category.id} value={ category.name}>
                              { category.name }
                            </option>
                         )
                      })
                    }
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="amount">
                <Form.Label>Amount:</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" required/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" placeholder="Enter description" required/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}