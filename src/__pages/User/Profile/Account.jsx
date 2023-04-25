import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { P } from '../../../AbstractElements'

const moment = require('moment');

const Account = () => {

  const { user } = useSelector(state => state.auth);

  return(
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col xl='6' lg='6' md='6' sm='12' xs='12'>
          <Card>
            <CardBody>
              <P>Your name is: <b>{user && user.name}</b></P>
              <P>Registered on: <b>{user && moment(user.date).format("yyyy.MM.DD hh:mm:ss A")}</b></P>
              <P>Current balance: <b>{user && user.balance ? user.balance : 0}</b></P>
              <P>Your Email is: <b>{user && user.email}</b></P>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Account
