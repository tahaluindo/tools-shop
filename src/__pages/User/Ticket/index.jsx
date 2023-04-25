import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Row } from "reactstrap"
import { TicketTxt } from "../../../Constant"
import Tabs from "./Tab";
import { H4 } from "../../../AbstractElements";

const Ticket = () => {
  return (
    <Fragment>
      <Row className='pt-5'>
        <Card>
          <CardHeader><H4><i className="fa fa-ticket"></i>{TicketTxt}</H4></CardHeader>
          <CardBody>
            <Tabs />
          </CardBody>
        </Card>
      </Row>
    </Fragment>
  )
}

export default Ticket
