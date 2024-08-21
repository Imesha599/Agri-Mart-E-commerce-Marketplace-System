import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
 import './AgriMartFinance.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
function AgriMartFinance () {
    return (
        <div>
        <div>
            <AgriMartFarmerNavBar />

        </div>
       
        <div>
                <h2  class="txt-header">Finance</h2>
            </div>
        <div>
            <AgriMartFooter/>

        </div>

    </div>

      );
}

export default AgriMartFinance;