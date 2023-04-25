import React, { Fragment, useState } from 'react'
import { Alerts, Btn, P } from '../../../AbstractElements'
import { addBtnStyle } from '../../../assets/additionalStyle'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Cancel, INPUTS, LOGS, Submit } from '../../../Constant';
import Scrollbars from 'react-custom-scrollbars-2';

function Add() {
  const [ modal, setModal ] = useState(false);
  const toggle = () => setModal(!modal);
  const [ active, setActive ] = useState('inputs');

  const types = [
    "AMAZON",
    "RACKSPACE",
    "CPANEL",
    "WEBMAIL",
    "SENDGRID",
    "SMTP"
  ]
  return (
    <Fragment>
      <Btn attrBtn={{className: "shadow-sm shadow-showcase", style : addBtnStyle, onClick: toggle}}><i className="fa fa-plus"></i></Btn>
        <Modal isOpen={modal} toggle={toggle} size='lg' centered>
          <ModalHeader toggle={toggle}>
            Add Smtps
          </ModalHeader>
          <ModalBody>
            <Form>
              <Nav className='border-tab nav-primary' tabs>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}} className={active === 'inputs' ? 'active' : ''} onClick={() => setActive('inputs')}>
                    {INPUTS}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}} className={active === 'log' ? 'active' : ''} onClick={() => setActive('log')}>
                    {LOGS}
                  </NavLink>
                </NavItem>
              </Nav>
              <Scrollbars className='click-drag-handler scroll-demo p-0 border-0' style={{width: '100%',height:300}}>
                <TabContent activeTab={active}>
                  <TabPane className='fade show' tabId='inputs'>
                    <Alerts attrAlert={{ color: 'primary dark' }}>
                      {'Each Smtps in one line, Delimiter |.'}<br />
                      {'SMTP Format: Host|Port|Username|Password|Price'}
                    </Alerts>
                    <FormGroup>
                      <Label>Smtps</Label>
                      <Input type='textarea' placeholder='Ex: Host|Port|Username|Password|Price' rows="5" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Type</Label>
                      <Input type='select'>
                        {types.map((type, key) => (
                          <option value={type} key={key}>{type}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </TabPane>
                  <TabPane tabId='log'>
                    <P>
                      {
                        'Trendy t-shirt polo polished finishing touches cardigans tunics metallic jumper. Slimming removable contrast straps black waist band ultra-feminine floral print versatility of wear sun-soaked. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted.'
                      }
                    </P>
                  </TabPane>
                </TabContent>
              </Scrollbars>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Btn attrBtn={{ color: 'secondary', onClick: toggle }} >{Cancel}</Btn>
            <Btn attrBtn={{ color: 'primary', onClick: toggle }}>{Submit}</Btn>
          </ModalFooter>
        </Modal>
    </Fragment>
  )
}

export default Add
