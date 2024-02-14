import AllCollections from "./AllCollections";
import { Input, Space, Select } from "antd";
import Tshirt from "../../../public/tshirt.png";
const { Search } = Input;

const ClientShopPage = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="shop-page-search">
        <Space direction="vertical">
          <Search
            style={{
              width: 500,
            }}
            placeholder="Search for products"
            onSearch={onSearch}
            enterButton
          />
        </Space>
        <div style={{ display: "flex", gap: "1.5em" }}>
          <Select
            defaultValue="Sort: By Size"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Sort: By Size",
                label: "Sort: By Size",
              },
              {
                value: "S",
                label: "S",
              },
              {
                value: "M",
                label: "M",
              },
              {
                value: "L",
                label: "L",
              },
              {
                value: "XL",
                label: "XL",
              },
              {
                value: "XXL",
                label: "XXL",
              },
              {
                value: "XXXL",
                label: "XXXL",
              },
            ]}
          />
          <Select
            defaultValue="Sort: Default"
            style={{
              width: 190,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Sort: Default",
                label: "Sort: Default",
              },
              {
                value: "Price Highest to Lowest",
                label: "Price Highest to Lowest",
              },
              {
                value: "Price Lowest to Highest",
                label: "Price Lowest to Highest",
              },
              {
                value: "Newest to Oldest",
                label: "Newest to Oldest",
              },
              {
                value: "Oldest to Newest",
                label: "Oldest to Newest",
              },
            ]}
          />
        </div>
      </div>
      <AllCollections
        name=""
        image={Tshirt}
        price="150.00"
        title="Nike T Shirt for Men"
      />
    </div>
  );
};

export default ClientShopPage;
