import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SHELFIE_HOME from './components/shelfieHome';
import SHELF_A from './components/shelf/shelf_A';
import SHELF_B from './components/shelf/shelf_B';
import SHELF_A_Bin1 from './components/bin/shelfAbin1';
import SHELF_A_Bin1_Edit from './components/bin/shelfAbin1Edit';
import ADD_To_Bin_1 from './components/bin/addToBin_1';

import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            {/* Links To Each Shelf */}
            <Route path="/shelf_A" component={SHELF_A} />
            <Route path="/shelf_B" component={SHELF_B} />

            {/* Links To Each Bin */}
            <Route path="/shelf_A_Bin" component={SHELF_A_Bin1} />
            <Route path="/shelf_A_Bin_Edit" component={SHELF_A_Bin1_Edit} />
            <Route path="/add_To_Bin_1" component={ADD_To_Bin_1} />

            {/* Link To Home Page */}
            <Route path="/" component={SHELFIE_HOME} />
        </Switch>
    </Router>,
document.getElementById('root'));
