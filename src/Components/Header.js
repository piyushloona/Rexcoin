import React from 'react';
import logo from '../Assets/images/header_logo.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
const Header = () => {
  return (
    <>
    <div className='header fixed-top'>
                {/* <div className="header_logo">
                    <img src={logo}/> 
                </div> */}

                <div className="menu">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo}/></a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                         <IndeterminateCheckBoxIcon className='check'/>
                        </button>
                      
                        <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <ul className="dropdown ">
                                <button className="dropbtn dropdown-toggle">About</button>
                                    <div className="dropdown-content">
                                        <a href="#">Our Missions</a>
                                        <a href="#">Our Benefits</a>
                                        <a href="#">Our Services</a>
                                        <a href="#" className='pb-2'>Our Team</a>
                                        
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link ">Blog Styles</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link ">Gallery</a>
                            </li><li className="nav-item">
                            <a className="nav-link ">Contact</a>
                            </li>

                            
                        </ul>
                        <div className="icons">
                            <FacebookIcon className='facebook'/>
                            <TwitterIcon className='twitter'/>
                            <GitHubIcon className='github'/>
                        </div>
                        </div>
                       
  </div>
</nav>
                </div>


                
            </div>
        
     </>
  )
}

export default Header