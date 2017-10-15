import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import SHELFIE_BIN_img from '../../images/shelfie_bin.png';
import '../../css/bin/shelfieBinList.css';

class SHELF_A extends Component {
    render() {
        return(
            <div className='shelfie_Body_Bin' >

            <div className='top_bar_bin'>
                <Link to="/" style={{ textDecoration: 'none' }} >
                    <img src={SHELFIE_BIN_img} alt='Shelf A' />
                </Link>
                Shelf A
            </div>

                <div className='buttonBox_bin'>
                    <Link to="/shelf_A_Bin" >
                    <button className='n1'>Bin 1</button>
                    </Link>
                    <button className='n1'>Bin 2</button>
                    <button className='n1'>Bin 3</button>
                    <button className='n1'>Bin 4</button>
                    <Link to='/add_To_Bin_1' >
                        <button className='n2'>+ Add Inventory</button>
                    </Link>
                </div>
                    
            </div>
        );
    }
}

export default SHELF_A;