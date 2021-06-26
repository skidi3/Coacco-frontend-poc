import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import Style from "./assets/style.css";
import Header from "./Header";
import HeaderStyle from "./assets/header.css";
import SplitSlider from "./SplitSlider";
import SplitSliderStyle from "./assets/splitslider.css";
import FeatureCards from "./FeatureCards";
import FeatureCardsStyle from "./assets/featurecards.css";
import Testimonials from "./Testimonial";
import TestimonialsStyle from "./assets/testimonial.css";
import Footer from "./Footer";
import FooterStyle from "./assets/footer.css";
import CardDetailsStyle from "./assets/carddetails.css";
import MapStyle from "./assets/maps.css";
// import AboutUs from "./AboutUs";
import PrivacyPolicy from "./PrivacyPolicy";
import PrivacyPolicyStyle from "./assets/PrivacyPolicy.css";
import Terms from "./Terms";
import TermsStyle from "./assets/Terms.css";
import ContactUs from "./ContactUs";
import ContactUsStyle from "./assets/contact.css";
import FAQ from "./FAQ";
import FAQStyle from "./assets/faq.css";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import logo from "./assets/img/logo.png";
import { Link } from "react-router-dom";
import ListCards from "./ListCards";
import Collaborators from "./Collaborators";
import CollaboratorsStyle from "./assets/collaborators.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      cardData: [],
      allData: [],
      filteredData: [],
      isLoading: false,
      category: [],
      gender: "",
      min: "",
      max: "",
      rating: "",
      occupancy: [],
      amenities: [],
      isFilterDataPosted: false,
      selectedCity: "",
      selectedLocality: "",
    };
  }

  componentDidMount() {
    //this.getData();
  }

  setCity = (event) => {
    this.setState({ selectedCity: event });
  };

  setLocality = (event) => {
    this.setState({ selectedLocality: event });
  };

  // getData = (e) => {
  //   //const city = this.state.selectedCity;
  //   //const landmark = this.state.selectedLocality;
  //   axios
  //     .get("http://localhost:8008/api/all")
  //     .then((response) => {
  //       let tempArray = [];
  //       tempArray.push(response.data);
  //       console.log(tempArray, "temparray");
  //       this.setState({ allData: tempArray, cardData: tempArray }, () =>
  //         console.log(this.state.allData)
  //       );
  //       this.setState({ isLoading: false });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  getData = async (city, locality) => {
    const data = { City: city, Landmark: locality };
    const formData = new FormData();
    formData.append("City", city);
    formData.append("Landmark", locality);
    const res = await axios
      .post("http://localhost:8008/api/getByLandmark", formData)
      .then((response) => {
        let tempArray = [];
        tempArray.push(response.data);
        console.log(tempArray, "temparray");
        this.setState({ allData: tempArray, cardData: tempArray }, () =>
          console.log(this.state.allData)
        );
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFilterData = (e) => {
    if (this.state.filteredData[0].length > 0) {
      let tempArray = [];
      tempArray.push(this.state.filteredData[0]);
      this.setState({ cardData: tempArray });
      console.log("filterdata:", this.state.cardData);
    } else {
      console.log("No properties available with these filters!");
      this.getData();
    }
  };

  submitFilterData = (e) => {
    e.preventDefault();
    var filterData = {
      category: this.state.category,
      gender: this.state.gender,
      price: [this.state.min, this.state.max],
      rating: this.state.rating,
      occupancy: this.state.occupancy,
      amenities: this.state.amenities,
    };

    axios.post(`http://localhost:8008/api/list`, filterData).then((res) => {
      const newState = [];
      newState.push(res.data);
      this.setState({ filteredData: newState, cardData: newState });
    });
  };

  resetFilterData = (e) => {
    e.preventDefault();
    document
      .getElementById("clear-button")
      .addEventListener("click", function () {
        [
          "radio-reset-gender-boys",
          "radio-reset-gender-girls",
          "radio-reset-rating-1",
          "radio-reset-rating-2",
          "radio-reset-rating-3",
          "radio-reset-rating-4",
          "radio-reset-rating-5",
          "checkbox-reset-pg",
          "checkbox-reset-hostel",
        ].forEach(function (id) {
          document.getElementById(id).checked = false;
        });
        return false;
      });
    this.resetMultiSelectElement(document.getElementById("amenities"));
    this.setState({
      category: "",
      gender: "",
      min: "",
      max: "",
      amenities: "",
    });
  };

  resetMultiSelectElement = (selectElement) => {
    var options = selectElement.options;

    // Look for a default selected option
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      if (options[i].defaultSelected) {
        selectElement.selectedIndex = i;
        return;
      }
    }
    // If no option is the default, select first or none as appropriate
    selectElement.selectedIndex = -1; // or -1 for no option selected
  };

  handleCategory = (event) => {
    let selected = [];
    const categoryInput = document.querySelectorAll(".by-category--filter");

    for (let i = 0; i < categoryInput.length; i++) {
      if (categoryInput[i].checked) {
        selected.push(categoryInput[i].value);
      }
    }

    this.setState({
      category: selected,
    });
  };

  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleRating = (e) => {
    this.setState({ rating: e.target.value });
  };

  getCurrMaxData = (e) => {
    var currMaxPos = $(".noUi-handle-upper .noUi-tooltip").html();
    //console.log(currMaxPos);
    this.setState({ max: currMaxPos });
  };

  getCurrMinData = (e) => {
    var currMinPos = $(".noUi-handle-lower .noUi-tooltip").html();
    //console.log(currMinPos);
    this.setState({ min: currMinPos });
    this.getCurrMaxData();
  };

  handleOccupancy = (event) => {
    let selected = [];
    const occupancyInput = document.querySelectorAll(".by-occupancy--filter");
    for (let i = 0; i < occupancyInput.length; i++) {
      if (occupancyInput[i].checked) {
        selected.push(occupancyInput[i].value);
      }
    }
    this.setState({
      occupancy: selected,
    });
  };

  handleAmentiesChange = (event) => {
    var select = document.getElementById("amenities");
    var selected = [...select.selectedOptions].map((option) => option.value);

    this.setState({
      amenities: selected,
    });
  };

  render() {
    console.log("city", this.state.selectedCity, this.state.selectedLocality);

    return (
      <div>
        {this.state.isLoading && (
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        )}
        {!this.state.isLoading && (
          <div>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Header
                    style={{ HeaderStyle }}
                    setLocality={this.setLocality}
                    setCity={this.setCity}
                    city={this.state.selectedCity}
                  />
                  <FeatureCards style={{ FeatureCardsStyle }} />
                  <Collaborators style={{ CollaboratorsStyle }} />
                  <SplitSlider style={{ SplitSliderStyle }} />
                  <Testimonials style={{ TestimonialsStyle }} />
                  <Footer style={{ FooterStyle }} />
                </Route>

                <Route
                  path="/contact-us"
                  component={ContactUs}
                  style={{ ContactUsStyle }}
                />
                <Route path="/faq" component={FAQ} style={{ FAQStyle }} />
                {/* <Route path="/AboutUs" component={AboutUs} /> */}
                <Route
                  path="/privacy-policy"
                  component={PrivacyPolicy}
                  style={{ PrivacyPolicyStyle }}
                />
                <Route
                  path="/terms-and-conditions"
                  component={Terms}
                  style={{ TermsStyle }}
                />
                <Route
                  path="/list/:id"
                  component={CardDetails}
                  style={{ CardDetailsStyle, MapStyle }}
                />

                <Route
                  exact
                  path="/pgs/:city/:locality"
                  render={(props) => (
                    <ListCards
                      {...props}
                      city={this.state.selectedCity}
                      getData={this.getData}
                      handleFilterData={this.handleFilterData}
                      isFilterDataPosted={this.state.isFilterDataPosted}
                      categoryHandler={this.handleCategory}
                      genderHandler={this.handleGender}
                      priceHandler={this.getCurrMinData}
                      minPrice={this.state.min}
                      maxPrice={this.state.max}
                      ratingHandler={this.handleRating}
                      occupancyHandler={this.handleOccupancy}
                      amenetiesHandler={this.handleAmentiesChange}
                      submitFilterData={this.submitFilterData}
                      resetFilterData={this.resetFilterData}
                      data={this.state.cardData[0]}
                      key={this.state.key}
                    />
                  )}
                />
              </Switch>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default App;
