import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap'
import { P } from '../../AbstractElements'

const Greeting = () => {

  const history = useNavigate();
  return (
    <Card>
      <CardBody>
        <P>Hello <span className='bold text-bg-dark'>JamesGaylor</span></P>
        <P>You have any <span className='bold'>Question</span>,Problem,<span className='bold'>Suggestion</span> or <span className='bold'>Request</span> Please feel free to  Open Ticket</P>
        <P>You want to 
          <span className='bold'>Report</span> an order , just go to 
          <abbr 
            title="Account - > My Orders or Click here" 
            onClick={()=>{history('/user/order')}} 
            className='bold'
            >My Orders <span className="#"></span>
          </abbr>
          <i className="fa fa-shopping-cart"></i>
          then click on
          <span className='text-bg-dark'>Report #[Order ID]</span> button
        </P>
        <P>You want to 
          <span>Deposit into your Account</span>, CLick on 
          <abbr 
            title="Account - > My Orders or Click here" 
            onClick={()=>{history('/add-balance')}} 
            className='bold'
            >Add Balance <span className="#"></span>
          </abbr>
        </P>
        <P>Video About <span>How to use Market</span>, CLick on 
          <abbr 
            title="Account - > My Orders or Click here" 
            // onClick={()=>{history('/add-balance')}} 
            className='bold'
            >Video <span className="#"></span>
          </abbr>
        </P>
        <P>Join <span className='bold'>Telegram</span>, CLick on 
          <abbr 
            title="Account - > My Orders or Click here" 
            // onClick={()=>{history('/add-balance')}} 
            className='bold'
            >Join Now <span className="#"></span>
          </abbr>
        </P>
        <P>
          <abbr 
            title="Account - > My Orders or Click here" 
            // onClick={()=>{history('/add-balance')}} 
            className='bold'
            >Terms of Service <span className="#"></span>
          </abbr>
        </P>
      </CardBody>
    </Card>
  )
}

export default Greeting
