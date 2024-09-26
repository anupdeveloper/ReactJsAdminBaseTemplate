import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default AdminLayout
