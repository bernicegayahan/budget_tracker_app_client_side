import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import Router from 'next/router'
import View from '../../../components/View'
import Swal from 'sweetalert2'

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
  
    return (
        <Form>
            <Form.Group controlId="typeName">
                <Form.Label>Category Type:</Form.Label>
                <Form.Control as="select" required>
                    <option value selected disabled>Select Category</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="categoryName">
                <Form.Label>Category Name:</Form.Label>
                <Form.Control as="select" required>
                    <option value selected disabled>Select Category Name</option>
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