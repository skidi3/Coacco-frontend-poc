import React, { Component } from "react";
import Card from "./Card";
import Filters from "./Filters";
import Style from "./assets/style.css";
import logo from "./assets/img/logo.png";
import { Link } from "react-router-dom";

class ListCards extends Component {
  componentDidMount() {
    const city = this.props.match.params.city;
    const locality = this.props.match.params.locality;
    this.props.getData(city, locality);
  }
  render() {
    return (
      <div>
        <div class="navbar-fixed indigo">
          <nav>
            <div class="nav-wrapper indigo">
              <a href="#!" class="brand-logo">
                <Link to="/">
                  <img src={logo} width="110" height="60" alt="logo" />
                </Link>
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
        </div>

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
        <div className="form-wrapper" style={{ Style }}>
          <div className="filter-container">
            <Filters
              handleFilterData={this.props.handleFilterData}
              isFilterDataPosted={this.props.isFilterDataPosted}
              categoryHandler={this.props.categoryHandler}
              genderHandler={this.props.genderHandler}
              priceHandler={this.props.priceHandler}
              minPrice={this.props.minPrice}
              maxPrice={this.props.maxPrice}
              ratingHandler={this.props.ratingHandler}
              occupancyHandler={this.props.occupancyHandler}
              amenetiesHandler={this.props.amenetiesHandler}
              submitFilterData={this.props.submitFilterData}
              resetFilterData={this.props.resetFilterData}
            />
          </div>
          <div className="card-container">
            <Card data={this.props.data} key={this.props.key} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListCards;
