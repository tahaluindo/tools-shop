import React, { Fragment } from 'react';
import DataTable from './DataTable';
import Filter from './Filter';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import Add from './Add';

const RSWV = () => {
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

export default RSWV
