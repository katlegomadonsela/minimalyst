import { useEffect, useState } from "react";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    emailAddress: "",
    password: "",
    confirmPassword: ""
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, emailAddress, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {value, name} = event.target

    setFormFields({...formFields, [name]: value});
    console.log(formFields);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert(e);
  }
  
  return (
    <div className="sign-up-form">
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmitForm}>
        <div className="input">
          <label>Display Name</label>
          <input name="displayName" value={displayName} type="text" onChange={handleChange} required />
        </div>
        <div className="input">
          <label>Email Address</label>
          <input name="emailAddress" value={emailAddress} type="email" onChange={handleChange} required />
        </div>
        <div className="input">
          <label>Password</label>
          <input name="password" value={password} type="password" onChange={handleChange} required />
        </div> 
        <div className="input">
          <label>Confirm Password</label>
          <input name="confirmPassword" value={confirmPassword} type="password" onChange={handleChange} required />
        </div> 
        <button type="submit">Sign Up</button>    
      </form>
    </div>
  );
}

export default SignUpForm;