function AllList() {
  return (
    <>
      <div className="text-center mb-5" style={{ paddingTop: "50px" }}>
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">ALL LIST </span>
        </h1>
      </div>
      <ol
        className="list-group list-group-numbered"
        style={{ paddingTop: "150px" }}
      >
        <li className="list-group-item d-flex justify-content-center">
          The last of us part 2
        </li>
        <li className="list-group-item d-flex justify-content-center">
          The last of us part 1
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Red dead redemption 2
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Need for speed: Most wanted
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Elden Ring
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Lineage 2
        </li>
        <li className="list-group-item d-flex justify-content-center">
          League of Legends
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Counter Strike: Global Offensive
        </li>
        <li className="list-group-item d-flex justify-content-center">
          Valorant
        </li>
        <li className="list-group-item d-flex justify-content-center">
          God of War
        </li>
      </ol>

      <section className="bg-light py-5 mt-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className=" d-inline">My list</span>
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

export default AllList;
