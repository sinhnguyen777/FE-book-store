import { Button, Col, Input, PageHeader, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ChapterApi from '../../../../../../api/chapterApi';

const { Option } = Select;


const Chapter = (props) => {

    const match = useRouteMatch();
    let history = useHistory();
    const [DataChap, setDataChap] = useState();
    const [demo, setdemo] = useState('')


    const forms = useForm({
        defaultValues: {
            nameChapter: "",
            stt: "",
        },
    });

    useEffect(() => {
        const idProduct = match.params.id;
        const fetchCataByID = async (idCata) => {
            const res = await ChapterApi.GetChapterByIdProduct(idProduct)
            return setDataChap(res.data);
        }

        fetchCataByID(idProduct)
    }, [demo])

    const handleSubmitFrom = async(values) => {
       try{
        const data = {
            ...values,
            idProduct: match.params.id
        }
        await ChapterApi.AddChapter(data);
        Swal.fire('...', 'Thêm Thành Công!', 'success').then((result) => {
            if (result.isConfirmed) {
                setdemo(pre=>pre+1);
                history.push({ pathname: `/admin/products/Listchapter/${match.params.id}`})
            }
        })
       }catch(err){
           console.log(err);
          
       }


    }
    const handleRemoveChapter = (id)=>{
        try{
            const fetchRemoveChapter = async (data) => {
                try {
                    const res = await ChapterApi.DelChapter(data);
                    if (res.status == 200) {
                        Swal.fire('...', 'Xóa Thành Công!', 'success').then((result) => {
                            if (result.isConfirmed) {
                                setdemo(pre=>pre+1);
                                history.push({ pathname: `/admin/products/Listchapter/${match.params.id}` })
                            }
                        })
                    }
                } catch (err) {
                    console.log(err);
                    Swal.fire('...', 'Không đủ Thẩm quyền đề xóa', 'error').then((result) => {
                        if (result.isConfirmed) {
                            setdemo(pre=>pre+1);
                            history.push({ pathname: `/admin/products/Listchapter/${match.params.id}`})
                        }
                    })
                }
            }
    
            fetchRemoveChapter(id);
    
        }
        catch(err){
            console.log(err);
        }
    }

    const columns = [
        {
            title: 'Số Thứ tự',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Tên chương',
            dataIndex: 'nameChapter',
            key: 'nameChapter',
        },
        {
            title: 'Nội dung chương',
            key: 'content',
            render: (record) => {
                return <>
                  <Button><Link to={`/admin/products/chapter/${record._id}`}>Chi tiết</Link></Button>
                </>
            },
        },
        {
            title: 'Xóa',
            key: 'del',
            render: (record) => (
              <Button onClick={()=>handleRemoveChapter(record._id)}>Xóa</Button>
            ),
        },

    ];


    return (
        <div className="ChapterPage">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Danh sách chương"
            />

            <Row>
                <Col span={24}>
                    <div className="BoxForm">
                        <div className="title">Thêm Chương</div>

                        <form onSubmit={forms.handleSubmit(handleSubmitFrom)} >

                            <div className="GroupForm">
                                <label htmlFor="nameChapter">Tên Chương</label>
                                <input name="nameChapter" ref={forms.register}></input>
                            </div>

                            <div className="GroupForm">
                                <label htmlFor="stt">Số Thứ Tự</label>
                                <input name="stt" ref={forms.register}></input>
                            </div>
                            <Button htmlType='submit'>Lưu</Button>
                        </form>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table dataSource={DataChap} columns={columns}></Table>
                </Col>
            </Row>
        </div>
    )
}

export default Chapter
