import React, { Fragment } from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import UserTable from './UserTable';
// import Filter from './Filter';

const UserManagement = () => {
  return(
    <Fragment>
      <Row className='pt-5'>
        <Card>
          {/* <CardHeader>
            <Filter />
          </CardHeader> */}
          <CardBody>
            <UserTable />
          </CardBody>
        </Card>
      </Row>
    </Fragment>
  )
}

export default UserManagement
