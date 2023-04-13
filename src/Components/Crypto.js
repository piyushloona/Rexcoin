import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import pic1 from '../Assets/images/crypto_1.webp';
import pic2 from '../Assets/images/crypto_2.webp';
import pic3 from '../Assets/images/crypto_3.webp';
import pic4 from '../Assets/images/crypto_4.webp';
import pic5 from '../Assets/images/crypto_5.webp';
import pic6 from '../Assets/images/crypto_6.webp';
import pic7 from '../Assets/images/crypto_7.webp';
import pic8 from '../Assets/images/crypto_8.webp';
import pic9 from '../Assets/images/crypto_9.webp';
import pic10 from '../Assets/images/crypto_10.webp';
import pic11 from '../Assets/images/crypto_back.webp';

const Crypto = () => {
  return (
    <div className='crypto'>
        <div className="container">
            
            <h1>The Cryptocurrency for Payments</h1>
            <p>RexCoin is an open source, global payment network that is fully <br/>
            decentralized without any central authorities.</p>
            <div className="download">
            <button type='button' className='window'><WindowIcon className='window_icon'/>Download Wallet</button>
            <button type='button' className='watch'><PlayCircleFilledWhiteIcon className='watch_icon'/>Watch Introduction Video</button>
          

          
            </div>
            <div className="images">
                <div className="first">
                <img src={pic1}/>
                </div>
                <div className="first">
                <img src={pic2}/>
                </div><div className="first">
                <img src={pic3}/>
                </div><div className="first">
                <img src={pic4}/>
                </div><div className="first">
                <img src={pic5}/>
                </div><div className="first">
                <img src={pic6}/>
                </div><div className="first">
                <img src={pic7}/>
                </div><div className="first">
                <img src={pic8}/>
                </div><div className="first">
                <img src={pic9}/>
                </div><div className="first">
                <img src={pic10}/>
                </div>                
            </div>

        </div>
        

    </div>
  )
}

export default Crypto