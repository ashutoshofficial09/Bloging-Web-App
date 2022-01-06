import { Button, IconButton, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment } from "@mui/material";
import { Formik } from "formik";
import "./signup.css";
import {
  ArrowBack,
  Close,
  EmailRounded,
  Google,
  Lock,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2";
import appConfig from "../../config";
const Signup = () => {
  const url = appConfig.api_url;
  const signupForm = {
    email: "",
    name: "",
    password: "",
  };
  const signupSubmit = (formdata) => {
    console.log(formdata);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered succcesfully",
        }).then(() => {
          window.location.replace("/login");
        });
      });
  };

  return (
    <div>
      <div className="body">
        <div className="container signup-container">
          <div className="card  my-card">
            <div className="card-body">
              <h4 className="text-center mt-2 mb-4">Signup to Let's Blog</h4>
              <div className="back-btn">
                <Button>
                  <NavLink to="/home">
                    <Close />
                  </NavLink>
                </Button>
              </div>
              <Formik initialValues={signupForm} onSubmit={signupSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="mb-2"
                      id="name"
                      label="Enter Your Name"
                      type="name"
                      color="primary"
                      value={values.name}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <TextField
                      className="mb-2"
                      id="email"
                      label="Email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailRounded color="primary" />
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
                      value={values.password}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <div className="text-center">
                      <Button
                        className="mt-2 w-100"
                        type="submit"
                        variant="contained"
                      >
                        submit
                      </Button>
                      <p className="mt-1">-or-</p>
                      <Button className="mb-2 w-100" variant="contained">
                        <Google />
                        &nbsp; Signup with google
                      </Button>
                      <div class="sub-content">
                        <div class="s-part">
                          Already have an account?
                          <NavLink to="/login">Login</NavLink>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
