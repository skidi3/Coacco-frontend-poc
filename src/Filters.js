import React from "react";
import ReactDOM from "react-dom";
import M from "materialize-css";
import $ from "jquery";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Button, Card, Row, Col, Input, Modal, Icon } from "react-materialize";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import * as wNumb from "wnumb";

import "nouislider/distribute/nouislider.css";

class Filters extends React.Component {
  componentDidMount() {
    $(".noUi-handle").addClass(".noUi-active");
    M.AutoInit();
    var slider = document.getElementById("slider-list");
    noUiSlider.create(slider, {
      start: [1001, 9999],
      connect: true,
      tooltips: true,
      step: 1,
      range: {
        min: 1000,
        max: 10000,
      },
      format: wNumb({
        decimals: 0,
      }),
    });
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <form onSubmit={this.props.submitFilterData} id="form">
        <div class="filter-wrapper">
          <p>
            <b>Type</b>
          </p>

          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-category--filter "
                    id="checkbox-reset-pg"
                    name="PG"
                    value="PG"
                    onChange={this.props.categoryHandler}
                  />
                  <span>PG</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-category--filter"
                    id="checkbox-reset-hostel"
                    name="Hostel"
                    value="Hostel"
                    onChange={this.props.categoryHandler}
                  />
                  <span>Hostel</span>
                </label>
              </p>
            </form>
          </div>
          {/* <br /> */}

          <p>
            <b>Gender</b>
          </p>
          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    type="radio"
                    class="with-gap"
                    id="radio-reset-gender-boys"
                    value="boys"
                    name="by-gender"
                    onChange={this.props.genderHandler}
                  />
                  <span>Boys only</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="radio"
                    class="with-gap"
                    id="radio-reset-gender-girls"
                    value="girls"
                    name="by-gender"
                    onChange={this.props.genderHandler}
                  />
                  <span>Girls only</span>
                </label>
              </p>
            </form>
          </div>
          {/* <br /> */}

          <p>
            <b>Monthly Rent</b>
          </p>
          <div class="price-filter-wrapper" onClick={this.props.priceHandler}>
            {/* <br /> */}
            <div class="input-field col s12 by-price ">
              <div id="slider-list"></div>
            </div>
          </div>
          {/* <div class="row">
            <h5 class="left-align">Min: {this.props.minPrice}</h5>
            <h5 class="right-align">Max: {this.props.maxPrice}</h5>
          </div> */}
          {/* <br /> */}

          <p>
            <b>Ratings</b>
          </p>
          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    name="rating"
                    type="radio"
                    class="with-gap"
                    id="radio-reset-rating-5"
                    value="5"
                    onChange={this.props.ratingHandler}
                  />
                  <span>5 star and above</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="rating"
                    type="radio"
                    class="with-gap"
                    id="radio-reset-rating-4"
                    value="4"
                    onChange={this.props.ratingHandler}
                  />
                  <span>4 star and above</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="rating"
                    type="radio"
                    class="with-gap"
                    id="radio-reset-rating-3"
                    value="3"
                    onChange={this.props.ratingHandler}
                  />
                  <span>3 star and above</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="rating"
                    type="radio"
                    class="with-gap"
                    id="radio-reset-rating-2"
                    value="2"
                    onChange={this.props.ratingHandler}
                  />
                  <span>2 star and above</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="rating"
                    type="radio"
                    class="with-gap"
                    id="radio-reset-rating-1"
                    value="1"
                    onChange={this.props.ratingHandler}
                  />
                  <span>1 star and above</span>
                </label>
              </p>
            </form>
          </div>
          {/* <br /> */}

          {/* <p>
            <b>BY OCCUPANCY</b>
          </p>
          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Single"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Single</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Double"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Double</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Triple"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Triple</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in  by-occupancy--filter"
                    value="Quadruple"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Quadruple</span>
                </label>
              </p>
            </form>
          </div> */}
          {/* <br /> */}

          <p>
            <b>Amenities</b>
          </p>
          <div class="input-field col s12">
            <select
              multiple
              id="amenities"
              // ref="testSelect"
              onChange={this.props.amenitiesHandler}
            >
              <option name="ac" value="ac" id="reset-amenities-ac">
                AC
              </option>
              <option name="washingmachine" value="washingmachine">
                Washing Machine
              </option>
              <option name="kitchen" value="kitchen">
                Kitchen
              </option>
              <option name="fridge" value="fridge">
                Fridge
              </option>
              <option name="wifi" value="wifi">
                WiFi
              </option>
              <option name="furniture" value="furniture">
                Furniture
              </option>
              <option name="laundry" value="laundry">
                Laundry
              </option>
              <option name="cctv" value="cctv">
                CCTV
              </option>
              <option name="cab" value="cab">
                Cabs
              </option>
              <option name="store" value="store">
                Store
              </option>
            </select>
          </div>
          {/* <br /> */}
          <div class="filter-button">
            <button
              class="filter-button-submit btn  indigo"
              type="submit"
              onClick={this.props.submitFilterData}
            >
              Submit
            </button>
            <button
              id="clear-button"
              class="filter-button-reset btn indigo"
              type="reset"
              onClick={this.props.resetFilterData}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Filters;
