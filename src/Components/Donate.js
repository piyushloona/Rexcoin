import React from 'react'

const Donate = () => {
  return (
    <div className='donate'>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7">
                    <div className="donate_left">
                        <h1>Donate to RexCoin Team</h1>
                        <p> Rexcoin is developed by a worldwide team of passionate developers for the
                            <br/>
                            RexCoin Foundation, a nonprofit organization.

   
                         </p>
                        <input type="range"  className="for_range" max="50"/>
                        <div className="dollars">
                            <p>$20</p>
                            <p>$20</p>
                            <p>$20</p>
                            <p>$20</p>
                            <p>$20</p>
                            <p>$20</p>
                            

                        </div>
                            </div>

                </div>

                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="donate_right">
                        <p className='want'>I want to donate: <sup>$</sup>100.00</p>
                        <button type='button' className='develop'>Donate to Development</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Donate