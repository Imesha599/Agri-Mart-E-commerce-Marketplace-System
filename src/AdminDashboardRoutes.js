import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgriMartSideBar from './components/AgriMartSideBar/AgriMartSideBar';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminUserManagement from './pages/AdminUserManagement/AdminUserManagement';
import AdminProductManagement from './pages/AdminProductManagement/AdminProductManagement';
import AdminOrderManagement from './pages/AdminOrderManagement/AdminOrderManagement'
import AdminManageReview from './pages/AdminManageReview/AdminManageReview'
import './App.css';
import Register from './pages/Register/Register';

function AdminDashboardRoutes() {
    return (
        // <Router>
        //     <AgriMartSideBar>
        //         <Routes>
        //             {/* Agrimart portal redirected to following pages
        //                             - UserManagement
        //                          -   AdminProductManagement
        //                             - AdminOrderManagement
        //                             - AdminManageReview
                                    
        //              */}

        //             <Route path="/portal" element={<AdminDashboard />} />
        //             <Route path="/usermanagement" element={<AdminUserManagement/>} />
        //             <Route path="/adminproduct" element={<AdminProductManagement />} />
        //             <Route path="/adminorders" element={<AdminOrderManagement />} />
        //             <Route path="/adminreviews" element={<AdminManageReview/>} />
        //         </Routes>
        //     </AgriMartSideBar>
        //     <Routes>
        //     <Route path="/register" element={<Register/>} />
        //     </Routes>
        // </Router>
        <></>
    );
}

export default AdminDashboardRoutes;
