import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appConfig from "../config";

const ViewBlog = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const url = appConfig.api_url;

  const [blogData, setBlogData] = useState([]);
  const fetchBlogData = () => {
    fetch(url + "/blog/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogDetail(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const displayBlog = () => {
    if (!loading) {
      return (
        <div>
          <MDEditor.Markdown source={blogDetail.data} />
        </div>
      );
    }
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Card sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="edit-blog">
                <EditOutlinedIcon />
              </IconButton>
            }
            title="blog title"
            subheader="Posted date & time"
          />
          <CardMedia
            component="img"
            height="250"
            image="image thumbnail"
            alt="Blog Thumbnail"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Blog Description Blog Description
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

          <CardContent>
            <Typography paragraph>Method:</Typography>

            <Typography paragraph>
              descrition MD Editor Contents Are Here:
              {displayBlog()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
export default ViewBlog;
