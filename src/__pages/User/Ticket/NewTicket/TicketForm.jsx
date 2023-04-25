import React, { Fragment } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Message, SubmitTicket, Title } from '../../../../Constant'
import { Btn } from '../../../../AbstractElements'

const TicketForm = () => {
  return(
    <Fragment>
      <Form>
        <Row>
          <Col lg='12'>
            <FormGroup>
              <Label>{Title}</Label>
              <Input className="form-control" type='text' placeholder={Title} />
            </FormGroup>
          </Col>
          <Col lg='12'>
            <FormGroup>
              <Label>{Message}</Label>
              <Input className="form-control" type='textarea' placeholder={Message} />
            </FormGroup>
          </Col>
          <Col lg='12'>
            <FormGroup>
              <Btn><i className='fa fa-paper-plane'></i>{SubmitTicket}</Btn>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default TicketForm
