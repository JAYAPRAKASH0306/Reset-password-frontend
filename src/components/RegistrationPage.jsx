import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    fetch("https://passwordresettask.onrender.com/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred while registering.");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5 p-5">
        <h3 className="h3 text-center">Sign Up - Create Your Account</h3>
        <div className="m-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="m-3">
          Already registered <br />
          <Link to="/signIn">sign in?</Link>
        </p>
        <p>{message}</p>
      </div>
    </form>
  );
};

export default RegistrationPage;
