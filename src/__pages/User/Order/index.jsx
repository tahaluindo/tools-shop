import React from 'react'
import { Fragment } from 'react'
import DataTable from './DataTable'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import { H4 } from '../../../AbstractElements'

const Order = () => {
  return (
    <Fragment>
      <Row className='pt-5'>
        <Card>
          <CardHeader>
            <H4><i className='fa fa-shopping-cart'></i>My Order</H4>
          </CardHeader>
          <CardBody>
            <DataTable />
          </CardBody>
        </Card>
      </Row>
    </Fragment>
  )
}

export default Order
