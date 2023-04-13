import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tab1 from '../Assets/images/tab1.webp'
import tab2 from '../Assets/images/tab2.webp'
import tab3 from '../Assets/images/tab3.webp'
import tab4 from '../Assets/images/tab4.webp'
import tab5 from '../Assets/images/tab5.webp'
import panel1 from '../Assets/images/panel1.webp'
import panel2 from '../Assets/images/panel2.webp'
import panel3 from '../Assets/images/panel3.webp'
import panel4 from '../Assets/images/panel4.webp'
import panel5 from '../Assets/images/panel5.webp'
import Flash from 'react-reveal/Flash';
import GradingIcon from '@mui/icons-material/Grading';

const Advantages = () => {
  return (
    <div className='advantage'>
        <div className="container">
            <div className="upper">
            <h2>RexCoin Advantages</h2>
            <p>A single globally-sourced trading platform with an associated
                <br/>
            suite of services that supports the entire global network</p>
            </div>

            <div className="community">
                <Tabs>
                    <TabList>
                        <Tab>
                            <img src={tab1}/>
                            <h5>Community</h5>
                        </Tab>
                        <Tab>
                            <img src={tab2}/>
                            <h5>Resources</h5>
                        </Tab>
                        <Tab>
                            <img src={tab3}/>
                            <h5>Blockchain</h5>
                        </Tab>
                        <Tab>
                            <img src={tab4}/>
                            <h5>Wallet Encryption</h5>
                        </Tab>
                        <Tab>
                            <img src={tab5}/>
                            <h5>Minning Reward</h5>
                        </Tab>

                    </TabList>

                    
                    <TabPanel>
                    <Flash>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="c-left">
                                    <img src={panel1}/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="c-right">
                                    <h2>Community</h2>
                                    <p>By joining our community you get to meet talented people from all over the world, as well as share your experience with others and learn from the best! The world`s leaders who became successful miners will explain the story of their success, give useful tips and even online consultations</p>
                                    <button type='button' className='discover'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Flash>
                    </TabPanel>
                    <TabPanel>
                    <Flash>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="c-left">
                                    <img src={panel2}/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="c-right">
                                    <h2>Resources</h2>
                                    <p>By joining our community you get to meet talented people from all over the world, as well as share your experience with others and learn from the best! The world`s leaders who became successful miners will explain the story of their success, give useful tips and even online consultations</p>
                                    <button type='button' className='discover'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Flash>
                    </TabPanel>
                    <TabPanel>
                        <Flash>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="c-left">
                                    <img src={panel3}/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="c-right">
                                    <h2>Blockchain</h2>
                                    <p>By joining our community you get to meet talented people from all over the world, as well as share your experience with others and learn from the best! The world`s leaders who became successful miners will explain the story of their success, give useful tips and even online consultations</p>
                                    <button type='button' className='discover'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Flash>
                    </TabPanel>
                    <TabPanel>
                        <Flash>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="c-left">
                                    <img src={panel4}/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="c-right">
                                    <h2>Wallet Encryption</h2>
                                    <p>By joining our community you get to meet talented people from all over the world, as well as share your experience with others and learn from the best! The world`s leaders who became successful miners will explain the story of their success, give useful tips and even online consultations</p>
                                    <button type='button' className='discover'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Flash>
                    </TabPanel>
                    <TabPanel>
                        <Flash>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="c-left">
                                    <img src={panel5}/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="c-right">
                                    <h2>Minnig Reward</h2>
                                    <p>By joining our community you get to meet talented people from all over the world, as well as share your experience with others and learn from the best! The world`s leaders who became successful miners will explain the story of their success, give useful tips and even online consultations</p>
                                    <button type='button' className='discover'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </Flash>
                    </TabPanel>
                    
                </Tabs>

            </div>

            <div className="planned">
                <GradingIcon className='grading_icon'/>
                <h1>Planned Features</h1>
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className='first_dot'>
                            <div className="for"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="spring">
                        <h3>Winter-spring 2018</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="wallet">
                        <p>Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps 
                            <br/>Capability. Miner, Official Mining Pool, Mining Guide</p>
                        </div>
                    </div>
                </div>

                <div className="row row_first">
                    <div className="col-xl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className='first_dot'>
                            <div className="for"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="spring">
                        <h3>Winter-spring 2018</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="wallet">
                        <p>Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps 
                            <br/>Capability. Miner, Official Mining Pool, Mining Guide</p>
                        </div>
                    </div>
                </div>

                <div className="row row_second">
                    <div className="col-xl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className='first_dot'>
                            <div className="for"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="spring">
                        <h3>Winter-spring 2018</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="wallet">
                        <p>Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps 
                            <br/>Capability. Miner, Official Mining Pool, Mining Guide</p>
                        </div>
                    </div>
                </div>

                <div className="row row_third">
                    <div className="col-xl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className='first_dot'>
                            <div className="for"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="spring">
                        <h3>Winter-spring 2018</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="wallet">
                        <p>Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps 
                            <br/>Capability. Miner, Official Mining Pool, Mining Guide</p>
                        </div>
                    </div>
                </div>

                <div className="for_button">
                           <div className="news">
                    <button type='button' className='more'>More Of Our News</button>
                    </div>
                </div>

               
            </div>
           
        </div>

    </div>
  )
}

export default Advantages