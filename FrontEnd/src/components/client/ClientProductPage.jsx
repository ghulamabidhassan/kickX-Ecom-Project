import ProductImage from "../../../public/shoetransparent.png";
import { HeartOutlined } from "@ant-design/icons";

const ClientProductPage = () => {
  return (
    <div className="client-product-page">
      <div className="left">
        <div className="left-left">
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
        </div>
        <div className="left-right">
          <img src={ProductImage} alt="" />
        </div>
      </div>
      <div className="right">
        <h2 className="title">Nike Air Max 24 React</h2>
        <h6 className="sub-title">Men's Shoe</h6>
        <p className="price">$280.00</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum
          pariatur ex, deserunt odit illo modi laboriosam mollitia repudiandae
          aspernatur.
        </p>
        <div className="variants">
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
          <img src={ProductImage} alt="" />
        </div>
        <div>
          <h3 className="select-size">Select Size</h3>
          <div className="sizes">
            <span>5</span>
            <span>5.5</span>
            <span>6</span>
            <span>6.5</span>
            <span>7</span>
          </div>
        </div>
        <div className="add-to-cart-parent">
          <button className="add-to-cart">ADD TO CART</button>
          <div>
            <HeartOutlined className="icon-heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProductPage;
