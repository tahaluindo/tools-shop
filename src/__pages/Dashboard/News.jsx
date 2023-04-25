import React from 'react'
import { Card, CardBody, } from 'reactstrap'
import HeaderCard from '../../Components/Common/Component/HeaderCard'
import { UL, LI, H6, P } from '../../AbstractElements';

const News = () => {
  return (
    <Card>
      <HeaderCard title="News" />
      <CardBody>
        <UL attrUL={{ className: 'bgcolor simple-list' }}>
          <LI attrLI={{ className: 'p-2 border-0 list-group-item-action flex-column align-items-start' }}>
            <div className='d-flex w-100 justify-content-between'>
              <H6 attrH6={{ className: 'mb-1' }}>Deposit Support USDT(TRC20) https://t.me/nzadmn</H6>
            </div>
            <P attrPara={{ className: 'mb-1' }}>Mon, Jan 20, 2020 8:22 AM</P>
          </LI>
          <LI attrLI={{ className: 'p-2 border-0 list-group-item-action flex-column align-items-start' }}>
            <div className='d-flex w-100 justify-content-between'>
              <H6 attrH6={{ className: 'mb-1' }}>Deposit Support USDT(TRC20) https://t.me/nzadmn</H6>
            </div>
            <P attrPara={{ className: 'mb-1' }}>Mon, Jan 20, 2020 8:22 AM</P>
          </LI>
          <LI attrLI={{ className: 'p-2 border-0 list-group-item-action flex-column align-items-start' }}>
            <div className='d-flex w-100 justify-content-between'>
              <H6 attrH6={{ className: 'mb-1' }}>Deposit Support USDT(TRC20) https://t.me/nzadmn</H6>
            </div>
            <P attrPara={{ className: 'mb-1' }}>Mon, Jan 20, 2020 8:22 AM</P>
          </LI>
          <LI attrLI={{ className: 'p-2 border-0 list-group-item-action flex-column align-items-start' }}>
            <div className='d-flex w-100 justify-content-between'>
              <H6 attrH6={{ className: 'mb-1' }}>Deposit Support USDT(TRC20) https://t.me/nzadmn</H6>
            </div>
            <P attrPara={{ className: 'mb-1' }}>Mon, Jan 20, 2020 8:22 AM</P>
          </LI>
        </UL>
      </CardBody>
    </Card>
  )
}

export default News
