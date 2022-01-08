import { useState } from "react";
import appConfig from "../../config.js";

const ManageBlog = () => {
  const url = appConfig.api_url;

  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  // to control snakbar
  const [snakbarOpen, setSnakbarOpen] = useState(false);

  //fetch data form backend
  const fetchUsersData = () => {
    fetch(url + "/blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogList(data);
        setLoading(false);
      });
  };
  const deleteBlog = (id) => {
    const reqOpt = {
      method: "DELETE",
    };

    fetch(url + "/blog/delete/" + id, reqOpt)
      .then((res) => {
        if (res.status === 200) {
          console.log("item deleted");
          setSnakbarOpen(true);
          fetchUsersData();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  return;
  <div></div>;
};
export default ManageBlog;
