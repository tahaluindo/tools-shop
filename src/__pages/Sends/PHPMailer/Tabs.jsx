import React, { useState } from 'react'
import { Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { EditEmailTxt, FilterTxt } from '../../../Constant';
import Filter from './Filter';
import EditEmail from './EditEmail';

const Tabs = () => {
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('filter');

  return (
    <Col sm='12' xl='12' className='xl-100'>
      <Nav className='border-tab nav-primary' tabs>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'filter' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('filter')}>
            &nbsp;<i className='fa fa-filter'></i>
            {FilterTxt}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'editEmail' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('editEmail')}>
            <i className='fa fa-edit'></i>
            {EditEmailTxt}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={PrimarycolorLineTab}>
        <TabPane className='fade show' tabId='filter'>
          <Filter />
        </TabPane>
        <TabPane tabId='editEmail'>
          <EditEmail />
        </TabPane>
      </TabContent>
    </Col>
  )
}

export default Tabs;
