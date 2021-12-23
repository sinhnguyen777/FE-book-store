import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Input,
  Modal,
  PageHeader,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import cataApi from "../../../../api/cataApi";
import prouctApi from "../../../../api/productApi";
import InputField from "../../Components/Common/FromControl/InputField";
import ListProduct from "./Components/ListProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const { TextArea } = Input;
const { Option } = Select;

const uploadButton = () => {
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>;
};

const Product = () => {
  const [ValueSelect, setValueSelect] = useState("");
  const [ValueDate, setValueDate] = useState("");
  const [ValueCata, setValueCata] = useState([]);
  const [ValuesProduct, setValuesProduct] = useState([]);
  const [render, setRender] = useState(0);
  let history = useHistory();
  const schema = yup
    .object({
      nameProduct: yup.string().required("Vui lòng nhập trường này"),
      price: yup.string().required("Vui lòng nhập trường này"),
      description: yup.string().required("Vui lòng nhập trường này"),
      author: yup.string().required("Vui lòng nhập trường này"),
      nxb: yup.string().required("Vui lòng nhập trường này"),
      quantity: yup.string().required("Vui lòng nhập trường này"),
    })
    .required();
  const forms = useForm({
    defaultValues: {
      nameProduct: "",
      price: "",
      author: "",
      idCata: "",
      Nbx: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchIdCata = async () => {
      const res = await cataApi.GetCata();
      setValueCata(res.data);
    };

    fetchIdCata();

    const fetchProducts = async () => {
      const res = await prouctApi.GetProducts();
      setValuesProduct(res.data);
    };

    fetchProducts();
  }, [render]);

  function handleChange(value) {
    setValueSelect(value);
  }

  const handleRender = () => {
    setRender((pre) => pre + 1);
  };

  const handleSubmitFrom = async (values) => {
    try {
      const formData = new FormData();

      formData.append("nameProduct", values.nameProduct);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("author", values.author);
      formData.append("nxb", values.nxb);
      formData.append("idCatalog", ValueSelect);
      formData.append("productHot", values.productHot);
      formData.append("productSale", values.productSale);
      formData.append("quantity", values.quantity);
      formData.append("dateDebut", ValueDate);

      for (let i = 0; i < fileList.length; i++) {
        formData.append("images", fileList[i].originFileObj);
      }

      const res = await prouctApi.AddProduct(formData);
      if (res.status === 200) {
        Swal.fire("...", "Thêm Thành Công!", "success").then((result) => {
          if (result.isConfirmed) {
            setRender((pre) => pre + 1);
            setValueSelect("");
            setfileList([]);
            forms.reset({
              defaultValues: {
                nameProduct: "",
                price: "",
                author: "",
                idCata: "",
                Nbx: "",
              },
            });
            history.push({ pathname: "/admin/products" });
          }
        });
      }
      if (res.data.code === 404) {
        Swal.fire(
          "Không thể thêm",
          "Sản phẩm này đã có trong danh sách",
          "error"
        ).then((result) => {
          if (result.isConfirmed) {
            setRender((pre) => pre + 1);
            setValueSelect("");
            setfileList([]);
            forms.reset({
              defaultValues: {
                nameProduct: "",
                price: "",
                author: "",
                idCata: "",
                Nbx: "",
              },
            });
            history.push({ pathname: "/admin/products" });
          }
        });
      }
    } catch (err) {
      Swal.fire(
        "Không thể thêm",
        "Sản phẩm này đã có trong danh sách",
        "error"
      );
    }
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const [fileList, setfileList] = useState([]);
  const [PreviewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setpreviewImage] = useState("");
  const [previewTitle, setpreviewTitle] = useState("");
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setpreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChangeUpload = ({ fileList }) => {
    setfileList(fileList);
  };

  const handleChangeDate = (values) => {
    setValueDate(values);
  };

  return (
    <div className="ProductPage">
      <PageHeader
        className="site-page-header"
        title="Trang Danh Sách Sản Phẩm"
      />

      <div className="BoxForm">
        <div className="title">Thêm Sách</div>

        <form
          encType="multipart/form-data"
          onSubmit={forms.handleSubmit(handleSubmitFrom)}
        >
          <div className="BoxForm">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeUpload}
              name="image"
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            
            <Modal
              visible={PreviewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </div>

          <div className="BoxForm">
            <div className="GroupForm">
              <label htmlFor="nameProduct">Tên Sách</label>
              <InputField
                name="nameProduct"
                type="text"
                form={forms}
              ></InputField>
              {forms.errors.nameProduct && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <div className="GroupForm">
              <label htmlFor="idCatalog">Id Danh Mục</label>

              <Select
                defaultValue={ValueSelect}
                name="idCatalog"
                className="BoxSelect"
                onChange={handleChange}
                ref={forms.register}
              >
                {ValueCata
                  ? ValueCata.map((item) => (
                      <Option key={item._id} value={item._id}>
                        {item.nameCata}
                      </Option>
                    ))
                  : ""}
              </Select>
             
            </div>

            <div className="GroupForm">
              <label htmlFor="price">Giá</label>
              <InputField name="price" type="text" form={forms}></InputField>
              {forms.errors.price && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <div className="GroupForm">
              <label htmlFor="author">Tác Giả</label>
              <InputField name="author" type="text" form={forms}></InputField>
              {forms.errors.author && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <div className="GroupForm">
              <label htmlFor="nxb">Nhà Xuất Bản</label>
              <InputField name="nxb" type="text" form={forms}></InputField>
              {forms.errors.nxb && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <div className="GroupForm">
              <label htmlFor="dateDebut">Ngày Ra Mắt</label>
              <DatePicker
                style={{ width: "100%" }}
                onChange={handleChangeDate}
                name="DatePicker"
              />
              
            </div>
          </div>

          <div className="BoxForm">
            <div className="GroupForm  D-Flex">
              <label htmlFor="productHot">Sản phẩm hot</label>
              <input
                name="productHot"
                className="CheckProducts"
                ref={forms.register}
                type="checkbox"
              />
            </div>

            <div className="GroupForm  D-Flex">
              <label htmlFor="productSale">Sản phẩm Giảm Giá</label>
              <input
                name="productSale"
                className="CheckProducts"
                ref={forms.register}
                type="checkbox"
              />
            </div>

            <div className="GroupForm">
              <label htmlFor="quantity">Số Lượng Sách</label>
              <InputField name="quantity" type="text" form={forms}></InputField>
              {forms.errors.quantity && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <div className="GroupForm">
              <label htmlFor="description">Mô tả</label>
              <textarea name="description" ref={forms.register}></textarea>
              {forms.errors.description && (
                <p className="CatchError">* Vui lòng nhập trường này</p>
              )}
            </div>

            <Button htmlType="submit">submit</Button>
          </div>
        </form>
      </div>

      <Row className="ListProduct">
        <Col span={24}>
          {ValuesProduct.length > 0 ? (
            <ListProduct
              data={ValuesProduct}
              dataCata={ValueCata}
              handleRender={handleRender}
            />
          ) : (
            <LoadingOutlined />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Product;
