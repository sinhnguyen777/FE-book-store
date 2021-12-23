import { LoadingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from "react";
import ListPermission from './lisPremission';

const {TabPane } = Tabs;

const ListRole = (props) => {

  const {data} = props;
  return (
    <>
      <Tabs tabPosition="left" theme="light" className="TabMember">
        
        {
          data ?
          data.map((item,index)=> (
            <TabPane tab={item.name} key={index}>
              <ListPermission idRole = {item._id} data={item.listPermissions} />
            </TabPane>
          ))
        :
        <LoadingOutlined />
        } 
      </Tabs>
      
      
    </>
  );
}

export default ListRole