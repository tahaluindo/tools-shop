import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { /*Image, */LogIn, PlusCircle, Settings, ShoppingCart } from 'react-feather';

import { LI, UL } from '../../../AbstractElements';
import { LogOut } from '../../../Constant';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/auth';
// import man from '../../../assets/images/dashboard/profile.png';

const UserHeader = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('Emay Walter');
  // const [profile, setProfile] = useState('');
  // const authenticated = JSON.parse(localStorage.getItem('authenticated'));
  // const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));

  useEffect(() => {
    // setProfile(localStorage.getItem('profileURL') || man);
    setName(localStorage.getItem('Name') ? localStorage.getItem('Name') : name);
  }, []);

  const Logout = () => {
    dispatch(logout());
    window.location.href = '/login'
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  const { user, isAuthenticated } = useSelector(state => state.auth);

  return (
    <li className='profile-nav onhover-dropdown pe-0 py-0'>
      <div className='media profile-media'>
        <span>{user ? user.name : isAuthenticated}</span>&nbsp;
        {/* <Image
          attrImage={{
            className: 'b-r-10 m-0',
            src: `${isAuthenticated ? man : profile}`,
            alt: '',
          }}
        /> */}
        <div className='media-body'>
          <i className='middle fa fa-angle-down'></i>
          {/* <P attrPara={{ className: 'mb-0 font-roboto' }}>
            {Admin} <i className='middle fa fa-angle-down'></i>
          </P> */}
        </div>
      </div>
      <UL attrUL={{ className: 'simple-list profile-dropdown onhover-show-div' }}>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`/user-edit-profile`),
          }}>
          <Settings />
          <span>Settings</span>
        </LI>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`/add-balance`),
          }}>
          <PlusCircle />
          <span>Add Balance</span>
        </LI>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`user/order`),
          }}>
          <ShoppingCart />
          <span>My Orders</span>
        </LI>
        <LI attrLI={{ onClick: Logout }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
    </li>
  );
};

export default UserHeader;
