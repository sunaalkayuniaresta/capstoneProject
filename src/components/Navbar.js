import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormInfo from "./FormInfo";
<link rel="stylesheet" href="fontawesome/css/all.css" />;

export default function Navbar() {
  return (
    <>
      {/* <div className="navbar">
        <nav className="navbar-container">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <a>
              Lengkapi Info Akun
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
          </div>
        </nav>
      </div> */}
      <div className="navbar-style">
        <div className="logo-navbar"/>
        <div>
          <a>Lengkapi Info Akun</a>
        </div>
      </div>
      <FormInfo/>
    </>
    
  );
}
