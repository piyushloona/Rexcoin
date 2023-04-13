import React from 'react'
import pic from '../Assets/images/affordable_pic.webp';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GroupIcon from '@mui/icons-material/Group';
import pic1 from '../Assets/images/chart.png'
const Affordable = () => {
  return (
    <div className='affordable'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="left">
                            <img src={pic}/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="right">
                                <DesktopAccessDisabledIcon className='desktop'/>
                                <h1>Far More Affordable <br/> & Highly Reduandant  </h1>
                                <p>The most effective way to monitor the cryptocurrency market is
                                    <br/>
                                    to follow us on social media and subscribe to our chart news!
                                </p>
                                <div className="market">
                                    <div className="cap">
                                        <div className="pp">
                                            <CurrencyExchangeIcon className='dollar'/>
                                            <div className="logo">
                                                <h4>
                                                    22.3M
                                                </h4>
                                                <p>MARKET CAP</p>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="user">
                                    <div className="pp">
                                            <GroupIcon className='dollar'/>
                                            <div className="logo">
                                                <h4>
                                                    22.3M
                                                </h4>
                                                <p>USER ACCOUNTS</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>

                <div className="price">
                    <h2>RexCoin Price</h2>
                    <img src={pic1} className='chart'/>
                </div>
            </div>

    </div>
  )
}

export default Affordable