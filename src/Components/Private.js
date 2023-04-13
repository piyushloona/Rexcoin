import React from 'react'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import pic from '../Assets/images/private_pic.webp';
const Private = () => {
  return (
    <div className='private'>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="left">
                    <CreditScoreIcon className='credit'/>
                    <h2>Private Online Payments <br/>Enabled by the RexCoin</h2>
                    <p>All the information that you receive here is at your disposal 100% with no limits or restrictions; your trust and projects are top priorities for us, therefore we adjust to each client`s needs easily with its potential to be enlarged to fit in that growth.</p>
                    <button type='button' className='technical'>
                        Technical White Paper
                    </button>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="right">
                        <img src={pic}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Private