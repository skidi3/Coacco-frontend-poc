import React, { Component } from "react";
import PropTypes from "prop-types";
import affordable from "./assets/img/affordable.jpg";
import comfort from "./assets/img/com.jpg";
import security from "./assets/img/security.jpg";

class FeatureCards extends Component {
  componentDidMount() {}

  render() {
    return (
      <div class="sec-3">
        <div class="sec-3-container">
          <h1 class="section-heading center-align">Why Coacco?</h1>
          <div class="grid">
            <div class="grid__item">
              <article class="pantone-card pantone-card--white">
                <div class="pantone-card__header">
                  <img src={affordable} alt="Affordable"></img>
                </div>
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Affordable</h1>
                  <br />
                  <p class="pantone_card_content">
                    Just one step away from the best experience to discover
                    better equiped, easily accessible and super affordable range
                    of hostels in your city.
                  </p>
                </div>
              </article>
            </div>
            <div class="grid__item">
              <article class="pantone-card pantone-card--white">
                <div class="pantone-card__header">
                  <img src={comfort} alt="Affordable"></img>
                </div>
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Comfort</h1>
                  <br />
                  <p class="pantone_card_content">
                    We help you to find the best hostels and pgs in the city
                    from the comfort of your sofa. You are just one click away.
                  </p>
                </div>
              </article>
            </div>
            <div class="grid__item">
              <article class="pantone-card pantone-card--white">
                <div class="pantone-card__header">
                  <img src={security} alt="Affordable"></img>
                </div>
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Security</h1>
                  <br />
                  <p class="pantone_card_content">
                    Hostels from all around are opening their virtual doors
                    through coacco. We believe in providing safe environment to
                    access facilities virtually.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureCards;
