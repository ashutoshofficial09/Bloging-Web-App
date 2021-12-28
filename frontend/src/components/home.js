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
                <button className="btn btn-success">
                  Let's Start Blogging
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="section-2">
        <div className="h2 recent-blog-heading">Recent blogs</div>
          <div className="container">
                <div className="card">
                  <div className="card-body">
                    <div>Title</div>
                  </div>

                </div>
          </div>

      </div>


      
    </div>
  );
};
export default Home;
