import { InputGroup, Form, Col } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import View from '../../../components/View'; 


export default () => {
	return(
		<View title="Category Breakdown">
		   <h3> Category Breakdown</h3>
		        <Form.Row>
                <Form.Group as={ Col } xs="6">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group as={ Col } xs="6">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </Form.Row>
            <hr/>
            
            <Pie height="100"/>
		</View>
	)
}