import { Close, EmailRounded, Lock } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import appConfig from "../../config";
import { BlogContext } from "../context";

import "./login.css";
const Login = (props) => {
  const url = appConfig.api_url;

  const { setLoggedin, setCurrentUser, loggedin, currentUser } =
    useContext(BlogContext);

  const loginForm = {
    email: "",
    password: "",
  };

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  const loginSubmit = (formdata) => {
    console.log(formdata);

    //three things are required to 1.request address  2.httprequestethod 3.data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);

        return res.json();
      })
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        setCurrentUser(data);
        setLoggedin(true);
        console.log(loggedin);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered succcesfully",
        }).then(() => {
          window.location.replace("/addBlog");
        });
      });
  };

  return (
    <div>
      <div className="body">
        <div className="container login-container">
          <section className="card my-card">
            <div className="head-content card-body">
              <div className="l-part">
                <div className="login-logo">
                  <p>Logo here</p>
                  <div className="close-btn">
                    <Button>
                      <NavLink to="/home">
                        <Close />
                      </NavLink>
                    </Button>
                  </div>
                </div>
                <div>
                  <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          className="mb-2"
                          id="email"
                          label="Email"
                          type="email"
                          onChange={handleChange}
                          value={values.email}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailRounded />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <br />
                        <TextField
                          className="mb-2"
                          id="password"
                          label="Password"
                          type="password"
                          onChange={handleChange}
                          value={values.password}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <br />
                        <Button
                          className="mt-3 w-100"
                          type="submit"
                          variant="contained"
                        >
                          submit
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div class="sub-content card-body">
              <div class="s-part">
                Don't have an account?<NavLink to="/signup">Sign up</NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
