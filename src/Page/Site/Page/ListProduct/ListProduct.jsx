import { LoadingOutlined, UpOutlined } from "@ant-design/icons";
import { BackTop, Pagination, Select } from "antd";
import React, { useEffect, useState } from "react";
import prouctApi from "../../../../api/productApi";
import { BannerProduct } from "../../Components/Common/Banner/banner";
import Filter from "./Components/Filter";
import ItemProduct from "./Components/ItemProduct";

const { Option } = Select;

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#d14031",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(9);
  const [filter, setfilter] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await prouctApi.GetProducts(filter);
      setProduct(res.data);
    };
    fetchProduct();
  }, [filter]);

  // values Select
  function handleChange(value) {
    if (value.value === "new") {
      const filter = {
        _sort: "",
        column: "createdAt",
        type: "desc",
      };
      setfilter(filter);
    }
    if (value.value === "pricelow") {
      const filter = {
        _sort: "",
        column: "price",
        type: "asc",
      };
      setfilter(filter);
    }
    if (value.value === "pricehigh") {
      const filter = {
        _sort: "",
        column: "price",
        type: "desc",
      };
      setfilter(filter);
    }
  }

  const total = product.length;
  // Pagination
  const indexOfLast = currentPage * postPerPage;
  const idextOfFirst = indexOfLast - postPerPage;
  const currentProduct = product.slice(idextOfFirst, indexOfLast);

  const handleChangePage = (page) => {
    setCurrentpage(page);
  };

  // fillter Cata

  const handleListCata = (values) => {
    console.log(values);
    const newData = {
      ...filter,
      idCatalog: values,
    };
    console.log(newData);
    setfilter(newData);
  };

  const handleListAuthour = async (values) => {
    const res = await prouctApi.GetProductsByauthor(values);
    setProduct(res.data);
  };
  return (
    <div>
      <BannerProduct>
        <h6>S???N PH???M</h6>
        <h2>Danh s??ch s???n ph???m</h2>
      </BannerProduct>
      <div className="layout">
        <div className="list-product">
          <div className="list-product_list">
            <div className="List-filter">
              <div className="List-filter_result">
                Trang 1/2 c???a {product ? product.length : <LoadingOutlined />}{" "}
                s???n ph???m
              </div>
              <form action="" className="List-filter_sort">
                <Select
                  labelInValue
                  style={{ width: 230, height: 50 }}
                  onChange={handleChange}
                >
                  <Option value="new">S???p x???p theo th??? t??? m???i nh???t</Option>
                  <Option value="pricelow">
                    S???p x???p theo gi??: th???p ?????n cao
                  </Option>
                  <Option value="pricehigh">
                    S???p x???p theo gi??: cao ?????n th???p
                  </Option>
                </Select>
              </form>
            </div>
            <div className="List-product">
              <ItemProduct data={currentProduct} />
            </div>
            <div className="List-pagination">
              <Pagination
                size="small"
                onChange={handleChangePage}
                pageSize={9}
                total={total}
              />
            </div>
          </div>
          <div className="list-product_filter">
            <Filter
              filter={filter}
              handleListCata={handleListCata}
              handleListAuthour={handleListAuthour}
            />
          </div>
        </div>
      </div>
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  );
};

export default ListProduct;
