import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import TicketForm from './TicketForm'

const NewTicket = () => {
  return(
    <Fragment>
      <Row>
        <Col xl='6' lg='6' md='6' sm='12'>
          <TicketForm />
        </Col>
        <Col xl='6' lg='6' md='6' sm='12'></Col>
      </Row>
    </Fragment>
  )
}

export default NewTicket
