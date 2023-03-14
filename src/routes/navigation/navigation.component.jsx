import { useState, useEffect, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import NavModal from "./nav-modal/nav-modal.component";

import './navigation.styles.scss';


const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  }

  return (
    <Fragment>
      <NavModal toggleModal={toggleModal} setToggleModal={toggleModalHandler}/>
      <div className="navigation">  
        <div className="top-nav-links">
          <div className="location-links">
            <span>Denmark</span>
            <span>English</span>
            <span>+45 51141415</span>
          </div>
          <div className="logo">
            <Link to="/">MINIMALYST</Link>
          </div>
          <div className="auth-links">
            <Link onClick={toggleModalHandler}>Sign-In Icon</Link>
            <Link>Cart Icon</Link>
            <Link>Search Icon</Link>
          </div>
        </div>

        <div className="bottom-nav-links">
          <div className="clothing-categories-links">
            <Link>Brands</Link>
            <Link>Clothes</Link>
            <Link>Shoes</Link>
            <Link>Bags</Link>
            <Link>Hats</Link>
            <Link>Watches</Link>
            <Link>Jewelry</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;