import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../AbstractElements';

import { 
  ConfirmPassword,
  EmailAddress, 
  Login, 
  Password, 
  REGISTER, 
  Username, 
} from '../../Constant';

import { register } from '../../redux/actions/auth';

import { ToastContainer, toast } from 'react-toastify';

const RegisterForm = () => {

  const dispatch = useDispatch();
  
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const isMatched = password === confirmPassword;
    if (isMatched) {
      dispatch(register({name, email, password},"user"));
    } else {
      toast.error("Password does not match!");
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <Form className='theme-form' onSubmit={onSubmit}>
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Register
        </H4>
        <FormGroup>
          <Label className='col-form-label'>{Username}</Label>
          <Input 
            className='form-control' 
            type='text' 
            name='name'
            required
            onChange={onChange} 
            value={name} 
            />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label'>{EmailAddress}</Label>
          <Input 
            className='form-control' 
            type='email' 
            name='email'
            onChange={onChange}
            value={email} 
            required
            />
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{Password}</Label>
          <div className='position-relative'>
            <Input 
              className='form-control' 
              type={togglePassword ? 'text' : 'password'} 
              name='password'
              value={password}
              onChange={onChange}
              required
              minLength={6}
              />
            <div className='show-hide text-black' onClick={() => setTogglePassword(!togglePassword)}>
              {togglePassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{ConfirmPassword}</Label>
          <div className='position-relative'>
            <Input 
              className='form-control' 
              type={toggleConfirmPassword ? 'text' : 'password'} 
              name='confirmPassword'
              onChange={onChange}
              value={confirmPassword} 
              required
              />
            <div className='show-hide text-black' onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}>
              {toggleConfirmPassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-2'
          }}>{REGISTER}</Btn>
        </div>
        <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
          Already have account:&nbsp;
          <Link className='ms-2' to='/login'>
            {Login}
          </Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default RegisterForm;
