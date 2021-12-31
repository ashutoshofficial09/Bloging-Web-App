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
import appConfig from "../config";

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
                    <Link
                      onClick={() => {
                        {
                        }
                      }}
                      className="ml-auto"
                      to={"/delete/"}
                      component={IconButton}
                    >
                      <IconButton>
                        <DeleteOutline />
                      </IconButton>
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
    <Paper className="mb-5">
      <Container maxWidth="xl">
        <header style={{ height: "30rem", marginBottom: "5rem" }}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <CardMedia
                  component="img"
                  image={
                    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  }
                  height="400vh"
                />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </header>

        <Grid container justifyContent="space-between" className="mb-3">
          <Grid item>
            <h3 classNameName="subtitle">All Blogs</h3>
          </Grid>

          <Grid item>
            <Button color="secondary" variant="contained">
              Show More Blogs
            </Button>
          </Grid>
        </Grid>
        {displayBlog()}
      </Container>
    </Paper>
  );
};

export default ListBlog;
