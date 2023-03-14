import { Link } from "react-router-dom";

import './admin-nav.styles.scss';


const AdminNav = () => {
  return (
    <div className="admin-nav">
      <div className="location-links">
        <span>Denmark</span>
        <span>English</span>
        <span>+45 51141415</span>
      </div>
      <div className="logo">
        <Link to="/">MINIMALYST</Link>
      </div>
      <div className="auth-links">
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default AdminNav;