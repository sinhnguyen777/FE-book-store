import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col } from 'antd';
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import vipApi from "../../../../api/vipApi";
import ListVip from "./Components/ListVip";
import FormVipAdd from "./Components/FormVipAdd";


const Vip = () => {
    const [demo, setdemo] = useState('')
  const [DataVip, setDataVip] = useState([]);

    let history = useHistory();

    const handleSubmitFrom = (values)=>{
        const fetchUpdateVip = async (data) => {
            try {
                const res = await vipApi.AddVip(data);
                if (res.status == 200) {
                    Swal.fire('...', 'Thêm Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/admin/vip' })
                        }
                    })
                }
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUpdateVip(values);
    };

    const handleRemove = (id)=>{
        try{
            const fetchRemoveVip = async (data) => {
                try {
                    const res = await vipApi.DelVip(data);
                    if (res.status == 200) {
                        Swal.fire('...', 'Xóa Thành Công!', 'success').then((result) => {
                            if (result.isConfirmed) {
                                console.log(1);
                                setdemo(pre=>pre+1);
                                history.push({ pathname: '/admin/vip' })
                            }
                        })
                    }
                } catch (err) {
                    console.log(err);
                    Swal.fire('...', 'Không đủ Thẩm quyền đề xóa', 'error').then((result) => {
                        if (result.isConfirmed) {
                            console.log(1);
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/admin/vip' })
                        }
                    })
                }
            }
    
            fetchRemoveVip(id);
    
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchVip = async () => {
          const res = await vipApi.GetVip()
          setDataVip(res)
        }
    
        fetchVip();
      }, [demo])

    return (
        <div className="CatalogsPage">
            <PageHeader
                className="site-page-header"
                title="Trang Gói VIP"
            />

            <div className="BoxForm">
                <div className="title">Thêm Gói VIP</div>
                <FormVipAdd handleSubmitFrom={handleSubmitFrom} />
            </div>

            <Row className='ListCata'>
                <Col span={24}>
                    <ListVip data={DataVip.data} handleRemove={handleRemove} />
                </Col>
            </Row>
        </div>
    );
}

export default Vip;