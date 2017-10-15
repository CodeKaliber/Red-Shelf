import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import SHELFIE_ICON from '../images/shelfie_icon.png';
import '../css/shelf/shelfieHome.css';

class SHELFIE_HOME extends Component {
    render() {
        return(
            <div className='shelfie_Body' >
                
                <div className='top_bar'>
                    <img src={SHELFIE_ICON} alt='Shelfie Icon' />
                    SHELFIE
                </div>

                <div className='buttonBox'>
                    <Link to="/shelf_A" >
                        <button className='buttonBoxB'>Shelf A</button>
                    </Link>
                    <Link to="/shelf_B" >
                        <button className='buttonBoxB'>Shelf B</button>
                    </Link>
                    <Link to="/shelf_C" >
                        <button className='buttonBoxB'>Shelf C</button>
                    </Link>
                    <Link to="/shelf_D" >
                        <button className='buttonBoxB'>Shelf D</button>
                    </Link>
                </div>
                    
            </div>
        );
    }
}

export default SHELFIE_HOME;