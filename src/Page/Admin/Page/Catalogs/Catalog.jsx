import React, { useEffect, useState } from "react";
import { Button, PageHeader, Row, Col } from 'antd';
import ListCata from './Components/ListCata'
import FromCata from "./Components/FormCata";
import FromCataAdd from "./Components/FormCataAdd";
import cataApi from "../../../../api/cataApi";
import Swal from 'sweetalert2';
import { useHistory } from "react-router";


const CatalogPage = () => {
    const [demo, setdemo] = useState('')
  const [DataCata, setDataCata] = useState([]);

    let history = useHistory();

    const handleSubmitFrom = (values)=>{
        const fetchUpdateCata = async (data) => {
            try {
                const res = await cataApi.AddCata(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Thêm Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/admin/cata' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdateCata(values);
    };

    const handleRemove = (id)=>{
        try{
            const fetchRemoveCata = async (data) => {
                console.log(1);
                try {
                    const res = await cataApi.DelCata(data);
                    if (res.status == 200) {
                        Swal.fire('...', 'Xóa Thành Công!', 'success').then((result) => {
                            if (result.isConfirmed) {
                                console.log(1);
                                setdemo(pre=>pre+1);
                                history.push({ pathname: '/admin/cata' })
                            }
                        })
                    }
                    console.log(res);
                } catch (err) {
                    console.log(err);
                }
            }
    
            fetchRemoveCata(id);
    
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchCata = async () => {
          const res = await cataApi.GetCata()
          setDataCata(res)
        }
    
        fetchCata();
      }, [demo])

    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Trang Danh mục"
            />

            <div className="BoxForm">
                <div className="title">Thêm Danh Mục</div>
                <FromCataAdd handleSubmitFrom={handleSubmitFrom} />
            </div>

            <Row className='ListCata'>
                <Col span={24}>
                    <ListCata data={DataCata.data} handleRemove={handleRemove} />
                </Col>
            </Row>
        </div>
    );
}

export default CatalogPage;