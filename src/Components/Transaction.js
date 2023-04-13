import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import pic1 from '../Assets/images/transaction.webp' 
const Transaction = () => {
  return (
    <div className='transaction'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="transaction_left">
                        <AccessAlarmIcon className='alarm_icon'/>
                        <h1>The Fastest <br/> Transaction Speed</h1>
                        <p>We value your time and patience greatly, and therefore, we take care of every transaction with maximum attention and as fast as possible. Try it for yourself by buying an account with all the benefits of a regular user and discover top features.</p>
                        <button type='button' className='find'>
                            Find out More
                        </button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="alarm">
                            <img src={pic1}/>
                        </div>
                    </div>
                </div>


               
            </div>

    </div>
  )
}

export default Transaction