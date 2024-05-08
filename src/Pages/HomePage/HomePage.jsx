import headerImage from "../../assets/header.png";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"></div>
                <div className="fs-3 fw-light text-muted">
                  Welcome everyone //
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get a better experience with me and my currently played
                    games
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img
                    className="profile-img"
                    src={headerImage}
                    alt="Header picture..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="text-center my-5">
        <Link to="/Top3">
          <Button variant="primary" className="gradient-text m-3 hover-effect">
            TOP 3
          </Button>
        </Link>
        <Link to="/AllList">
          <Button variant="primary" className="gradient-text m-3 hover-effect">
            All List
          </Button>
        </Link>
        <Link to="/Developers">
          <Button variant="primary" className="gradient-text m-3 hover-effect">
            Developers
          </Button>
        </Link>
        <Link to="/AddGame">
          <Button variant="primary" className="gradient-text m-3 hover-effect">
            Add Game
          </Button>
        </Link>
      </div>

      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className=" d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  Hello again, my name is Edvinas // (KUEA).
                </p>
                <p className="text-muted">
                  I'm a passionate gamer with a keen eye for evaluating games
                  across different developers and publishers. I thrive on diving
                  into the world of gaming, analyzing titles, and tiering them
                  based on their quality, innovation, and overall experience.
                  From indie gems to blockbuster releases, I enjoy exploring the
                  diverse landscape of games and sharing insights with fellow
                  gaming enthusiasts. Does that capture what you're looking for?
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="display-5 fw-bolder mb-5 mt-5 d-flex justify-content-center">
        <span className="text-gradient d-inline">WATCH MY STREAM </span>
      </h2>
      <div className="text-center">
        <iframe
          src="https://player.twitch.tv/?channel=shroud&parent=localhost"
          height="600"
          width="1200"
          allowfullscreen="true"
        ></iframe>
      </div>

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-center flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Copyright &copy; LISTME 2024</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
