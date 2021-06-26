import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

//Some dummy data
const tabSmall = Math.random();
const tabLarge = Math.random();
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: this.props.data,
    };
  }
  componentDidMount() {
    this.setCard();
  }

  setCard = () => {
    var el = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(el, {});
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var options = document.querySelectorAll("option");
      var instances = M.FormSelect.init(elems, options);
    });
  };
  render() {
    console.log(this.props.data, "testt");
    return (
      <div class="main">
        {console.log("props passed to card js:", this.props.data)}
        <div class="show-on-small hide-on-med-and-up">
          {this.props.data &&
            this.props.data.length &&
            this.props.data.map(
              ({
                title,
                price,
                property,
                address,
                image,
                rating,
                reviews,
                phonenumber,
              }) => (
                <div class="wrapper">
                  <div class="row">
                    <div class="col s12 m6 ">
                      <div class="card">
                        <div class="card-image">
                          {
                            <img
                              src={property?.propertyImage?.propertyImageOne}
                            />
                          }
                          <div class="pos-heart-favorite">
                            <div class="heart-favorite">
                              <i class="heart-favorite-icon"></i>
                              <span class="heart-favorite-span">liked!</span>
                            </div>
                          </div>
                        </div>

                        <div class="card-stacked">
                          <div class="card-content">
                            <div class="col">
                              <div class="card-title">
                                <h5 class="align-left truncate">
                                  {property?.propertyName}
                                </h5>
                              </div>
                              <div class="card-address">
                                <p
                                  class="align-left truncate tooltipped"
                                  data-tooltip={
                                    property?.propertyAddress?.address
                                  }
                                >
                                  {address}
                                </p>
                              </div>

                              <div class="tabset-sm">
                                <input
                                  type="radio"
                                  name="tabset-sm"
                                  id={property.companyId}
                                  aria-controls="Services-sm"
                                />
                                <label
                                  for={property?.companyId}
                                  class="tab-btn"
                                >
                                  <p>Services</p>
                                </label>

                                <input
                                  type="radio"
                                  name="tabset-sm"
                                  id={property?.companyId + tabSmall}
                                  aria-controls="Amenities-sm"
                                />
                                <label
                                  for={property?.companyId + tabSmall}
                                  class="tab-btn"
                                >
                                  <p>Amenities</p>
                                </label>

                                <div class="tab-panels-sm">
                                  <section
                                    id="Services-sm"
                                    class="tab-panel-sm"
                                  >
                                    <div class="services-tab-sm">
                                      {property?.services?.servicesList
                                        .slice(0, 6)
                                        .map((name) => (
                                          <i class="material-icons margin ">
                                            {name}
                                          </i>
                                        ))}
                                      <a class="margin">
                                        +
                                        {
                                          property?.services?.servicesList
                                            ?.length
                                        }{" "}
                                        more
                                      </a>
                                    </div>
                                  </section>
                                  <section
                                    id="Amenities-sm"
                                    class="tab-panel-sm"
                                  >
                                    <div class="amenities-tab-sm">
                                      {property?.amenities?.amenities
                                        .slice(0, 6)
                                        .map((name) => (
                                          <i class="material-icons margin ">
                                            {name}
                                          </i>
                                        ))}
                                      <a class="margin">
                                        +
                                        {property?.amenities?.amenities?.length}{" "}
                                        more
                                      </a>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                            <div class="gender-icons">
                              {property?.propertyType === "girls" && (
                                <i
                                  class="fa fa-2x fa-female "
                                  aria-hidden="true"
                                ></i>
                              )}
                              {property?.propertyType === "boys" && (
                                <i
                                  class="fa fa-2x fa-male "
                                  aria-hidden="true"
                                ></i>
                              )}
                            </div>
                          </div>

                          <div class="card-action ">
                            <div class="card-price-sm">
                              <h5 class="align-left amount">
                                <p>
                                  Average price <br />₹
                                  {property?.propertyDescription?.price} /mo
                                </p>
                              </h5>
                            </div>

                            <div class="valign-wrapper">
                              {/* <button
                                class="detail-button-sm btn "
                                type="submit"
                                name="action"
                                data-tooltip={phonenumber}
                              >
                                Details
                              </button> */}
                              <Link to={`/list/${property.companyId}`}>
                                <button
                                  class="valign-wrapper btn indigo"
                                  type="submit"
                                  name="action"
                                >
                                  <a> Details</a>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        <div class="hide-on-small-only">
          {this.props.data &&
            this.props.data.length &&
            this.props.data.map(
              ({
                index,
                id,
                companyName,
                property,
                address,
                phonenumber,
                price,
                newprice,
                image,
                rating,
                reviews,
                tab1,
                tab2,
              }) => (
                <div class="wrapper wrapper-lg">
                  <div class="col-lg col s12 m6">
                    <div class="card horizontal small">
                      <div class="card-image">
                        {
                          <img
                            src={property?.propertyImage?.propertyImageOne}
                          />
                        }

                        <div class="pos-heart-favorite">
                          <div class="heart-favorite">
                            <i class="heart-favorite-icon"></i>
                            <span class="heart-favorite-span">liked!</span>
                          </div>
                        </div>
                      </div>

                      <div class="card-stacked">
                        <div class="card-content">
                          <div class="card-left">
                            <div class="  card-title">
                              <h5 class="align-left  truncate">
                                {property?.propertyName}
                              </h5>
                            </div>
                            <div class="card-address">
                              <p
                                class="align-left truncate tooltipped"
                                data-tooltip={
                                  property?.propertyAddress?.address
                                }
                              >
                                {address}
                              </p>
                            </div>
                            <br />
                            <div class="review-component valign-wrapper">
                              <a class="valign-wrapper btn-small card-rating">
                                <p class="rating-text">
                                  {property?.propertyDescription?.rating}
                                </p>
                                <i class="material-icons small left">star</i>
                              </a>
                              <a class="total-reviews margin-lg">
                                <a>({reviews} Ratings)</a>
                              </a>
                            </div>
                            <div class="tabset-lg">
                              <input
                                type="radio"
                                name="tabset-lg"
                                id={property?.companyId + (tabLarge - tabSmall)}
                                aria-controls="Services-lg"
                              />
                              <label
                                for={
                                  property?.companyId + (tabLarge - tabSmall)
                                }
                                class="tab-btn"
                              >
                                <p>Services</p>
                              </label>

                              <input
                                type="radio"
                                name="tabset-lg"
                                id={property?.companyId + tabLarge}
                                aria-controls="Amenities-lg"
                              />
                              <label
                                for={property?.companyId + tabLarge}
                                class="tab-btn"
                              >
                                <p>Amenities</p>
                              </label>

                              <div class="tab-panels-lg">
                                <section id="Services-lg" class="tab-panel-lg">
                                  <div class="services-tab-lg">
                                    {property?.services?.servicesList
                                      .slice(0, 6)
                                      .map((name) => (
                                        <i class="material-icons margin ">
                                          {name}
                                        </i>
                                      ))}
                                    <a class="margin">
                                      +
                                      {property?.services?.servicesList?.length}{" "}
                                      more
                                    </a>
                                  </div>
                                </section>
                                <section id="Amenities-lg" class="tab-panel-lg">
                                  <div class="amenities-tab-lg">
                                    {property?.amenities?.amenities
                                      .slice(0, 6)
                                      .map((name) => (
                                        <i class="material-icons margin ">
                                          {name}
                                        </i>
                                      ))}
                                    <a class="margin">
                                      +{property?.amenities?.amenities?.length}{" "}
                                      more
                                    </a>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                          <div class="card-right">
                            <div class="card-price">
                              <div class="style-1">
                                {/* <del>
                                  <span class="align-right amount">
                                     {oldprice} 
                                  </span>
                                </del> */}
                                <ins>
                                  <span class="align-right amount-lg">
                                    <h6>Average price</h6> ₹
                                    {property?.propertyDescription?.price} /mo
                                  </span>
                                </ins>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card-action ">
                          <div class="collection valign-wrapper">
                            {/* <i
                              class="fa fa-2x fa-map-marker fa-align-center map-icon"
                              aria-hidden="true"
                            ></i> */}

                            <a href="#!" class="collection-item truncate ">
                              {property?.propertyLandmarks?.superMarket} <br />
                              {property?.propertyLandmarks?.marketDis} KM
                            </a>
                            <a href="#!" class="collection-item truncate">
                              {property?.propertyLandmarks?.heartOfTheCity}
                              <br />
                              {
                                property?.propertyLandmarks?.heartOfTheCityDis
                              }{" "}
                              KM
                            </a>
                            <a href="#!" class="collection-item truncate">
                              {property?.propertyLandmarks?.eduInstitute}
                              <br />
                              {property?.propertyLandmarks?.eduInstituteDis} KM
                            </a>
                          </div>
                          <div class="details valign-wrapper">
                            <Link to={`/list/${property.companyId}`}>
                              <button
                                class="valign-wrapper btn indigo"
                                type="submit"
                                name="action"
                              >
                                <a> Details</a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        {/* <div class="pagination-wrapper">
          <ul class="pagination">
            <li class="disabled">
              <a href="#!">
                <i class="material-icons">chevron_left</i>
              </a>
            </li>
            <li class="active">
              <a href="#!">1</a>
            </li>
            <li class="waves-effect">
              <a href="#!">2</a>
            </li>
            <li class="waves-effect">
              <a href="#!">3</a>
            </li>
            <li class="waves-effect">
              <a href="#!">4</a>
            </li>
            <li class="waves-effect">
              <a href="#!">5</a>
            </li>
            <li class="waves-effect">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Card;
