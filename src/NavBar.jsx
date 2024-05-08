function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container px-5">
        <a class="navbar-brand" href="/Home">
          <span class="fw-bolder text-primary">LISTME</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item">
              <a class="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Top3">
                TOP 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AllList">
                All List
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Developers">
                Developers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AddGame">
                || + Add Game
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
