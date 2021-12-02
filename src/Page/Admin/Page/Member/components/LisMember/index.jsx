import { LoadingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd'
import React from 'react'
import MemberByRole from '../MemberByRole';

const { TabPane } = Tabs;

const ListMember = (props) => {
    const {data}= props
    return (
        <Tabs tabPosition="left" theme="light">
        {
          data ?
          data.map((item,index)=> (
            <TabPane tab={item.name} key={index}>
              < MemberByRole idRole={item._id} />
            </TabPane>
          ))
        :
        <LoadingOutlined />
        } 
      </Tabs>
    )
}

export default ListMember
