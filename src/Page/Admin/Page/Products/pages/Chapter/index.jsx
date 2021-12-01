import { Button, Col, PageHeader, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import ChapterApi from '../../../../../../api/chapterApi';

const Chapter = (props) => {
    const match = useRouteMatch();
    const [DataChap, setDataChap] = useState();
    let history = useHistory();


    useEffect(() => {
        const idProduct = match.params.id;
        const fetchCataByID = async (idCata) => {
            const res = await ChapterApi.GetChapterByIdProduct(idProduct)
            return setDataChap(res.data);;
        }

        fetchCataByID(idProduct)
    }, [])

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
                    làm cái box thêm chỗ này
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
