import React from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import "slick-carousel/slick/slick.min.js";
import "jquery-mousewheel/jquery.mousewheel.js";
import Slider from "react-slick";
import splitimage1 from "./assets/img/slideshow-1.jpg";
import splitimage2 from "./assets/img/slideshow-2.jpg";
import splitimage3 from "./assets/img/slideshow-3.jpg";

class SplitSlider extends React.Component {
  componentDidMount() {
    let $slider = $(".slideshow .slider"),
      maxItems = $(".item", $slider).length,
      dragging = false,
      tracking,
      rightTracking;

    let $sliderRight = $(".slideshow")
      .clone()
      .addClass("slideshow-right")
      .appendTo($(".split-slideshow"));

    let rightItems = $(".item", $sliderRight).toArray();
    let reverseItems = rightItems.reverse();
    $(".slider", $sliderRight).html("");
    for (let i = 0; i < maxItems; i++) {
      $(reverseItems[i]).appendTo($(".slider", $sliderRight));
    }

    $slider.addClass("slideshow-left");

    $(".slideshow-left")
      .slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if (
          currentSlide > nextSlide &&
          nextSlide == 0 &&
          currentSlide == maxItems - 1
        ) {
          $(".slideshow-right .slider").slick("slickGoTo", -1);
          $(".slideshow-text").slick("slickGoTo", maxItems);
        } else if (
          currentSlide < nextSlide &&
          currentSlide == 0 &&
          nextSlide == maxItems - 1
        ) {
          $(".slideshow-right .slider").slick("slickGoTo", maxItems);
          $(".slideshow-text").slick("slickGoTo", -1);
        } else {
          $(".slideshow-right .slider").slick(
            "slickGoTo",
            maxItems - 1 - nextSlide
          );
          $(".slideshow-text").slick("slickGoTo", nextSlide);
        }
      })
      .on("mousewheel", function (event) {
        event.preventDefault();
        if (event.deltaX > 0 || event.deltaY < 0) {
          $(this).slick("slickNext");
        } else if (event.deltaX < 0 || event.deltaY > 0) {
          $(this).slick("slickPrev");
        }
      })
      .on("mousedown touchstart", function () {
        dragging = true;
        tracking = $(".slick-track", $slider).css("transform");
        tracking = parseInt(tracking.split(",")[5]);
        rightTracking = $(".slideshow-right .slick-track").css("transform");
        rightTracking = parseInt(rightTracking.split(",")[5]);
      })
      .on("mousemove touchmove", function () {
        if (dragging) {
          var newTracking = $(".slideshow-left .slick-track").css("transform");
          newTracking = parseInt(newTracking.split(",")[5]);
          var diffTracking = newTracking - tracking;
          $(".slideshow-right .slick-track").css({
            transform:
              "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")",
          });
        }
      })
      .on("mouseleave touchend mouseup", function () {
        dragging = false;
      });

    $(".slideshow-right .slider").slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 950,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      initialSlide: maxItems - 1,
    });
    $(".slideshow-text").slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 900,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    });
  }
  render() {
    return (
      <div class="sec-2">
        <div class="split-slideshow">
          <div class="slideshow">
            <div class="slideshow-position">
              <div class="slider">
                <div class="item slick-slider1-reset-margin">
                  <img src={splitimage1} alt="cover image" />
                </div>
                <div class="item slick-slider1-reset-margin">
                  <img src={splitimage2} alt="cover image" />
                </div>
                <div class="item slick-slider1-reset-margin">
                  <img src={splitimage3} alt="cover image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplitSlider;
