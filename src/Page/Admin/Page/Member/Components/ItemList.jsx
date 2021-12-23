import { List, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import adminApi from '../../../../../api/adminApi'

const ItemList = (props) => {
    const [Member, setMember] = useState();

    useEffect(() => {
        const fetchListMember = async (id) => {
            const filter = {
                idRole: id
            }
            const res = await adminApi.GetAll(filter)
            setMember(res.data)
        }

        fetchListMember(props.id)
    }, [])

    const columns = [
        {
          title: 'Tên',
          dataIndex: 'fullName',
          key: 'fullName',
        }
      ];

    console.log(Member);
    return (
        <div style={{ width: '100%' }}>
            <Table style={{ width: '100%'}} columns={columns} dataSource={Member} />
        </div>
    )
}

export default ItemList
