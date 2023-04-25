import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H2 } from '../../../AbstractElements'
import Help from './Help'
import AddBalance from './AddBalance'

const Balance = () => {
  return (
    <Fragment>
      <Row className='pt-5'>
        <Col>
          <Card>
            <CardHeader><H2>Add Balance</H2></CardHeader>
            <CardBody>
              <Row>
                <Col xl='6' lg='6' sm='6' xs='6'>
                  <AddBalance />
                </Col>
                <Col xl='6' lg='6' sm='6' xs='6'>
                  <Help />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Balance
