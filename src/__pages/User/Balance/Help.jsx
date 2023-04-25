import React, { Fragment } from 'react'
import { LI, UL } from '../../../AbstractElements'
import { Card, CardBody } from 'reactstrap'

function Help() {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <UL>
            <LI>After payment funds will be added automatically to your accounut <b>INSTANTLY</b></LI>
            <LI><b>PERFECT MONEY</b>/ <b>BITCOIN</b>/ is a secure way to fund your account</LI>
            <LI>Min/Max is <b>5 USD</b> / <b>5000 USD</b></LI>
            <LI><b>Buyer Protection</b>- any time you like , you can ask for <b>BALANCE REFUND</b>!</LI>
          </UL>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Help
