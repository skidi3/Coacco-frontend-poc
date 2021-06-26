import React from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import Swiper from "swiper";
import swiper from "swiper/bundle";

class Testimonial extends React.Component {
  componentDidMount() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "2",

      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
      },
    });

    var galleryTop = new Swiper(".swiper-container.testimonial", {
      speed: 500,
      spaceBetween: 50,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      direction: "vertical",
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  render() {
    return (
      <div class="sec-5">
        <section class="spacer">
          <div class="testimonial-section">
            <div class="testi-user-img">
              <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      class="u3"
                      src="https://md-aqil.github.io/images/2091127763_1_1_1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="u1"
                      src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="u2"
                      src="https://md-aqil.github.io/images/attractive-beautiful-beauty-1986684.jpg"
                      alt=""
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      class="u4"
                      src="https://images.unsplash.com/photo-1517347902462-b68a532b64a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="user-saying">
              <div class="swiper-container testimonial">
                <div class="swiper-wrapper ">
                  <div class="swiper-slide">
                    <div class="quote">
                      <img
                        class="quote-icon"
                        src="https://md-aqil.github.io/images/quote.png"
                        alt=""
                      />
                      <p>
                        “The facilities and hassle-free accommodation is what
                        makes CoAcco very interesting..“
                      </p>
                      <div class="name">-Nikhil-</div>
                      <div class="designation">Dummy position</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="quote">
                      <img
                        class="quote-icon"
                        src="https://md-aqil.github.io/images/quote.png"
                        alt=""
                      />

                      <p>
                        “My experience with OYO LIFE is amazing. The supervisor
                        and manager made sure that all issues are addressed
                        diligently and promptly..“
                      </p>
                      <div class="name">-Nikhil-</div>
                      <div class="designation">Dummy position</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="quote">
                      <img
                        class="quote-icon"
                        src="https://md-aqil.github.io/images/quote.png"
                        alt=""
                      />

                      <p>
                        “This is best and biggest unified platform for instant
                        online admission. We can easily take admission for any
                        course in any institute..“
                      </p>
                      <div class="name">-Nikhil-</div>
                      <div class="designation">Dummy position</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="quote">
                      <img
                        class="quote-icon"
                        src="https://md-aqil.github.io/images/quote.png"
                        alt=""
                      />

                      <p>
                        “This is best and biggest unified platform for instant
                        online admission. We can easily take admission for any
                        course in any institute..“
                      </p>
                      <div class="name">-Nikhil-</div>
                      <div class="designation">Dummy position</div>
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination swiper-pagination-white"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonial;
