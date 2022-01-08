import { Alert, Button, Snackbar } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import appConfig from "../../config.js";

const ManageBlogs = () => {
  const url = appConfig.api_url;

  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogDetail, setBlogDetail] = useState([]);

  // to control snakbar
  const [snakbarOpen, setSnakbarOpen] = useState(false);

  //fetch data form backend
  const fetchBlogData = () => {
    fetch(
      url +
        "/blog/getbyauthor/" +
        JSON.parse(sessionStorage.getItem("user"))._id
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogDetail(data);
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
          fetchBlogData();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const showBlogs = () => {
    if (!loading) {
      return blogList.map((blog, index) => (
        <tr key={index}>
          <td>{blog.thumbnail}</td>
          <td>{blog.title}</td>
          <td>{blog.description}</td>
          <td>
            <Button
              onClick={() => {
                deleteBlog(blog._id);
              }}
              variant="contained"
              color="error"
            >
              <i className="fas fa-trash-alt"></i>
              &nbsp; Delete
            </Button>
          </td>
        </tr>
      ));
    } else {
      return <h2>Loading ...</h2>;
    }
  };
  const closeSnackBar = () => {
    setSnakbarOpen(false);
  };

  return (
    <div className="container">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snakbarOpen}
        onClose={closeSnackBar}
      >
        <Alert
          onClose={closeSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Blog Deleted Successfully!!
        </Alert>
      </Snackbar>
      <h1>Manage Blogs</h1>
      <hr />

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Blog Title</th>
            <th>Descriprion</th>
            <th>Delete Blogs</th>
          </tr>
        </thead>
        <tbody>{showBlogs()}</tbody>
      </table>
    </div>
  );
};
export default ManageBlogs;
