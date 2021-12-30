import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appConfig from "../config";

const ViewBlog = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const url = appConfig.api_url;

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

  return <div>{displayBlog()}</div>;
};
export default ViewBlog;
