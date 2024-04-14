import Slider from "react-slick";

import AppContext from "../../context/AppContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// bags category list
const bagsList = [
  {
    id: 1,
    title: "All Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img1_qvfctt.png",
  },
  {
    id: 2,
    title: "Vanity Pouch",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img2_mn0ydm.png",
  },
  {
    id: 3,
    title: "Tote Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img3_jmw16e.png",
  },
  {
    id: 4,
    title: "Duffle Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img4_waepa9.png",
  },
  {
    id: 5,
    title: "Laptop Sleeve",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img5_ywh6m1.png",
  },
  {
    id: 6,
    title: "Messenger Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img6_inebpq.png",
  },
  {
    id: 7,
    title: "Sling Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img7_sfr9pv.png",
  },
  {
    id: 8,
    title: "Hand Bags",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img8_s6yu5h.png",
  },
  {
    id: 9,
    title: "Buckets",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713010932/img9_uunhfg.png",
  },
];

const BagCategories = () => {
  const settings = {
    dots: false,
    slidesToShow: 8.4,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    speed: 500,
  };
            
          
  <AppContext.Consumer>
      {
        value => {          
          const {lightTheme} = value 
          const bgColor = lightTheme ? "card-bg-color" : null;

          const renderBagCard = (cardDetails) =>{   
            const { id, title, imgUrl } = cardDetails;

            return (
                  <div key={id} className="bag-card-bg ">
                    <div className={`card-content ${bgColor}`}>
                      <img src={imgUrl} alt={title} className="bag-img" />
                      <p className="bag-title">{title}</p>
                    </div>
                  </div>
            );
          }


          return (
            <div className="slider-container mt-4 ml-4">
              <Slider {...settings}>
                {bagsList.map((each) => renderBagCard(each))}
              </Slider>
            </div>
          );
        }
      }
    </AppContext.Consumer>
  
  
};

export default BagCategories;
