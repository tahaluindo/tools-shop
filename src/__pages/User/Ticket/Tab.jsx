import React, { useState, Fragment } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { MyTicketTxt, NewTicketTxt } from "../../../Constant"
import MyTicket from './MyTicket'
import NewTicket from "./NewTicket";

const Tabs = () => {
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('my_ticket');

  return (
    <Fragment>
      <Nav className='border-tab nav-primary' tabs>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'my_ticket' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('my_ticket')}>
            <i className='fa fa-filter'></i>
            {MyTicketTxt}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{cursor:"pointer"}} className={PrimarycolorLineTab === 'new_ticket' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('new_ticket')}>
            <i className='fa fa-edit'></i>
            {NewTicketTxt}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={PrimarycolorLineTab}>
        <TabPane className='fade show' tabId='my_ticket'>
          <MyTicket />
        </TabPane>
        <TabPane tabId='new_ticket'>
          <NewTicket />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default Tabs
