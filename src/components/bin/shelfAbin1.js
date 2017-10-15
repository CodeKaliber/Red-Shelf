import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import SHELFIE_BIN_img from '../../images/shelfie_bin.png';
import Airbok_Sneakers from '../../images/airbok_Sneakers.png';
import '../../css/bin/shelfAbin1.css';

class SHELF_A_Bin1 extends Component {
    render() {
        return(
            <div className='shelfie_Body_Bin_1' >

                <div className='top_bar_bin_1'>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <img src={SHELFIE_BIN_img} alt='Shelf A' />
                    </Link>
                    <Link to="/shelf_A"
                        style={{
                            textDecoration: 'none', color:'#FFFFFF'
                            }} >
                        Shelf A
                    </Link>
                        <div className='shelfieHeadBin1'>Bin 1</div>
                </div>

                <div className='buttonBox_bin_1'>
                    <div className='buttonBoxImage'>
                        <img src={Airbok_Sneakers} alt='Airbok Sneakers Shoes' />
                    </div>
                    <div className='boxButtonBin1Text'>
                        Name
                        <br/><br/>
                        <button className='boxButtonBin1Input' >
                            <input
                                type='text'
                                value='Airbok Sneakers'
                                style={{
                                    border:'none',
                                    fontSize:'30px',
                                    fontWeight:'bold'
                                    }}
                            />
                        </button>

                        <br/><br/>

                        Price
                        <br/><br/>
                        <button className='boxButtonBin1Price' >
                            <input
                                type='text'
                                value='200.50'
                                style={{
                                    border:'none',
                                    fontSize:'30px',
                                    fontWeight:'bold'
                                    }}
                            />
                        </button>

                        <br/><br/><br/>
                        
                        <Link to='/shelf_A_Bin_Edit' >
                            <button className='boxButtonEdit'>EDIT</button>
                        </Link>

                        <button className='boxButtonDelete'>DELETE</button>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default SHELF_A_Bin1;