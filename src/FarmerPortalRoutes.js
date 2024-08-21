import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgriMartFarmerProductManagement from './pages/AgriMartFarmerProductManagement/AgriMartFarmerProductManagement';
import AgriMartFarmerOrderManagement from './pages/AgriMartFarmerOrderManagement/AgriMartFarmerOrderManagement';
import AgriMartFarmerManagereview from './pages/AgriMartFarmerManageReview/AgriMartFarmerManagereview';
import AgriMartAccountSettings from './pages/AgriMartAccountSettings/AgriMartAccountSettings';
import AgriMartFinance from './pages/AgriMartFinance/AgriMartFinance';
import AgriMartAddNewProduct from './pages/AgriMartAddNewProduct/AgriMartAddNewProduct';
import AgriMartFarmerPortal from './pages/AgriMartFarmerPortal/AgriMartFarmerPortal';
import AgriMartEditProduct from './pages/AgriMartEditProduct/AgriMartEditProduct';

import './App.css';
import AgriMartSideBar from './components/AgriMartSideBar/AgriMartSideBar';

function FarmerPortalRoutes() {
    return (
        <Router>
            <AgriMartSideBar>
                <Routes>
                    {/* Agrimart portal redirected to following pages
                                    - AgriMartFarmerProductManagement
                                    - AgriMartOrderManagement
                                    - AgriMartManageReview
                                    - AgriMartFinance
                                    - AgriMartAccountSettings */}
                     <Route path="/portal" element={<AgriMartFarmerPortal />} />
                    <Route path="/management" element={<AgriMartFarmerProductManagement />} />
                    <Route path="/orders" element={<AgriMartFarmerOrderManagement />} />
                    <Route path="/reviews" element={<AgriMartFarmerManagereview />} />
                    <Route path="/finance" element={<AgriMartFinance />} />
                    <Route path="/accountsettings" element={<AgriMartAccountSettings />} />
                    <Route path="/addproduct" element={<AgriMartAddNewProduct />} />
                    <Route path="/editproduct/:id/" element={<AgriMartEditProduct />} />

                </Routes>
            </AgriMartSideBar>
        </Router>
    );
}

export default FarmerPortalRoutes;
