import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { Link, NavLink } from "react-router-dom";
import { BlogContext } from "../context";
import "./header.css";
import "../logoo.png";
const Header = (props) => {
  const { loggedin, setLoggedin, currentUser } = useContext(BlogContext);

  useEffect(() => {
    console.log(loggedin);
    console.log(currentUser);
  }, []);

  // const logout = () => {
  //   setLoggedin(false);
  //   sessionStorage.removeItem("user");
  // };

  const displayLoggedin = () => {
    if (loggedin) {
      return (
        <>
          <li className="nav-item">
            <Button>
              <NavLink className="nav-link" to="/addBlog">
                Add Blog
              </NavLink>
            </Button>
          </li>
          <li className="nav-item">
            <Button>
              <NavLink className="nav-link" to="/manageBlogs">
                Manage Blog
              </NavLink>
            </Button>
          </li>
          <li className="nav-item">
            <Button>
              <NavLink className="nav-link" to="/#">
                Log out
              </NavLink>
            </Button>
          </li>
          <li className="nav-item">
            <Button>
              <Link className="nav-link" to="/user">
                <PersonOutlineTwoToneIcon/>
              </Link>
            </Button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Button>
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </Button>
          </li>
          <li className="nav-item">
            <Button>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </Button>
          </li>
        </>
      );
    }
  };

  return (
    <div className="header-bg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            <img
              className="img-fluid logo"
              src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg"
              height="36px"
              width="44px"
              alt="logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse my-nav"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
                </Button>
              </li>
              <li className="nav-item">
                <Button>
                  <NavLink className="nav-link" to="/listBlog">
                    List Blog
                  </NavLink>
                </Button>
              </li>
              <li className="nav-item">
                <Button>
                <Link className="nav-link" href="#">
                  Pricing
                </Link></Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              

              {displayLoggedin()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
