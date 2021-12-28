import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import AddBlog from ".//Blog/addBlog";
import ListBlog from "./components/listBlogs";
import { useState } from "react";
import { createTheme } from "@mui/system";
import { BlogProvider } from "./components/context";
import ViewBlog from "./components/viewBlog";

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
