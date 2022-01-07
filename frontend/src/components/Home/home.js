import { NavLink } from "react-router-dom";
import "./home.css";
import "./feature-1.gif";
import appConfig from "../../config";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
const Home = () => {
  const url = appConfig.api_url;

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = () => {
    fetch(url + "/blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data.slice(0, 10));
        setLoading(false);
      });
  };

  //function for display blogs
  const displayBlog = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {blogData.map((blog) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + blog.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h4>{blog.title}</h4>
                  <p>{blog.description}</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={"/View/" + blog._id}
                      component={Button}
                      variant="contained"
                      color="primary"
                    >
                      View Full Blog
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  // const swiper = useRef(null);
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="section-1">
        <div className="container">
          <header className="row align-items-center justify-comtent-start header">
            <div className="col-md-12">
              <h2 className="sub-heading">Hello! welcome to</h2>
              <h1 className="mb-4 mb-md-0">
                <strong> Let's Blog</strong>{" "}
              </h1>
              <div className="row">
                <div className="col-md-7">
                  <div className="text">
                    <p>
                      Clean, simple and elegant, The Let's blog is suitable for
                      any kind of blog, personal, travel, fashion, food,
                      photography, publishing or tutorial blog site
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink className="link" to="/signup">
                  <button className="btn btn-success">
                    Let's Start Blogging
                  </button>
                </NavLink>
              </div>
            </div>
          </header>
        </div>
      </div>

      <section className="features container">
        <div>
          <h2 className="h2">Our features </h2>
          <p>
            This platform is about sharing latest tech blogs.Here anyone can
            create and read blogs about latest technologies of the world{" "}
          </p>
        </div>
        <div className="features-card row">
          <div class="col-md-4 mt-5">
            <div class=" mycard">
              <div className="feature-icon">
                <lord-icon
                  src="https://cdn.lordicon.com/jvucoldz.json"
                  trigger="loop"
                  colors="primary:#7166ee,secondary:#08a88a"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3>Latest Technology</h3>
                <p class="text-muted">Create your blog easily</p>
                <p className="text-muted">Post your blog</p>
                <p className="text-muted">Serve</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-5">
            <div class="card mycard">
              <div className="feature-icon">
                <lord-icon
                  src="https://cdn.lordicon.com/wloilxuq.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3>Latest Technology</h3>
                <p class="text-muted">Create your blog easily</p>
                <p className="text-muted">Post your blog</p>
                <p className="text-muted">Serve</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-5">
            <div class="mycard">
              <div className="feature-icon ">
                <lord-icon
                  src="https://cdn.lordicon.com/qhgmphtg.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3>Latest Technology</h3>
                <p class="text-muted">Create your blog easily</p>
                <p className="text-muted">Post your blog</p>
                <p className="text-muted">Serve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-2 mt-5">
        <div className="h3 mb-4 recent-blog-heading">Recent blogs</div>
        <div className="container">
          <div className="card homeBlog-Card">
            <div className="card-body">
              <div>{displayBlog()}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
