import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { Btn } from '../../../AbstractElements';

function AddBalance() {
  const [formData, setFormData] = useState({
    payment_method: 'perfect_money',
    amount: null
  });

  const { payment_method, amount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(email, password));
  };
  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Select Payment Method</Label>
          <Input 
            className='form-control' 
            name='payment_method'
            type='select' 
            defaultValue={payment_method} 
            onChange={onChange}
            >
            <option value={'perfect_money'}>PERFECT MONEY</option>
            <option value={'bitcoin'}>BITCOIN</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Amount</Label>
          <Input 
            className='form-control' 
            type='number' 
            name='amount'
            value={amount}
            placeholder='$25' 
            required
            min={5} 
            max={5000} 
            onChange={onChange}
            />
        </FormGroup>
        <FormGroup>
          <Btn attrBtn={{ color: "primary" }}>
            <i className="fa fa-plus"></i>
            Add Balance
          </Btn>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default AddBalance
