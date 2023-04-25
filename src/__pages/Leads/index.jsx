import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import Filter from './Filter'
import DataTable from './DataTable'
import Add from './Add';

const Leads = () => {

  return (
    <Fragment>
      <Row className='pt-5'>
        <Card>
          <CardHeader>
            <Filter />
          </CardHeader>
          <CardBody>
            <DataTable />
          </CardBody>
        </Card>
      </Row>
      <Add />
    </Fragment>
  )
}

export default Leads;
