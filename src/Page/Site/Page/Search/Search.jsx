import { List, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import prouctApi from "../../../../api/productApi";

const Search = () => {
  const [data, setdata] = useState();
  const match = useRouteMatch();

  useEffect(() => {
    const fetchGetValues = async (values) => {
      const res = await prouctApi.GetProductsByname(values);
      setdata(res.data);
    };

    fetchGetValues(match.params.values);
  }, [match]);

  return (
    <>
      <div className="orderdetail_banner">
        <div className="orderdetail_banner_title">
          <h6>Tìm kiếm</h6>
          <h2>Kết quả tìm kiếm</h2>
        </div>
      </div>
      <div className="layout">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    width={70}
                    src={`https://beonlinelibrary.herokuapp.com/${item.images[0].image}`}
                  />
                }
                title={
                  <Link to={`/product-detail/${item.slug}`}>
                    {item.nameProduct}
                  </Link>
                }
                description={
                  <div className="SearchList_description">
                    <p className="SearchList_description_content">
                      {item.description}
                    </p>
                  </div>
                }
                className="SearchList"
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default Search;
