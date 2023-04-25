import React, { Fragment } from 'react'
import { Spinner } from '../AbstractElements'

function Loader() {

  const loaderStyle = {
    fontSize: "100px",
    borderRadius: '5px'
  }

  return (
    <Fragment>
      <div>
        <div className="loader-box custom-loader-box">
          <Spinner attrSpinner={{ className: "loader-15", style: loaderStyle }} />
        </div>
      </div>
    </Fragment>
  )
}

export default Loader
