import React, { Component } from "react";

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   ButtonExpand.js
 *
 *   Desc:   Checkbox widget that implements ARIA Authoring Practices
 *           for a menu of links
 */

/*
 *   @constructor ButtonExpand
 *
 *
 */
var ButtonExpand = function (domNode) {
  this.domNode = domNode;

  this.keyCode = Object.freeze({
    RETURN: 13,
  });
};

ButtonExpand.prototype.init = function () {
  this.controlledNode = false;

  var id = this.domNode.getAttribute("aria-controls");

  if (id) {
    this.controlledNode = document.getElementById(id);
  }

  this.domNode.setAttribute("aria-expanded", "false");
  this.hideContent();

  this.domNode.addEventListener("keydown", this.handleKeydown.bind(this));
  this.domNode.addEventListener("click", this.handleClick.bind(this));
  this.domNode.addEventListener("focus", this.handleFocus.bind(this));
  this.domNode.addEventListener("blur", this.handleBlur.bind(this));
};

ButtonExpand.prototype.showContent = function () {
  if (this.controlledNode) {
    this.controlledNode.style.display = "block";
  }
};

ButtonExpand.prototype.hideContent = function () {
  if (this.controlledNode) {
    this.controlledNode.style.display = "none";
  }
};

ButtonExpand.prototype.toggleExpand = function () {
  if (this.domNode.getAttribute("aria-expanded") === "true") {
    this.domNode.setAttribute("aria-expanded", "false");
    this.hideContent();
  } else {
    this.domNode.setAttribute("aria-expanded", "true");
    this.showContent();
  }
};

/* EVENT HANDLERS */

ButtonExpand.prototype.handleKeydown = function (event) {
  console.log("[keydown]");

  switch (event.keyCode) {
    case this.keyCode.RETURN:
      this.toggleExpand();

      event.stopPropagation();
      event.preventDefault();
      break;

    default:
      break;
  }
};

ButtonExpand.prototype.handleClick = function (event) {
  this.toggleExpand();
};

ButtonExpand.prototype.handleFocus = function (event) {
  this.domNode.classList.add("focus");
};

ButtonExpand.prototype.handleBlur = function (event) {
  this.domNode.classList.remove("focus");
};

/* Initialize Hide/Show Buttons */

window.addEventListener(
  "load",
  function (event) {
    var buttons = document.querySelectorAll(
      "button[aria-expanded][aria-controls]"
    );

    for (var i = 0; i < buttons.length; i++) {
      var be = new ButtonExpand(buttons[i]);
      be.init();
    }
  },
  false
);

class FAQ extends Component {
  render() {
    return (
      <dl class="faq">
        <h4>FAQs</h4>
        <h6>Click on below to know</h6>
        <dt>
          <button aria-expanded="false" aria-controls="faq1_desc">
            Question Number 1: What do I do if I have a permit for an assigned
            lot, but can't find a space there?
          </button>
        </dt>
        <dd>
          <p id="faq1_desc" class="desc">
            Answer: Park at the nearest available parking meter without paying
            the meter and call 999-999-9999 to report the problem. We will note
            and approve your alternate location and will investigate the cause
            of the shortage in your assigned facility.
          </p>
        </dd>
        <dt>
          <button aria-expanded="false" aria-controls="faq2_desc">
            Question Number 2: What do I do if I lose my permit or if my permit
            is stolen?
          </button>
        </dt>
        <dd>
          <p id="faq2_desc" class="desc">
            Answer: You should come to the Parking office and report the loss.
            There is a fee to replace your lost permit. However, if your permit
            was stolen, a copy of a police report needs to be submitted along
            with a stolen parking permit form for a fee replacement exemption.
          </p>
        </dd>
        <dt>
          <button aria-expanded="false" aria-controls="faq3_desc">
            Question Number 3: Is there free parking on holidays?
          </button>
        </dt>
        <dd>
          <p id="faq3_desc" class="desc">
            Answer: All facilities are restricted from 2:00 am - 6:00 am on all
            days. No exceptions are made for any holiday or recess except those
            officially listed as a<q>Holidays</q>
            in the calendar. Please note: 24-hour rental spaces, 24-hour rental
            lots, and disabled parking is enforced at all times.
          </p>
        </dd>
        <dt>
          <button aria-expanded="false" aria-controls="faq4_desc">
            Question Number 4: Do all parking facilities have the same
            enforcement rules?
          </button>
        </dt>
        <dd>
          <p id="faq4_desc" class="desc">
            Answer: Some parking facility restrictions differ from others. Be
            sure to take note of the signs at each lot entrance.
          </p>
        </dd>
      </dl>
    );
  }
}

export default FAQ;
