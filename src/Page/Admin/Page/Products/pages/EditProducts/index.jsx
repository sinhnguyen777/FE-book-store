import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Image, Modal, PageHeader, Upload, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router';
import cataApi from '../../../../../../api/cataApi';
import prouctApi from '../../../../../../api/productApi';
import InputField from '../../../../Components/Common/FromControl/InputField';

const { Option } = Select;

const uploadButton = () => {
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
}

const EditProducts = () => {
    const match = useRouteMatch();
    const [DataProduct, setDataProduct] = useState({})
    const [ValueCata, setValueCata] = useState([])
    const [ValueSelect, setValueSelect] = useState("");
    const [oldImg, setoldImg] = useState([])

    const forms = useForm({
        defaultValues: {
            nameProduct : DataProduct.nameProduct
        },
    });

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

    // get values Select

    function handleChange(value) {
        setValueSelect(value)
    }

    // Submit Form

    const handleSubmitFrom = async (values) => {
        console.log(values);
    }

    useEffect(() => {
        const id = match.params.id;

        const fetchIdCata = async () => {
            const res = await cataApi.GetCata();
            setValueCata(res.data)
        }

        const fetchProductById = async (id) => {
            const res = await prouctApi.GetProductsById(id);
            console.log(res.data);
            setValueSelect(res.data.idCatalog);
            setoldImg(res.data.images);
            setDataProduct(res.data);
        }

        fetchIdCata()

        fetchProductById(id)
    }, [])
    console.log(ValueSelect);
    console.log(oldImg);
    return (
        <div className="ProductPage">
            <PageHeader
                className="site-page-header"
                title={`Trang Sửa ${DataProduct.nameProduct} `}
            />

            {
                DataProduct
                    ?
                    <div className="BoxForm">
                        <div className="title">Thêm Sách</div>

                        <form encType="multipart/form-data" onSubmit={forms.handleSubmit(handleSubmitFrom)}>
                            <div className="BoxForm">
                                {
                                    oldImg.map((item, idx) => (
                                        <Image
                                            key={idx}
                                            width={100}
                                            height={100}
                                            src={`https://beonlinelibrary.herokuapp.com/${item.image}`}
                                        />
                                    ))
                                }
                                <Upload
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
                                </Modal>

                            </div>

                            <div className="BoxForm">
                                <div className="GroupForm">
                                    <label htmlFor="nameProduct">Tên Sách</label>
                                    <InputField name="nameProduct" type='text' form={forms}></InputField>
                                </div>

                                <div className="GroupForm">
                                    <label htmlFor="idCatalog">Id Danh Mục</label>

                                    <Select defaultValue={ValueSelect} name="idCatalog" className="BoxSelect" onChange={handleChange} ref={forms.register} >
                                        {console.log(ValueSelect)}
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
                    :
                    <LoadingOutlined />

            }
        </div>
    )
}

export default EditProducts
