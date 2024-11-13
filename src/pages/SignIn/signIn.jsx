import React, { useState } from "react";
import "../SignIn/signIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signInAPI } from "../../Services/service";
import { useNavigate} from 'react-router-dom'


const SignIn = () => {
  // State to toggle between email and password input fields
  const [showPassword, setShowPassword] = useState(false);

  const [userDetails, setUserDetails] = useState({ email: "", password: "" })

  let history = useNavigate();

  // Function to handle "Next" button click
  const handleNextClick = () => {
    setShowPassword(true); // Show password field when "Next" is clicked
  };

  let handleUserDetails = (e) => {
    let key = e.target.name;
    let value = e.target.value
    console.log("dhgh", e)
    setUserDetails({ ...userDetails, [key]: value })

  }

  let handleClick = async () => {
    let res = await signInAPI(userDetails)
    console.log("res---->", res.data.data)
    localStorage.setItem("token", res.data.data);
    // alert(`${res.data.data}`)
    history("/home")
}

  return (
    <div className="signInMain">
      <div className="signIncontainer">
        <div className="signInText">
          {/* <p>Google</p> */}
          <div>
            <span style={{ color: "blue", fontSize: "25px", opacity: "1" }}>
              G
            </span>
            <span style={{ color: "red", fontSize: "25px", opacity: "1" }}>
              o
            </span>
            <span style={{ color: "orange", fontSize: "25px", opacity: "1" }}>
              o
            </span>
            <span style={{ color: "blue", fontSize: "25px", opacity: "1" }}>
              g
            </span>
            <span style={{ color: "green", fontSize: "25px", opacity: "1" }}>
              l
            </span>
            <span style={{ color: "red", fontSize: "25px", opacity: "1" }}>
              e
            </span>
          </div>

          <p>Sign In</p>
          <p
            style={{
              fontSize: "15px",
              opacity: "0.8",
              color: "rgb(6, 65, 174)",
            }}
          >
            with your google account
          </p>
        </div>

        <div className="signIn">
          <div className="signIninput">
            {/* <TextField
              id="standard-basic"
              label="Email or phone"
              variant="standard"
              InputProps={{
                style: {
                  height: "25px", // Reduce the height of the input field
                  padding: "0 1px", // Adjust padding to reduce height
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px", // Adjust label size if needed
                },
              }}
            /> */}

            {/* Conditionally render the email or password field */}
            {!showPassword ? (
              <>
                <TextField
                  id="standard-basic"
                  label="Email or phone"
                  variant="standard"
                  // value={userDetails.email}
                  name="email"
                  onChange={(e) => handleUserDetails(e)}
                  InputProps={{
                    style: {
                      height: "25px", // Adjust height of the input field
                      padding: "0 1px", // Adjust padding to reduce height
                    },
                    "data-key": "email"
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px", // Adjust label size if needed
                    },
                  }}

                />
                <div className="signInForgottext">Forgot Email ?</div>
              </>
            ) : (
              <>
                <TextField
                  id="password-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  //   value={userDetails.password}
                  onChange={(e) => handleUserDetails(e)}
                  InputProps={{
                    style: {
                      height: "25px", // Adjust height of the input field
                      padding: "0 1px", // Adjust padding to reduce height
                    },

                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px", // Adjust label size if needed
                    },
                  }}
                />
                <div className="signInForgottext">Forgot Password?</div>
              </>
            )}
            {/* <div className="signInForgottext">Forgot Email ?</div> */}
          </div>
        </div>

        <div className="signIn">
          <div className="signInSecondTextOne">
            Not your computer? Use Guest mode to signIn privately
          </div>
          <div className="signInSecondTextTwo">Learn more</div>
          <div></div>
        </div>

        <div className="signIn">
          <div className="signInBtn">
            <Button size="medium" className="signInBtnOne">
              Create account
            </Button>

            {!showPassword ? (
              <Button
                onClick={handleNextClick}
                variant="contained"
                className="signInBtnTwo"
                size="medium"

              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                className="signInBtnTwo"
                size="medium"
                onClick={handleClick}
              >
                SignIn
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
