import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import ProductImage from "../../../public/shoetransparent.png";

const AllCollections = ({ name, image, title, price, discover, heading }) => {
  return (
    <div
      style={{ padding: "0em 3em", margin: "2em 0em" }}
      className="all-collections"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4em",
        }}
      >
        <h2 className="popular">{name}</h2>
        <h4
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            cursor: "pointer",
          }}
          className="discover"
        >
          {discover}
        </h4>
      </div>
      <div className="all-collection-items">
        {Array.from({ length: 12 }, (_, idx) => {
          return (
            <div key={idx} className="all-collection-item">
              <img className="all-collection-item-image" src={image} alt="" />
              <div className="all-collection-item-name">
                <h5>{title}</h5>
                <h4>${price}</h4>
              </div>
              <div className="absolute-parent">
                <div className="cart-icon-box">
                  <HeartOutlined className="wish-icon-product product-overlay-icon" />
                </div>
                <div className="cart-icon-box">
                  <ShoppingOutlined className="cart-bag-item product-overlay-icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCollections;
