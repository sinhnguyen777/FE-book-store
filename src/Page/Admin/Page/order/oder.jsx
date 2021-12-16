import { Col, PageHeader, Row } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import orderApi from "../../../../api/orderApi";
import FromCataAdd from "../Catalogs/Components/FormCataAdd";
import ListOrder from "./Components/ListOrder";

const Order = () => {
  const [DataOrder, setDataOrder] = useState([]);
  const [render, setrender] = useState(0);

  useEffect(() => {
    const fetchCata = async () => {
      const res = await orderApi.GetOrder();
      setDataOrder(res.data);
    };

    fetchCata();
  }, [render]);
  console.log(DataOrder);

  const handleSetRender = () => {
    setrender(render + 1);
  };
  return (
    <div className="CatalogsPage">
      <PageHeader className="site-page-header" title="Trang Đơn hàng" />

      <Row className="ListCata">
        <Col span={24}>
          <ListOrder data={DataOrder} handleSetRender={handleSetRender} />
        </Col>
      </Row>
    </div>
  );
};

export default Order;
