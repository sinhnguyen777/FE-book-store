import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { NavLink } from "react-router-dom";
import prouctApi from "../../../../../api/productApi";

export default function RelatedProducts() {
  const [productSelling, setproductSelling] = useState([]);
  useEffect(() => {
    const fetchProductsSelling = async () => {
      const res = await prouctApi.ProductsSelling();
      setproductSelling(res.data);
    };
    fetchProductsSelling();
  }, []);
  console.log(productSelling);

  return (
    <div className="related_product_detail">
      <h2>Sản phẩm bán chạy</h2>
      <List
        grid={{
          gutter: 24,
          column: 6,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={productSelling}
        renderItem={(item) => (
          <List.Item>
            <Card
              className="related_product_detail_card"
              bordered={false}
              hoverable
              bodyStyle={{ padding: "21px 0 37px" }}
              cover={
                <img
                  alt="example"
                  src={`https://beonlinelibrary.herokuapp.com/${item._id[0].images[0].image}`}
                />
              }
            >
              <NavLink to="" className="author">
                {item._id[0].author}
              </NavLink>
              <h5 className="title">{item._id[0].nameProduct} </h5>
              <p>{item._id[0].price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
