import { Component } from "react";
import axios from "axios";
import Slider from "react-slick";

import { FaQuoteLeft } from "react-icons/fa";

import "./index.css";
import "slick-carousel/slick/slick.css";

const statusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
  initial: "INITIAL",
};

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

class CustomerReview extends Component {
  state = {
    reviewData: [],
    errorMsg: "",
    responseStatus: statusConstants.initial,
  };

  getCustomerReviewData = async () => {
    await axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        this.setState({
          reviewData: response.data.data,
          responseStatus: statusConstants.success,
        });
      })
      .catch((error) => {
        this.setState({
          errorMsg: error,
          responseStatus: statusConstants.failure,
        });
      });
  };

  componentDidMount() {
    this.getCustomerReviewData();
  }

  //successView
  renderSuccessView = () => {
    const { reviewData } = this.state;
    return (
      <div className="slider-container ">
        <Slider {...settings}>
          {reviewData.map((each) => {
            const { ID, Name, Reviews, Platform, link } = each;

            return (
              <a key={ID} href={link} target="_blank" rel="noreferrer" className="card-a">
                <div className="customer-review-bg" >
                  <div className="customer-card">
                    <div className="float-div">
                      <FaQuoteLeft />
                    </div>
                    <p className="review-p">{Reviews}</p>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://res.cloudinary.com/dh4dcboea/image/upload/v1711789530/Jewellery_Project/client_afmtnj.jpg"
                        alt="profile"
                        className="profile-img"
                      />
                      <div className="ml-3">
                        <p className="customer-name">{Name}</p>
                        <p className="platform">{Platform}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </Slider>
      </div>
    );
  };

  getFailureView = () => {
    const { errorMsg } = this.state;

    return <div className="failure-bg">{errorMsg}....</div>;
  };

  renderCustomerViews = () => {
    const { responseStatus } = this.state;
    switch (responseStatus) {
      case statusConstants.success:
        return this.renderSuccessView();
      case statusConstants.failure:
        return this.getFailureView();
      default:
        return null;
    }
  };

  render() {
    return this.renderCustomerViews();
  }
}

export default CustomerReview;
