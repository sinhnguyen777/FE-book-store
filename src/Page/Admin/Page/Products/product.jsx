import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, PageHeader, Row, Select } from "antd";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cataApi from "../../../../api/cataApi";
import prouctApi from '../../../../api/productApi';
import InputField from "../../Components/Common/FromControl/InputField";
import ListProduct from "./Components/ListProduct";

const { TextArea } = Input;
const { Option } = Select;

const uploadButton = () => {
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
}

const Product = () => {
    const [ValueSelect, setValueSelect] = useState("");
    const [ValueCata, setValueCata] = useState([])
    const [ValuesProduct, setValuesProduct] = useState([])

    const [multipleFiles, setMultipleFiles] = useState('');
    const forms = useForm({
        defaultValues: {
            nameProduct: "",
            price: "",
            author: "",
            idCata: "",
            Nbx: ""
        },
    });

    useEffect(() => {
        const fetchIdCata = async () => {
            const res = await cataApi.GetCata();
            setValueCata(res.data)
        }

        fetchIdCata()

        const fetchProducts = async () => {
            const res = await prouctApi.GetProducts();
            setValuesProduct(res.data)
        }

        fetchProducts()

        console.log();
    }, [])

    function handleChange(value) {
        setValueSelect(value)
    }

    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
    }

    const handleSubmitFrom = async (values) => {
        try {

            const formData = new FormData();

            formData.append('nameProduct', values.nameProduct);
            formData.append('price', values.price);
            formData.append('description', values.description);
            formData.append('author', values.author);
            formData.append('nxb', values.nxb);
            formData.append('idCatalog', ValueSelect);
            formData.append('productHot', values.productHot);
            formData.append('productSale', values.productSale);

            for (let i = 0; i < multipleFiles.length; i++) {
                formData.append('images', multipleFiles[i]);
            }

            await axios.post('https://beonlinelibrary.herokuapp.com/products/create', formData);
        }
        catch (err) {
            console.log(err);
        }

    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const [fileList, setfileList] = useState([])
    const [PreviewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setpreviewImage] = useState('');
    const [previewTitle, setpreviewTitle] = useState('')
    const handleCancel = () => {
        setPreviewVisible(false)
    }

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setpreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setpreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const handleChangeUpload = ({ fileList }) => {
        setfileList(fileList)
    }
    
    return (
        <div className="ProductPage">
            <PageHeader
                className="site-page-header"
                title="Trang Danh Sách Sản Phẩm"
            />

            <div className="BoxForm">
                <div className="title">Thêm Sách</div>

                <form encType="multipart/form-data" onSubmit={forms.handleSubmit(handleSubmitFrom)}>
                    <div className="BoxForm">
                        {/* <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChangeUpload}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={PreviewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal> */}

                        <div className="form-group">
                            <label>Select Multiple Files</label>
                            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
                        </div>
                    </div>

                    <div className="BoxForm">
                        <div className="GroupForm">
                            <label htmlFor="nameProduct">Tên Sách</label>
                            <InputField name="nameProduct" type='text' form={forms}></InputField>
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="idCatalog">Id Danh Mục</label>

                            <Select defaultValue={ValueSelect} name="idCatalog" className="BoxSelect" onChange={handleChange} ref={forms.register} >
                                {
                                    ValueCata
                                        ?
                                        ValueCata.map(item => (
                                            <Option key={item._id} value={item._id}>{item.nameCata}</Option>
                                        ))
                                        :
                                        ""
                                }
                            </Select>
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="price">Giá</label>
                            <InputField name="price" type='text' form={forms}></InputField>
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="author">Tác Giả</label>
                            <InputField name="author" type='text' form={forms}></InputField>
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="nxb">Nhà Xuất Bản</label>
                            <InputField name="nxb" type='text' form={forms}></InputField>
                        </div>
                    </div>

                    <div className="BoxForm">

                        <div className="GroupForm">
                            <label htmlFor="productHot">Sản phẩm hot</label>
                            <input name="productHot" ref={forms.register} type="checkbox" />
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="productSale">Sản phẩm Giảm Giá</label>
                            <input name="productSale" ref={forms.register} type="checkbox" />
                        </div>

                        <div className="GroupForm">
                            <label htmlFor="Nbx">Mô tả</label>
                            <textarea name="description" ref={forms.register} ></textarea>
                        </div>

                        <Button htmlType='submit'>submit</Button>
                    </div>
                </form>
            </div>

            <Row className='ListProduct'>
                <Col span={24}>
                    {
                        ValuesProduct.length > 0
                            ?
                            <ListProduct data={ValuesProduct} dataCata={ValueCata} />
                            :

                            <LoadingOutlined />
                    }
                </Col>
            </Row>
        </div>
    );
}

export default Product