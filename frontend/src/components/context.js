import { useEffect } from "react";
import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const getUser = () => {
    let user = sessionStorage.getItem("user"); 
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrentUser = () => {
    let user = sessionStorage.getItem("user");
    console.log(user);
    if (user) {
      return JSON.parse(user);
    } else {
      return {};
    }
  };

  useEffect(() => {
    
  }, [])

  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [loggedin, setLoggedin] = useState(getUser());

  return (
    <BlogContext.Provider
      value={{
        loggedin,
        setLoggedin,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
