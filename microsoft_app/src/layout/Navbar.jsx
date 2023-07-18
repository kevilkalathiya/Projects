import React from "react";
import "./style.css";
import "./media.css";
import Slider from "./Slider";
import Tools from "./Tools";
import Surface from "./Surface";
import Xbox from "./Xbox";
import For_business from "./For_business";
import Earth_day from "./Earth_day";
import Footer from "./Footer";

const btnclick = () => {
  const drop = document.getElementById("drop");
  console.log(drop);

  if (drop.style.display == "block") {
    console.log(drop.style.display);
    drop.style.display = "none";
  } else {
    console.log(drop.style.display);
    drop.style.display = "block";
  }
};

function Navbar(props) {
  return (
    <>
      {/*----------------------------------------------------------- navbar start -------------------------------------------------------------*/}
      <nav className="navbar navbar-expand-sm navbar-light border ps-xxl-5 d-xxl-block d-none">
        <div className="container-fluid p-0 ps-xxl-4 ms-xxl-3">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <a className="navbar-brand p-0" href="#">
            <img src="img/logo.jpg" alt="" />
          </a>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Microsoft 365
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Windows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surface
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Xbox
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="navbar-nav second_nav">
              <li className="nav-item drop_li ">
                <a className="nav-link" href="#" onClick={btnclick}>
                  All Microsoft
                </a>
                <div id="drop">
                  <div className="sub_drop">
                    <div>
                      <ul>
                        <li className="py-3">
                          <span>Software</span>
                        </li>

                        <li>
                          <a href="#">Windows Apps</a>
                        </li>
                        <li>
                          <a href="#">AI</a>
                        </li>
                        <li>
                          <a href="#">OneDrive</a>
                        </li>
                        <li>
                          <a href="#">Outlook</a>
                        </li>
                        <li>
                          <a href="#">Skype</a>
                        </li>
                        <li>
                          <a href="#">OneNote</a>
                        </li>
                        <li>
                          <a href="#">Microsoft Teams</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li className="py-3">
                          <span>PCs & Devices</span>
                        </li>

                        <li>
                          <a href="#">Shop Xbox</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li className="py-3">
                          <span>Entertainment</span>
                        </li>
                        <li>
                          <a href="#">Xbox Game Pass Ultimate</a>
                        </li>
                        <li>
                          <a href="#">Xbox Live Gold</a>
                        </li>
                        <li>
                          <a href="#">Xbox games</a>
                        </li>
                        <li>
                          <a href="#">PC games</a>
                        </li>
                        <li>
                          <a href="#">Windows digital games</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li className="py-3">
                          <span>Business</span>
                        </li>
                        <li>
                          <a href="#">Microsoft Cloud</a>
                        </li>
                        <li>
                          <a href="#">Microsoft Security</a>
                        </li>
                        <li>
                          <a href="#">Azure</a>
                        </li>
                        <li>
                          <a href="#">Dynamics 365</a>
                        </li>
                        <li>
                          <a href="#">Microsoft 365 for business</a>
                        </li>
                        <li>
                          <a href="#">Microsoft industry</a>
                        </li>
                        <li>
                          <a href="#">Microsoft Power Platform</a>
                        </li>
                        <li>
                          <a href="#">Microsoft 365</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li className="py-3">
                          <span>Developer & IT</span>
                        </li>
                        <li>
                          <a href="#">Developer Center</a>
                        </li>
                        <li>
                          <a href="#">Documentation</a>
                        </li>
                        <li>
                          <a href="#">Microsoft Learn</a>
                        </li>
                        <li>
                          <a href="#">Microsoft Tech Community</a>
                        </li>
                        <li>
                          <a href="#">Azure Marketplace</a>
                        </li>
                        <li>
                          <a href="#">AppSource</a>
                        </li>
                        <li>
                          <a href="#">Visual Studio</a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li className="py-3">
                          <span>Other</span>
                        </li>
                        <li>
                          <a href="#">Free downloads & security</a>
                        </li>
                        <li>
                          <a href="#">Education</a>
                        </li>
                        <li>
                          <a href="#">Gift Cards</a>
                        </li>
                        <li>
                          <a href="#">Licensing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="drop_foot text-center mt-2">
                    <a href="#">VIEW SITEMAP</a>
                  </div>
                </div>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Search
                </a>
                <a className="text-dark icon Search" href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Cart
                </a>
                <a className="text-dark icon Cart" href="">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Sign in
                </a>
                <a className="text-dark icon Sign_in" href="">
                  <i className="fa-solid fa-user-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm navbar-light ps-xxl-5 d-xxl-none d-block">
        <div className="container-fluid p-0 ps-xxl-4 ms-xxl-3">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <a className="navbar-brand p-0" href="#">
            <img src="img/logo.jpg" alt="" />
          </a>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Microsoft 365
                </a>
              </li>
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Windows
                </a>
              </li>
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Surface
                </a>
              </li>
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Xbox
                </a>
              </li>
              <li className="nav-item media_drop">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Software<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Windows Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      OneDrive
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Outlook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Skype
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      OneNote
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Teams
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PCs & Devices<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Shop Xbox
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Entertainment<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Xbox Game Pass Ultimate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Xbox Live Gold
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Xbox games
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      PC games
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Windows digital games
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Business<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Cloud
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Azure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dynamics 365
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft 365 for business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft industry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Power Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft 365
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Developer & IT<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Developer Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Learn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Microsoft Tech Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Azure Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      AppSource
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Visual Studio
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown media_drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Free downloads & security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Licensing
                    </a>
                  </li>
                </ul>
              </li>

              <div className="drop_foot media_drop border-dark">
                <a href="#">VIEW SITEMAP</a>
              </div>
            </ul>
          </div>

          <div>
            <ul className="navbar-nav second_nav">
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Search
                </a>
                <a className="text-dark icon Search" href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Cart
                </a>
                <a className="text-dark icon Cart" href="">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link d-xxl-block d-none" href="#">
                  Sign in
                </a>
                <a className="text-dark icon Sign_in" href="">
                  <i className="fa-solid fa-user-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*----------------------------------------------------------- navbar end -------------------------------------------------------------*/}

      <Slider />
      <Tools />
      <Surface />
      <Xbox />
      <For_business />
      <Earth_day />
      <Footer />
    </>
  );
}

export default Navbar;
