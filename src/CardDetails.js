import React, { Component } from "react";
import MapContainer from "./MapContainer";
import M from "materialize-css";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo.png";
import Slider from "react-slick";
import axios from "axios";
import $ from "jquery";

export default class ListingDetail extends Component {
  state = {
    cardDetails: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    if (!id) {
      return;
    }
    axios
      .post(`http://localhost:8008/api/property/?Id=${id}`, id)
      .then((res) => {
        console.log("res", res.data[0]);
        this.setState({
          cardDetails: res.data,
        });
      })
      .catch((error) => console.log(error.response));
    setTimeout(() => {}, 500);

    M.AutoInit();
    // document.addEventListener("DOMContentLoaded", function () {
    //   var elems = document.querySelectorAll(".slider");
    //   var options = { indicators: true, height: 400, interval: 2000 };
    //   var instances = M.Slider.init(elems, options);
    // });
    // var el = document.querySelectorAll("tabs");
    // var options = { duration: 400 };
    // var instance = M.Tabs.init(el, options);
  }

  render() {
    var settings = {
      dots: true,
      //adaptiveHeight: true,
      //focusOnSelect: true,
    };
    return (
      <div className="listcontainer">
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
        <div className="pgdetail-header">
          <div className="section1">
            {/* <a class="valign-wrapper btn-small card-rating">
              <p class="rating-text">
                {
                  this.state.cardDetails[0]?.property?.propertyDescription
                    ?.rating
                }
              </p>
              <i class="material-icons small left">star</i>
            </a> */}
            <h3>{this.state.cardDetails[0]?.property?.propertyName}</h3>

            <h6
              className="truncate tooltipped"
              data-tooltip={
                this.state.cardDetails[0]?.property?.propertyAddress?.address
              }
            >
              {this.state.cardDetails[0]?.property?.propertyAddress?.address}
            </h6>
            <a class="modal-btn indigo btn modal-trigger" href="#modal1">
              Contact
            </a>

            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Contact owner</h4>
                <p>For more details call us or sms us.</p>
                <div class="row contact-us-btn">
                  <a href="tel:1-562-867-5309" class="btn indigo margin-lg">
                    <span class="contact-btn-text">Call us</span>{" "}
                    <i class="material-icons">phone</i>
                  </a>
                  <a
                    href="sms:+6612345678?body=this is the text message to send"
                    class="btn indigo margin-lg"
                  >
                    <span class="contact-btn-text">Send Text</span>{" "}
                    <i class="material-icons">sms</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="type">
              For {this.state.cardDetails[0]?.property?.propertyType}
            </div>
            <h5>{this.state.cardDetails[0]?.category}</h5>
            <h5>
              Starts from ₹
              {this.state.cardDetails[0]?.property?.propertyDescription?.price}/
              mo
            </h5>
            <h6>Occupancy Type: Double </h6>
          </div>
        </div>

        <hr class="gray-line" />

        {/* <div id="container-details-shadow" class="row container-details">
          <div className="pgdetails_middle">
            <ul className="tabs-details">
              <li className="tab-details">
                <a href="#test1">Sharing Options</a>
              </li>
              <li className="tab-details">
                <a href="#test2">Amenities</a>
              </li>
              <li className="tab-details">
                <a href="#test3">Services</a>
              </li>
              <li className="tab-details">
                <a href="#test4">Nearby Locations</a>
              </li>
              <li className="tab-details">
                <a href="#test5">House Rules</a>
              </li>
            </ul>
          </div>
        </div> */}

        <div id="hero-image-details" class="row container-details">
          <Slider {...settings}>
            <div>
              <img
                src="https://placeimg.com/800/400/people"
                class="materialboxed"
              />
            </div>
            <div>
              <img
                src="https://placeimg.com/800/400/animals"
                class="materialboxed"
              />
            </div>
            <div>
              <img
                src="https://placeimg.com/800/400/nature"
                class="materialboxed"
              />
            </div>
            <div>
              <img
                src="https://placeimg.com/800/400/tech"
                class="materialboxed"
              />
            </div>
          </Slider>
        </div>

        <div id="test1" className="container-details">
          <div className="detail-section-title">Sharing Options</div>
          <div class="collection" id="collection-price">
            {this.state.cardDetails[0]?.property?.propertyDescription
              ?.oneSharingVacant != "0" && (
              <a href="#!" class="collection-item" id="collection-item-price">
                <div class="badge">
                  <h6>One Sharing Room</h6>
                </div>
                <br />
                <p>
                  ₹
                  {
                    this.state.cardDetails[0]?.property?.propertyDescription
                      ?.oneSharingRent
                  }
                  /mo
                </p>
              </a>
            )}

            {this.state.cardDetails[0]?.property?.propertyDescription
              ?.twoSharingVacant != "0" && (
              <a href="#!" class="collection-item" id="collection-item-price">
                <div class="badge">
                  <h6>Two Sharing Room</h6>
                </div>
                <br />
                <p>
                  ₹
                  {
                    this.state.cardDetails[0]?.property?.propertyDescription
                      ?.doubleSharingRent
                  }
                  /mo
                </p>
              </a>
            )}
            {this.state.cardDetails[0]?.property?.propertyDescription
              ?.threeSharingVacant != "0" && (
              <a href="#!" class="collection-item" id="collection-item-price">
                <div class="badge">
                  <h6>Three Sharing Room</h6>
                </div>
                <br />
                <p>
                  ₹
                  {
                    this.state.cardDetails[0]?.property?.propertyDescription
                      ?.tripleSharingRent
                  }
                  /mo
                </p>
              </a>
            )}
          </div>
        </div>
        <div id="test2" className="container-details">
          <div className="detail-section-title">Common Area And Amenities</div>

          <ul className="amenties-list">
            {this.state.cardDetails[0]?.property?.amenities?.amenities.map(
              (icon, index) => {
                const name = this.state.cardDetails[0]?.property?.amenities
                  ?.amenitiesname[index];
                return (
                  <li class="amenties-list-item">
                    <i class="material-icons margin ">{icon}</i>
                    <p>{name}</p>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div id="test3" className="container-details">
          <div className="detail-section-title">Services</div>
          <ul className="amenties-list">
            {this.state.cardDetails[0]?.property?.services?.servicesList.map(
              (icon, index) => {
                const name = this.state.cardDetails[0]?.property?.services
                  ?.servicesName[index];
                return (
                  <li class="amenties-list-item">
                    <i class="material-icons margin ">{icon}</i>
                    <p>{name}</p>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        {/* <div id="test5" className="container-details">
          <div className="detail-section-title">Other Charges</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <img src="images/Deposit.png"></img>
              <h6>Deposit</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/Maintenance.png"></img>
              <h6>Maintanence</h6>
            </li>
          </ul>
        </div> */}

        {/* <div id="test6" className="container-details">
          <div className="detail-section-title">Restrictions</div>
          <ul className="amenties-list">
            {this.state.cardDetails[0]?.property?.propertyDescription?.restrictions.map(
              (restriction) => (
                <li>{restriction}</li>
              )
            )}
          </ul>
        </div> */}

        <div id="test4" className="container-details">
          <div className="detail-section-title">Nearby Locations</div>
          <div class="collection" id="collection-price">
            <a class="collection-item" id="collection-item-price">
              <h6 className="nearby-item">
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.eduInstitute
                }
              </h6>
              <p>
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.eduInstituteDis
                }{" "}
                KM
              </p>
            </a>
            <a class="collection-item" id="collection-item-price">
              <h6 className="nearby-item">
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.heartOfTheCity
                }
              </h6>
              <p>
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.heartOfTheCityDis
                }{" "}
                KM
              </p>
            </a>
            <a class="collection-item" id="collection-item-price">
              <h6 className="nearby-item">
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.superMarket
                }
              </h6>
              <p>
                {
                  this.state.cardDetails[0]?.property?.propertyLandmarks
                    ?.marketDis
                }{" "}
                KM
              </p>
            </a>
          </div>
        </div>

        <div id="test5" className="map-container">
          <div id="map">
            <MapContainer
              lat={
                this.state.cardDetails[0]?.property?.propertyDescription
                  ?.latitude
              }
              lon={
                this.state.cardDetails[0]?.property?.propertyDescription
                  ?.longitude
              }
              name={this.state.cardDetails[0]?.property?.propertyName}
            />
          </div>
        </div>
        <div id="test8" className="container-details"></div>
      </div>
    );
  }
}
