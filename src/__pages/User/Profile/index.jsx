import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import { AccountInformation, AccountSettingTxt, EditInformationTxt } from '../../../Constant'
import HeaderCard from '../../../Components/Common/Component/HeaderCard'
import Account from './Account'
import EditAccount from './EditAccount'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account_information');

  return (
    <Fragment>
      <Row className='pt-5'>
        <Col lg="12" className='xl-100 box-col-12' xl="12">
          <Card>
            <HeaderCard title={AccountSettingTxt} />
              <CardBody>
                <div className="tabbed-card">
                  <Nav className='pull-right  nav-pills nav-primary'>
                    <NavItem style={{cursor: 'pointer'}}>
                        <NavLink className={activeTab === 'account_information' ? 'active' : ''} onClick={() => setActiveTab('account_information')}>
                            <i className='fa fa-user'></i>{AccountInformation}
                        </NavLink>
                    </NavItem>
                    <NavItem style={{cursor: 'pointer'}}>
                        <NavLink className={activeTab === 'edit_information' ? 'active' : ''} onClick={() => setActiveTab('edit_information')}>
                            <i className='fa fa-edit'></i>{EditInformationTxt}
                        </NavLink>
                    </NavItem>
                  </Nav>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="account_information">
                          <Account />
                      </TabPane>
                      <TabPane tabId="edit_information">
                          <EditAccount />
                      </TabPane>
                    </TabContent>
                </div>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Profile
