import React, { Fragment, useEffect, useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../AbstractElements';

import { 
  EmailAddress, 
  ForgotPassword, 
  LOGIN,
  Password,
} from '../../Constant';

import { login } from '../../redux/actions/auth';
import { ToastContainer } from 'react-toastify';

const LoginForm = () => {

  const dispatch = useDispatch();

  const [togglePassword, setTogglePassword] = useState(false);
  // const [isVerified, setIsVerified] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleVerify = (response) => {
  //   setIsVerified(true);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (isVerified) {
      dispatch(login(email, password));
    // }
  };

  return (
    <Fragment>
      <ToastContainer />
      <Form className='theme-form' onSubmit={onSubmit}>
        {/* <ReCAPTCHA
          sitekey="s6LdcuKUlAAAAACvQAdzBKeOuHTPbupE_iTFwnlxA"
          onChange={handleVerify}
        /> */}
        <H4 attrH4={{ className: 'text-center' }}>
          <i className="fa fa-shopping-cart"></i>&nbsp;
          bpltoolshop - Login
        </H4>
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
              onChange={onChange} 
              value={password} 
              required
              />
            <div className='show-hide text-black' onClick={() => setTogglePassword(!togglePassword)}>
              {togglePassword ? <i className='fa fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
            </div>
          </div>
        </FormGroup>
        <FormGroup className='position-relative'>
          <div className='checkbox'>
            {/* <Input id='checkbox1' type='checkbox' />
            <Label className='text-muted' for='checkbox1'>
            {RememberPassword}
            </Label> */}
          </div>
          <Link to='/forget_password'>
            {ForgotPassword}
          </Link>
        </FormGroup>
        <FormGroup>
          <Btn attrBtn={{ 
            color: 'primary', 
            className: 'd-block w-100 mt-2'
          }}>{LOGIN}</Btn>
        </FormGroup>
        <P attrPara={{ className: 'text-center mb-0 mt-4' }}>
          Don't have account?
          <Link className='ms-2' to='/register'>
            Create Account
          </Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
