import React from "react";
import M from "materialize-css";
import $ from "jquery";

class Navbar extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
          $("nav").addClass("indigo darken-1");
          $(".nav2").removeClass("indigo darken-1");
        } else {
          $("nav").removeClass("indigo darken-1");
        }
      });
    });
  }
  render() {
    return (
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              LOGO
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="nav-list right hide-on-med-and-down">
              <li>
                <a href="#">Advertise with us</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Login/Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
