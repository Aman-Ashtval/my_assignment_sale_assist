import { LuDot } from "react-icons/lu";
import { BsBoxArrowUp } from "react-icons/bs";

import Header from "../Header";
import BagsCategories from "../BagsCategories";
import ProductList from "../ProductList";
import CustomerReview from "../CustomerReview";

import "./index.css";

const Home = () => {
  const renderCustomerView = () => (
    <div className="customer-section-bg">
      <h1 className="customer-say-h1">What Our Customer Say</h1>
      <CustomerReview />
    </div>
  );

  return (
    <div className="home-bg">
      <Header />
      <BagsCategories />
      <div className="mt-4 ml-4 mr-4 d-flex justify-content-between align-items-center">
        <p className="bag-pack-p">
          Bags <LuDot /> Backpacks
        </p>
        <p className="bag-pack-p">
          13 products <BsBoxArrowUp size={24} className="ml-2 mr-2" />
        </p>
      </div>
      {/* products list */}
      <ProductList />
      {renderCustomerView()}
    </div>
  );
};

export default Home;
