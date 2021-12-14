import { CloseSquareOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Image, Modal, PageHeader, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router';
import Swal from 'sweetalert2';
import cataApi from '../../../../../../api/cataApi';
import prouctApi from '../../../../../../api/productApi';
import InputField from '../../../../Components/Common/FromControl/InputField';
import moment from 'moment';

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
    const [ValueDate, setValueDate] = useState('');
    const dateFormat = 'YYYY-MM-DD';
    const [oldImg, setoldImg] = useState([])
    const [ResetImg, SetResetImg] = useState(0)

    let history = useHistory();

    const forms = useForm({
        defaultValues: {
            nameProduct: ''
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
        try {
            const formData = new FormData();
            const old = JSON.stringify(oldImg);

            formData.append('id', match.params.id);
            formData.append('nameProduct', values.nameProduct);
            formData.append('price', values.price);
            formData.append('description', values.description);
            formData.append('author', values.author);
            formData.append('nxb', values.nxb);
            formData.append('idCatalog', ValueSelect);
            formData.append('productHot', values.productHot);
            formData.append('productSale', values.productSale);
            formData.append('oldImages', old);
            formData.append('quantity', values.quantity);
            formData.append('dateDebut', ValueDate);

            for (let i = 0; i < fileList.length; i++) {
                formData.append('images', fileList[i].originFileObj);
            }
            const res = await prouctApi.UpdateProduct(formData);
            console.log(res);
            Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                if (result.isConfirmed) {
                    setValueSelect('');
                    setfileList([]);
                    forms.reset({
                        defaultValues: {
                            nameProduct: "",
                            price: "",
                            author: "",
                            idCata: "",
                            Nbx: ""
                        }
                    })
                    history.push({ pathname: '/admin/products' })
                }
            })

        }
        catch (err) {
            console.log(err);
            Swal.fire('...', 'Sửa Thất bại!', 'error')
        }

    }

    useEffect(() => {
        const id = match.params.id;

        const fetchIdCata = async () => {
            const res = await cataApi.GetCata();
            setValueCata(res.data)
        }

        const fetchProductById = async (id) => {
            const res = await prouctApi.GetProductsById(id);
            setValueSelect(res.data.idCatalog);
            setoldImg(res.data.images);
            setDataProduct(res.data);
            setValueDate(res.data.dateDebut)
            forms.reset({
                nameProduct: res.data.nameProduct,
                price: res.data.price,
                author: res.data.author,
                nxb: res.data.nxb,
                productHot: res.data.productHot,
                productSale: res.data.productSale,
                description: res.data.description,
                quantity: res.data.quantity,
            })
        }

        fetchIdCata()

        fetchProductById(id)
    }, [ResetImg])

    const handleRemoveOldImg = (id) => {
        const newValue = [...oldImg];
        const data = newValue.filter(item => item._id != id);
        setoldImg(data)
    }

    const handleChangeDate = (values) => {
        setValueDate(values)
    }

    console.log(ValueDate);
    return (
        <div className="ProductPage">
            <PageHeader
                className="site-page-header"
                title={`Trang Sửa: ${DataProduct.nameProduct} `}
            />

            {
                DataProduct
                    ?
                    <div className="BoxForm">
                        <div className="title">Thêm Sách</div>

                        <form encType="multipart/form-data" onSubmit={forms.handleSubmit(handleSubmitFrom)}>
                            <div className="BoxForm">
                                <span className="TitleImg">Hình ảnh cũ</span>
                                {
                                    oldImg.map((item, idx) => (
                                        <div className="ImgOld">
                                            <Image
                                                key={idx}
                                                width={100}
                                                height={100}
                                                src={`https://beonlinelibrary.herokuapp.com/${item.image}`}
                                            />
                                            <CloseSquareOutlined onClick={() => handleRemoveOldImg(item._id)} />
                                        </div>
                                    ))
                                }
                                <span className="TitleImg">Thêm ảnh mới</span>
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

                                    <Select defaultValue={ValueSelect} value={ValueSelect} name="idCatalog" className="BoxSelect" onChange={handleChange} ref={forms.register} >
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

                                <div className="GroupForm">
                                    <label htmlFor="dateDebut">Ngày Ra Mắt</label>
                                    <DatePicker defaultValue={moment(ValueDate, dateFormat)} value={moment(ValueDate, dateFormat)} style={{ width: '100%' }} onChange={handleChangeDate} />
                                </div>
                            </div>

                            <div className="BoxForm">

                                <div className="GroupForm">
                                    <label htmlFor="productHot">Sản phẩm hot</label>
                                    <input name="productHot" className="CheckProducts" ref={forms.register} type="checkbox" />
                                </div>

                                <div className="GroupForm">
                                    <label htmlFor="productSale">Sản phẩm Giảm Giá</label>
                                    <input name="productSale" className="CheckProducts" ref={forms.register} type="checkbox" />
                                </div>
                                <div className="GroupForm">
                                    <label htmlFor="quantity">Số Lượng Sách</label>
                                    <InputField name="quantity" type='text' form={forms}></InputField>
                                </div>
                                <div className="GroupForm">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea name="description" ref={forms.register} ></textarea>
                                </div>

                                <Button htmlType='submit'>submit</Button>
                                <Button style={{ margin: "0 10px" }} onClick={() => SetResetImg(ResetImg + 1)} >Đặt về ban đầu</Button>
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
