import { FaRegBookmark } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";

import "./index.css";

// product List
const productList = [
  {
    id: 1,
    title: "The Brown Metro Movers",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/Mask_group1_xcbr9f.png",
  },
  {
    id: 2,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/mask_group2_gkckfl.png",
  },
  {
    id: 3,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/Mask_group1_xcbr9f.png",
  },
  {
    id: 4,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/mask_group4_omdkwm.png",
  },
  {
    id: 5,
    title: "The Brown Metro Movers",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/Mask_group1_xcbr9f.png",
  },
  {
    id: 6,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/mask_group2_gkckfl.png",
  },
  {
    id: 7,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/Mask_group1_xcbr9f.png",
  },
  {
    id: 8,
    title: "The Metro Movers Black",
    offerPrice: 4899,
    realPrice: 8999,
    discount: "50% off",
    imgUrl:
      "https://res.cloudinary.com/dh4dcboea/image/upload/v1713017458/mask_group4_omdkwm.png",
  },
];

const ProductList = () => {
  const renderProductCard = (productDetails) => {
    const {
      id,
      title,
      offerPrice,
      realPrice,
      discount,
      imgUrl,
    } = productDetails;

    return (
      <li key={id} className="product-list-item">
        <div className="product-list-img-c">
          <img src={imgUrl} alt={title} className="product-img" />
          <FaRegBookmark className="mark-icon" />
        </div>
        <div className="product-card-text-c">
          <p className="product-title">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="price-p">
              <FaIndianRupeeSign />
              {offerPrice}
              <sub className="ml-1 txt-gray">
                {realPrice}
                <span className="ml-1 txt-green">({discount})</span>
              </sub>
            </p>
            <img
              src="https://res.cloudinary.com/dh4dcboea/image/upload/v1713023523/Group_451_ob1yl7.png"
              alt="bag"
              className="bag-img2"
            />
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="product-list">
      {productList.map((each) => renderProductCard(each))}
    </ul>
  );
};

export default ProductList;
