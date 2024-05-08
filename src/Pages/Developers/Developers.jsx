import nT from "../../assets/nt.jpg";
import nD from "../../assets/nd.png";
import rG from "../../assets/rg.png";
import fS from "../../assets/fs.png";
import riot from "../../assets/riot.png";
import santaMonica from "../../assets/santa.png";
// import hellBlade from "./assets/hellblade.jpg";

function Developers() {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-5">
          <span className="text-gradient d-inline">DEVELOPERS </span>
        </h1>
      </div>

      <div
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={nT}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Ninja Theory</h5>

                  <a
                    target="_blank"
                    href="https://ninjatheory.com/"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={nD}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Naughty Dog</h5>
                  <a
                    target="_blank"
                    href="https://www.naughtydog.com/"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={rG}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Rockstar Games</h5>

                  <a
                    target="_blank"
                    href="https://www.rockstargames.com/"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={fS}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FromSoftware</h5>

                  <a
                    target="_blank"
                    href="https://www.fromsoftware.jp/ww/"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={riot}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Riot Games</h5>

                  <a
                    target="_blank"
                    href="https://www.riotgames.com/en"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="img-fluid"
                  src={santaMonica}
                  alt="..."
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Santa Monica Studio</h5>

                  <a
                    target="_blank"
                    href="https://sms.playstation.com/"
                    className="btn btn-primary"
                  >
                    OFFICIAL WEBSITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className=" d-inline">Games Developers</span>
                  </h2>
                  <p className="lead fw-light mb-4">
                    What Does a Game Developer Do?
                  </p>
                  <p className="text-muted">
                    Game developers turn concepts, stories, and designs into
                    playable video games. Using various programming languages,
                    specialized software applications, and a series of test
                    runs, they breathe life into characters and simulate plots
                    and storylines, creating an immersive and user-friendly
                    electronic gaming experience.
                  </p>
                  <div className="d-flex justify-content-center fs-2 gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white py-4 mt-auto">
          <div className="container px-5">
            <div className="row align-items-center justify-content-center flex-column flex-sm-row">
              <div className="col-auto">
                <div className="small m-0">Copyright &copy; LISTME 2024</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Developers;
