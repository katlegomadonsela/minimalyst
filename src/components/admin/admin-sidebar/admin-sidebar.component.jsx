import { Link } from "react-router-dom";

import './admin-sidebar.styles.scss';


const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="profile">

      </div>
      <Link to="/admin/all-products">All Products</Link>
      <Link to="/add-product">Add Product</Link>
      <Link to="/add-product">Add Product</Link>
    </div>
  );
}

export default AdminSidebar;