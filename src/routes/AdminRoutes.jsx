import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout.js";
// pages
import Dashboard from "../pages/admin/dashboard/Dashboard.js";
import { User } from "../pages/admin/user/User.js";
import { List } from "../pages/admin/user/List.js";

import { auth } from "../services/authService.js";

const AdminRoutes = () => {

    if(!auth.isAAuthenticated) return <Navigate to='/login' />

    return (
      <Routes>
        <Route path='/' element={<AdminLayout />}>
            <Route index element={<Dashboard />}  />
            <Route path='/dashboard' element={<Dashboard />}  />
            <Route path='/users' element={<List />}  />
        </Route>
      </Routes>
    )
}

export default AdminRoutes;


