import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerManagereview.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
function AgriMartFarmerManagereview () {
    return (
        <div>
        <div>
            <AgriMartFarmerNavBar />

        </div>
       
        <div>
                <h2  class="txt-header">Manage Reviews</h2>
            </div>
        <div>
            <AgriMartFooter/>

        </div>

    </div>

      );
}

export default AgriMartFarmerManagereview;