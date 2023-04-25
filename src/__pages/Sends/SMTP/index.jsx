import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import Tabs from './Tabs';
import DataTable from './DataTable'
import Add from './Add';

const SMTP = () => {

  return (
    <Fragment>
      <Row className='pt-5'>
        <Card>
          <CardHeader>
            <Tabs />
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

export default SMTP;
