import { DeleteOutline } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import appConfig from "../../config";
import "./listBlog.css";

const ListBlog = () => {
  const url = appConfig.api_url;
  //state
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = () => {
    fetch(url + "/blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data);
        setLoading(false);
      });
  };

  //function for display blogs
  const displayBlog = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          0
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
                      to={"/view/" + blog._id}
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
    <div className="listBlog-bg">
      <header
        style={{
          height: "20rem",
          marginBottom: "10rem",
        }}
      >
        <div
          id="carouselExampleIndicators"
          class="carousel slide listBlog-header"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CardMedia
                className="d-block w-100 opacity-50"
                component="img"
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                height="400vh"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Blogs are amazing</h5>
                <p>Technological blogs</p>
              </div>
            </div>
            <div class="carousel-item">
              <CardMedia
                className="d-block w-100"
                component="img"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                height="400vh"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <CardMedia
                className="d-block w-100"
                component="img"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                height="400vh"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </header>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" className="mb-3">
          <Grid item>
            <h3 classNameName="subtitle">All Blogs</h3>
          </Grid>
        </Grid>
        {displayBlog()}
      </Container>
    </div>
  );
};

export default ListBlog;
