import { Table, Button } from 'react-bootstrap'
import Link from 'next/link'
import View from '../../../components/View'

export default () => {
  
    return (
        <View title="Categories">
            <h3>Categories</h3>
            <Link href="/user/categories/new">
                <a className="btn btn-success mt-1 mb-3">Add</a>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </Table>
        </View>
    )
}
