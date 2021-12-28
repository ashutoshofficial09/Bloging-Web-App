import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";

const ListBlog = () => {
  const url = app_config.api_url;
  //state
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = () => {
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
        <Grid container spacing={5}>0
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
                  <Link
                    to={"/view/" + blog._id}
                    component={Button}
                    variant="contained"
                    color="primary"
                  >
                    Play Video
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const swiper = useRef(null);
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Paper className="mb-5">
      <Container maxWidth="xl">
        <header style={{ height: "30rem", marginBottom: "5rem" }}></header>

        <Grid container justifyContent="space-between" className="mb-3">
          <Grid item>
            <h3 classNameName="subtitle">All Videos</h3>
          </Grid>

          <Grid item>
            <Button color="secondary" variant="contained">
              Show More
            </Button>
          </Grid>
        </Grid>
        {displayBlog()}
      </Container>
    </Paper>
  );
};

export default ListBlog;
