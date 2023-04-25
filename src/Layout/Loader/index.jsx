import React, { Fragment } from 'react';

const Loader = () => {
  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShow(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [show]);

  return (
    <Fragment>
      <div className={`loader-wrapper`}>
        <div className='loader-index'>
          <span></span>
        </div>
        <svg>
          <defs></defs>
          <filter id='goo'>
            <fegaussianblur in='SourceGraphic' stdDeviation='11' result='blur'></fegaussianblur>
            <fecolormatrix in='blur' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9' result='goo'></fecolormatrix>
          </filter>
        </svg>
      </div>
    </Fragment>
  );
};

export default Loader;
