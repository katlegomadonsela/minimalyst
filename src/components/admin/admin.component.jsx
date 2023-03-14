import { Outlet } from "react-router";

import AdminNav from "./admin-nav/admin-nav.component";
import AdminSidebar from "./admin-sidebar/admin-sidebar.component";

import './admin.styles.scss';


const Admin = () => {
  return (
    <div className="admin">
      <AdminNav />
      <div className="admin-content-container">
        <AdminSidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
}

export default Admin;