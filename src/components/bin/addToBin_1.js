import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import SHELFIE_BIN_img from '../../images/shelfie_bin.png';
import Add_Image from '../../images/add_Image.png';
import '../../css/bin/addToBin_1.css';

class ADD_To_Bin_1 extends Component {
    render() {
        return(
            <div className='shelfie_Body_Bin_1_Add' >

                <div className='top_bar_bin_1_Add'>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <img src={SHELFIE_BIN_img} alt='Shelf A' />
                    </Link>
                    <Link to="/shelf_A"
                        style={{
                            textDecoration: 'none', color:'#FFFFFF'
                            }} >
                        Shelf A
                    </Link>
                        <div className='shelfieHeadBin1'>Add To Bin</div>
                </div>

                <div className='buttonBox_bin_1_Add'>
                    <div className='buttonBoxImage_Add'>
                        <img src={Add_Image} alt='Add Image Icon' />
                    </div>
                    <div className='boxButtonBin1Text_Add'>
                        
                        Name
                        <br/><br/>
                        <button className='boxButtonBin1Input_Add' >
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
                        <button className='boxButtonBin1Price_Add' >
                            <input
                                type='text'
                                value='0.00'
                                style={{
                                    border:'none',
                                    fontSize:'30px',
                                    fontWeight:'bold',
                                    color:'#999999'
                                    }}
                            />
                        </button>

                        <br/><br/><br/>
                        
                        <Link to='/shelf_A_Bin' >
                            <button className='boxButtonEdit_Add'>ADD INVENTORY</button>
                        </Link>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default ADD_To_Bin_1;