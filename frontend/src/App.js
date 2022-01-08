import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AddBlog from ".//Blog/addBlog";
import { useState } from "react";
import { createTheme } from "@mui/system";
import { BlogProvider } from "./components/context";
import ViewBlog from "./components/View Blog/viewBlog";
import Header from "./components/Header/header";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import Signup from "./components/Signup/signup";
import ListBlog from "./components/List Blog/listBlogs";
import Footer from "./components/Footer/footer";
import ManageBlogs from "./components/Manage Blogs/manageBlogs";

function App() {
  const getUser = () => {
    let user = sessionStorage.getItem("user");
    console.log(user);
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrentUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return {};
    }
  };

  const [darkMode, setdarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [loggedin, setLoggedin] = useState(getUser());

  const myTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#390053",
      },

      background: {
        paper: "#2a3024",
      },
    },
  });

  return (
    <div>
      <BlogProvider>
        <BrowserRouter>
          <Header loggedin={loggedin} />
          <Route path={"/home"} component={Home} />
          <Route path={"/signup"} component={Signup} />

          <Route path={"/login"}>
            <Login
              setLoggedin={setLoggedin}
              setCurrentUser={setCurrentUser}
              loggedin={loggedin}
            />
          </Route>

          <Route path={"/addBlog"} component={AddBlog} />
          <Route path={"/listBlog"} component={ListBlog} />
          <Route path={"/view/:id"} component={ViewBlog} />
          <Route path={"/manageBlogs"} component={ManageBlogs}
          <Route exact path={"/"}>
            <Redirect to="/home" />
          </Route>
          <Footer />
        </BrowserRouter>
      </BlogProvider>
    </div>
  );
}

export default App;
