import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import DataTable from './DataTable';
import Filter from './Filter';
import Add from './Add';

const RDPS = () => {
  return(
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

export default RDPS
