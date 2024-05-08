import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Top3() {
  const [top3, setTop3] = useState([]);

  const fetchTop3 = async () => {
    try {
      const response = await fetch("http://localhost:3000/top3");
      const data = await response.json();
      setTop3(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTop3();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:3000/top3/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTop3();
    } else {
      console.error("Something went wrong");
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">TOP 3 </span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {top3.map(({ id, description, title, image }) => {
                return (
                  <>
                    {" "}
                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center">
                          <div className="p-5">
                            <h2 className="fw-bolder">{title}</h2>
                            <p>{description}</p>
                          </div>
                          <img
                            className="img-fluid"
                            src={require(`../../assets/${image}`)}
                            alt="..."
                          />
                        </div>
                        <div className="d-flex justify-content-end p-3">
                          <button
                            onClick={() => navigate(`/Top3/${id}`)}
                            className="btn btn-primary me-2"
                          >
                            EDIT
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="btn btn-danger"
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className=" d-inline">My TOP games</span>
                </h2>
                <p className="lead fw-light mb-4">Why I Chose These Games?</p>
                <p className="text-muted">
                  Together, these games form a mosaic of my gaming identity—a
                  collection not just of titles, but of worlds explored,
                  challenges conquered, and stories lived. Each game speaks to a
                  different facet of my gaming soul, offering unique experiences
                  that have left an indelible mark on my journey through virtual
                  realms.
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
    </>
  );
}

export default Top3;
