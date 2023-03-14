import SignUpForm from '../../../components/sign-up-form/sign-up-form.component';

import './nav-modal.styles.scss';


const NavModal = ({toggleModal, setToggleModal}) => {
  return (
    <div id="modal">
      <div id={`${toggleModal ? "nav-modal-background" : ""}`} onClick={setToggleModal}></div>

      <div id="nav-modal" className={`${toggleModal ? "show-modal" : "hide-modal" } nav-modal`}>
        <button type="button" onClick={setToggleModal}>X</button>
        <div>
          <h2>Already a customer?</h2>
          <p>Login to your account</p>
          <form>
            <div className="input">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" required />
            </div> 
            <button type="submit">Log In</button>       
            <button type="button">Google Sign In</button>       
          </form>
        </div>

        <br/>
        <SignUpForm />

      </div>
    </div>
  );
}

export default NavModal;