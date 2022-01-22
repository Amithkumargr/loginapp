import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Register(props) {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const [gender, setGender] = useState("");
  const [date, setdate] = useState("");
  const [validdate, setvaliddate] = useState(false);

  const [nameerror, setnameerror] = useState(false);
  const [lnameerror, setlnameerror] = useState(false);

  const [genderError, setGenderError] = useState(false);
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setemailError] = useState(false);
  
  const [emailErrorEmpty, setemailErrorEmpty] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false);
  const [confirmPass, setconfirmPass] = useState("");
  const [number, setnumber] = useState("");
  const [numerror, setnumerror] = useState(false);

  const onClick = (event) => {
    event.preventDefault();

   
    if (fname === "") {
      setnameerror(true);
    }
    if (number === "") {
      setnumerror(true);
    }

    if (date === "") {
      setvaliddate(true);
    } else setvaliddate(false);

    if (lname === "") {
      setlnameerror(true);
    }

    if (gender === "") {
      setGenderError(true);
    } else setGenderError(false);
    if (userDetails.password === "") {
      setPasswordErrorEmpty(true);
    }
    if (userDetails.email === "") {
      setemailErrorEmpty(true);
    }
    let mail = event.target.value;
    let pass = event.target.value;

    let filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

    let validPassReg =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

    if (userDetails.email && userDetails.password && filter.test(mail) && validPassReg.test(pass)) 
    {
      //programatically navigate
      console.log("props", props);
      props.history.push("/home");
    } else {
      console.log("not valis");
    }
  };

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };
    console.log(userDetailsCopy, "userDetailsCopy");

    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };

  
  return (
    <div className="register_body">
      <div className="container1">
      <br/>
      <table>
        <div className="title" style={{color:"whitesmoke",backgroundColor:"green",fontSize:"20px"}}>Registration Form</div>
        <div className="content">
          <div className="user-details">
            <div>
              <span className="details">First Name</span>

              <input className="form-control widthRange"
                placeholder="Firtsname"
                type="text"
                onChange={(event) => {
                  // confirmPassword();
                  setfname(event.target.value);
                  const expr = /^[a-zA-Z_]{3,15}$/;
                  if (!expr.test(fname)) {
                    setnameerror(true);
                  } else {
                    setnameerror(false);
                  }
                }}
              />
              {nameerror ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  please enter a valid firstName
                </p>
              ) : null}
            </div>
            <div className="input-box">
              <span className="details">Lastname</span>

              <input className="form-control"
                placeholder="Lastsname"
                type="text"
                onChange={(event) => {
                  // confirmPassword();
                  setlname(event.target.value);
                  const expr = /^[a-zA-Z_]{3,15}$/;
                  if (!expr.test(lname)) {
                    setlnameerror(true);
                  } else {
                    setlnameerror(false);
                  }
                }}
              />
              {lnameerror ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  please enter a valid Lastname
                </p>
              ) : null}
            </div>

            <div className="input-box">
              <span className="details">DOB</span>

              <input className="form-control"
                type="date"
                onChange={(event) => {
                  setdate(event.target.value);
                  setvaliddate(false);
                }}
              />
              {validdate ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,

                    textAlign: "center",
                  }}
                >
                  Enter DOB
                </p>
              ) : (
                ""
              )}
            </div>
            <br/>
            <div>
            
            <span className="details">Phone no</span>
<br/>
        <input className="form-control"
          type="text"
          onChange={(event) => {
            setnumber(event.target.value);
            var pattern = new RegExp("([^\d])\d{10}([^\d])");
            if (!pattern.test(number)) {
              setnumerror(true);
            } else {
              setnumerror(false);
            }
          }}
        />
        {numerror ? (
          <p style={{ color: "red", fontSize: 12, padding: 0, margin: 0 }}>
           phone no should contain 10 digits
          </p>
        ) : (
          ""
        )}
      </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input className="form-control"
                value={userDetails.email}
                type="email"
                name="email"
                onChange={(event) => {
                  handleChange(event);
                  let mail = event.target.value;
                  if (mail) {
                    setemailErrorEmpty(false);
                  }
                  const filter =
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

                  if (filter.test(mail)) {
                    setemailError(false);
                  } else {
                    setemailError(true);
                  }
                }}
                placeholder="Enter your email"
              />{" "}
              {emailError && userDetails.email ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,
                  }}
                >
                  mail is incorrect
                </p>
              ) : emailErrorEmpty ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,

                    textAlign: "center",
                  }}
                >
                  please enter a valid email
                </p>
              ) : null}
            </div>
            <div >
              <span className="details">Password</span>

              <input className="form-control"
                value={userDetails.password}
                name="password"
                type="password"
                onChange={(event) => {
                  let pass = event.target.value;
                  handleChange(event);
                  let validPassReg =
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,16}/;

                  if (!validPassReg.test(pass)) {
                    setPasswordError(true);
                  } else {
                    setPasswordError(false);
                  }
                }}
                placeholder="password"
                
              />
              {passwordError && userDetails.password ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,

                    textAlign: "center",
                  }}
                >
                  Password is invalid
                </p>
              ) : (
                passwordErrorEmpty && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                      padding: 0,
                      margin: 0,

                      textAlign: "center",
                    }}
                  >
                    Please enter the password
                  </p>
                )
              )}
            </div>
            <div className="input-box">
             
              <span className="details">Confirm Password</span>

              <input className="form-control"
                placeholder="confirm password"
                name="confpass"
                type="password"
                onChange={(event) => {
                  // confirmPassword();
                  setconfirmPass(event.target.value);
                }}
              />

              {confirmPass && confirmPass !== userDetails.password ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,

                    textAlign: "center",
                  }}
                >
                  Password is not matching
                </p>
              ) : null}
            </div>
          </div>

          <span className="details">Gender</span>

          <div className="gender-details">
            <input
              // style="outline: 1px solid #ab1a23"
             // className="form-check-input"
              type="radio"
              value="male"
             // id="dot-1"
              name="inlineRadioOptions"
              onChange={(event) => {
                setGender(event.target.value);
                setGenderError(false);
              }}
            />

            <input
              // style="outline: 1px solid #ab1a23"
              className="form-check-input"
              type="radio"
              value="Female"
              id="dot-2"
              name="inlineRadioOptions"
              onChange={(event) => {
                setGender(event.target.value);
                setGenderError(false);
              }}
            />

            <input
              // style="outline: 1px solid #ab1a23"
              className="form-check-input"
              type="radio"
              id="dot-3"
              name="inlineRadioOptions"
              value="Other"
              onChange={(event) => {
                setGender(event.target.value);
                setGenderError(false);
              }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontWeight: "500",
                marginBottom: "5px",

                textAlign: "center",
              }}
              className="gender-title"
            >
              
            </span>
            <div className="category">
              <label for="dot-1">
                {/* <span className="dot one"></span> */}
                <span className="gender">Male</span>
              </label>
              <label for="dot-2">
                {/* <span className="dot two"></span> */}
                <span className="gender">Female</span>
              </label>
              <label for="dot-3">
                {/* <span className="dot three"></span> */}
                <span className="gender">Other</span>
              </label>
            </div>
          </div>

          {genderError ? (
            <p
              style={{
                textAlign: "center",

                color: "red",
                fontSize: 12,
                padding: 0,
                margin: 0,
              }}
            >
              please select atleast one gender
            </p>
          ) : (
            ""
          )}

          <button
            className="Register_button"
            style={{
              marginTop: 20,
            }}
            onClick={onClick}
           >
            Submit
          </button>
        </div> Already have an account ? 
        <Link style={{textDecoration:"none"}} to="/login">
         Login here!
          </Link>
          </table>
      </div>
      
    </div>
    
  );
}

export default Register;
