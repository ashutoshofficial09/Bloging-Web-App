import { NavLink } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div>
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

      <div className="container section-2 mt-5">
        <div className="h3 mb-4 recent-blog-heading">Recent blogs</div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div>Title</div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-blogs"></section>
    </div>
  );
};
export default Home;
