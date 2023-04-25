import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Greeting from './Greeting';
import News from './News';
import Donut from './Donut';

const Dashboard = () => {

  return (
    <Fragment>
      <Container fluid={true} className='jkanban-container p-2'>
        <Row>
          <Col xs='12' md='12' lg='6'>
            <Greeting />
          </Col>
          <Col xs='12' md='12' lg='6'>
            <Donut />
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='12' lg='6'>
            <News />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard
