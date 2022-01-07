import "./footer.css";
const Footer = () => {
  return (
    <div className="footer border-top">
      <div class="container ">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p class="col-md-4 mb-3 text-muted">&copy; 2021 Company, Inc</p>

          <ul class="nav justify-content-center  mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>

          <ul class="nav col-md-4 mb-3 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                facebook
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                twitter
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                github
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
