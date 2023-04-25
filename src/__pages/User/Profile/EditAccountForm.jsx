import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { ConfirmPassword, CurrentPassword, EmailAddress, NewPassword, UpdateInformation } from '../../../Constant'
import { Btn } from '../../../AbstractElements';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { change_password } from '../../../redux/actions/user';

const EditAccountForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    currentPassword: '',
    confirmPassword: ''
  });

  const { email, newPassword, confirmPassword, currentPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(newPassword !== confirmPassword){
      toast.error("New password doesn't match!");
      return;
    }
    const data = {
      currentPassword,
      newPassword
    };

    dispatch(change_password(data));
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-key"></i>{CurrentPassword}</Label>
          <Input 
            className='form-control' 
            type='password' 
            name='currentPassword'
            onChange={onChange} 
            value={currentPassword} 
            required
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-key"></i>{NewPassword}</Label>
          <Input 
            className='form-control' 
            type='password' 
            name='newPassword'
            onChange={onChange} 
            value={newPassword} 
            required
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'><i className="fa fa-key"></i>{ConfirmPassword}</Label>
          <Input 
            className='form-control' 
            type='password' 
            name='confirmPassword'
            onChange={onChange} 
            value={confirmPassword} 
            required
            />
        </FormGroup>
        {/* <FormGroup>
          <Label className='col-form-label'><i className="fa fa-envelope"></i>{EmailAddress}</Label>
          <Input 
            className='form-control' 
            type='email' 
            name='email'
            onChange={onChange} 
            value={email} 
            required
            />
        </FormGroup> */}
        <FormGroup>
          <Btn attrBtn={{ color:'primary' }}>{UpdateInformation}</Btn>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default EditAccountForm
