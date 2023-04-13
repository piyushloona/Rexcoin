import React from 'react'
import pic from '../Assets/images/team_henry.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Team = () => {
  return (
    <div className='team'>
        <div className="container">
            <h1>Team & Contributors</h1>
            <p>A team of financial experts is at your service! Meet our staff
                <br/>
                and become a member of our crypto community
            </p>

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="walker">
                        <img src={pic}/>
                        <div className="icons">
                            <FacebookIcon className='facebook'/>
                            <TwitterIcon className='twitter'/>
                        </div>

                       
                    </div>
                    <div className="founder">
                    <h4>Henry Walker</h4>
                        <p>CEO,Founder</p>
                        </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="walker">
                        <img src={pic}/>
                        <div className="icons">
                            <FacebookIcon className='facebook'/>
                            <TwitterIcon className='twitter'/>
                        </div>

                       
                    </div>
                    <div className="founder">
                    <h4>Henry Walker</h4>
                        <p>CEO,Founder</p>
                        </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                    <div className="walker">
                        <img src={pic}/>
                        <div className="icons">
                            <FacebookIcon className='facebook'/>
                            <TwitterIcon className='twitter'/>
                        </div>

                       
                    </div>
                    <div className="founder">
                    <h4>Henry Walker</h4>
                        <p>CEO,Founder</p>
                        </div>
                </div>  

            </div>

            <button type='button' className='view'>View All Team</button>
        </div>

    </div>
  
    )
}

export default Team