import React, { useState } from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [checkLength, setCheckLength] = useState("as");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    //console.log(username)
    if (!formData.name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }
    
    setError(validationErrors)
    // if(!formData.email.email()){
    //     validationErrors.email='Username is required'
    // }
  };
  return (
    <>
      <div className="login-user">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              onChange={handleChange}
            />

           {error.name && <span style={{color:'red'}}>{error.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={handleChange}
            />
            {error.email && <span style={{color:'red'}}>{error.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="userPassword"
              onChange={handleChange}
            />
            {error.password && <span style={{color:'red'}}>{error.password}</span>}
          </div>

          <div className="mb-3">
            <Link className="text-decoration">You don't have account?</Link>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
