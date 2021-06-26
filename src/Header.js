import React from "react";
import M from "materialize-css";
import $ from "jquery";
import SearchOptions from "./SearchOptions";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo.png";

const data = [
  {
    name: "Sikar",
    localities: [
      "Piprali Road",
      "Nawalgarh-Road",
      "Jhunjhunu-Bypass",
      "Salasar-Bus Stand",
      "Radhakishanpura",
      "Near GCI-Medical",
      "Near GCI-JEE",
      "Near Allen",
      "Near Matrix",
      "Near CLC",
      "Jaipur Road",
      "Todi Nagar",
      "Near Medical College",
    ],
  },
  {
    name: "Patna",
    localities: [
      "Rajendra Nagar",
      "Kankarbagh",
      "Boring Road",
      "Bailey Road",
      "Gandhi Maidan",
      "Ashok Raj Path",
      "Jagdeo Path",
      "Fulvari Shareef",
      "Anisabad",
      "Kumhrar",
      "Mithapur",
      "Khazanchi Road",
      "Raza Bazar",
      "Gardanibagh",
    ],
  },
];

class Header extends React.Component {
  componentDidMount() {
    M.AutoInit();

    $("#target").hide();
    $(".toggle").click(function () {
      $("#target").toggle(300);
    });
    $(".close").click(function () {
      $("#target").hide(300);
    });
    $(".search-icon").show();
  }

  setSelectedCity = (e) => {
    this.props.setCity(e.target.value);
  };

  setSelectedLocality = (e) => {
    //e.preventDefault();
    this.props.setLocality(e.target.value);
  };

  render() {
    return (
      <div class="sec-1">
        <div class="navbar-fixed ">
          <nav class="nav-home ">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">
                <img src={logo} width="110" height="60" alt="logo" />
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons">menu</i>
              </a>
              <ul class="nav-list right hide-on-med-and-down">
                <li>
                  <a href="/privacy-policy">About us</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Offers</a>
                </li>
                <li>
                  <a href="/">Login/Sign Up</a>
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
        <h1 class="landing-page-heading">
          Come as a guest,
          <br /> Live as a family.
        </h1>
        <form class="search-container">
          <nav class="nav2">
            <div class="nav-wrapper">
              <form>
                <div class="search-bar-home input-field">
                  <input
                    class="toggle search-bar-home-input"
                    id="search"
                    type="search"
                    required
                    placeholder="Enter any Neighbourhood, Feature, Zip Code"
                  ></input>

                  <button class="search-btn">SEARCH</button>

                  <i class="search-icon material-icons">search</i>
                </div>
              </form>
            </div>
          </nav>
          {/*search overlay*/}
          <div id="target" class="search-filters-details">
            <div class="overlay-wrapper">
              <div class="top">
                <a class="right-align-close">
                  <i class="material-icons medium close">close</i>
                </a>
              </div>
              <br />
              <div class="overlay-content">
                <p>Choose City</p>
                <div class="input-field col s12">
                  <select onChange={this.setSelectedCity} id="localities">
                    <option value="" disabled selected>
                      Choose your option
                    </option>
                    <option value="Sikar">Sikar</option>
                    <option value="Patna">Patna</option>
                    <option value="Jaipur">Jaipur</option>
                  </select>
                </div>
                <div class="localities-display">
                  {this.props.city != "" && <p>Popular localities in:</p>}

                  {data.map(
                    (city) =>
                      city.name === this.props.city &&
                      city.localities.map((locality) => (
                        <Link to={`/pgs/${this.props.city}/${locality}`}>
                          <button
                            class="btn--popular-locations btn--ghost"
                            value={locality}
                            onClick={this.setSelectedLocality}
                          >
                            {locality}
                          </button>
                        </Link>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
