import { Card, Button, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import Link from 'next/link'
import View from '../../../components/View'

export default () => {
    return (
        <View title="Records">
            <h3>Records</h3>
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <Link href="/user/records/new">
                        <a className="btn btn-success">Add</a>
                    </Link>
                </InputGroup.Prepend>
                <FormControl placeholder="Search Record" />
                <Form.Control as="select">
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Form.Control>
            </InputGroup>
            <RecordsView />
        </View>
    )
}

const RecordsView = () => {
    return (
        <>
            return (
            <Card className="mb-3">
                <Card.Body>
                    <Row>
                        <Col xs={6}>
                            <h5></h5>
                            <h6>
                                <span></span>
                            </h6>
                            <p></p>
                        </Col>
                        <Col xs={6} className="text-right">
                            <h6></h6>
                            <span></span>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            )
        </>
    )
}

