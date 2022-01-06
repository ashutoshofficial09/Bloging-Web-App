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

function App() {
  const [darkMode, setdarkMode] = useState(false);

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
          <Header />
          <Route path={"/home"} component={Home} />
          <Route path={"/signup"} component={Signup} />
          <Route path={"/login"} component={Login} />
          <Route path={"/addBlog"} component={AddBlog} />
          <Route path={"/listBlog"} component={ListBlog} />
          <Route path={"/view/:id"} component={ViewBlog} />
          <Route exact path={"/"}>
            <Redirect to="/home" />
          </Route>
        </BrowserRouter>
      </BlogProvider>
    </div>
  );
}

export default App;
