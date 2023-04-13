import React from 'react'
import logo from '../Assets/images/header_logo.webp';
import {Link}  from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="logo">
              <img src={logo}/>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="get">
              <h2>Get Rexcoin</h2>
              <ul>
                  <li><Link to="/" >Download Wallet</Link></li>
                  <li><Link to="/" >Buy Rexcoin</Link></li>
                  <li><Link to="/" >Shop with Rexcoin</Link></li>
                  <li><Link to="/" >RexCoin Debit Card</Link></li>
                  
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="get">
              <h2>Network</h2>
              <ul>
                  <li><Link to="/" >Our Mission</Link></li>
                  <li><Link to="/" >Our Benefits</Link></li>
                  <li><Link to="/" >Our Team</Link></li>
                  <li><Link to="/" >Our Services</Link></li>
                  
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="get">
              <h2>Resources</h2>
              <ul>
                  <li><Link to="/" >Discussion</Link></li>
                  <li><Link to="/" >Social Apps</Link></li>
                  <li><Link to="/" >News & Info</Link></li>
                  <li><Link to="/" >Development Tools</Link></li>
                  
              </ul>
            </div>
          </div>  

        </div>

        <div className="last">
        <p>ThemeREX © 2023 . All rights reserved.</p>
        <div className="for_icon">
          <FacebookIcon className='facebook'/>
          <TwitterIcon className='facebook'/>
          <GitHubIcon className='facebook'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer