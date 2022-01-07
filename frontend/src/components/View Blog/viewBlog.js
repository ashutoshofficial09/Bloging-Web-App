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
import appConfig from "../../config";
import "./viewBlog.css";

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

  const displayThumbnail = () => {
    if (!loading) {
      return <div></div>;
    }
  };
  const displayBlog = () => {
    if (!loading) {
      return (
        <div className="viewBlog-container">
          <Container className="mt-5 ">
            <Card>
              <CardHeader
                style={{
                  fontWeight: "700",
                  fontSize: "86px",
                  color: "#212529",
                }}
                title={blogDetail.title}
                subheader={blogDetail.tags}
              />
              <CardContent>
                <CardMedia
                  className="mb-5"
                  component="img"
                  height="500"
                  image={url + "/" + blogDetail.thumbnail}
                  alt={blogDetail.title}
                />
                <MDEditor.Markdown source={blogDetail.data} />
              </CardContent>
            </Card>
          </Container>
        </div>
      );
    }
  };

  return <div>{displayBlog()}</div>;
};
export default ViewBlog;
