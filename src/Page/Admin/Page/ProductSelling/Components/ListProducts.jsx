import { Table } from 'antd'
import React from 'react'

const ListProducts = (props) => {
    
    const columns = [
        // {
        //   title: 'Sách',
        //   dataIndex: 'nameProduct',
        //   key: 'nameProduct',
        // },
      ];
    return (
        <>
            <Table className="ListCataTable" dataSource={props.data} columns={columns} />
        </>
    )
}

export default ListProducts
