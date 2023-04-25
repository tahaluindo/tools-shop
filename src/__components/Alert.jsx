import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Alert = () => {

  const { alerts } = useSelector(state => state.alerts);

  return (
    <div className="alert-wrapper">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  )
};

Alert.propTypes = {
  // alerts: PropTypes.array.isRequired
};


export default Alert;
