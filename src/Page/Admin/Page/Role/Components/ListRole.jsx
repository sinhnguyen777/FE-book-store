import { LoadingOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React from "react";
import ListPermission from './lisPremission';

const {TabPane } = Tabs;

const ListRole = (props) => {

  const {data} = props;
  return (
    <>
      <Tabs tabPosition="left" theme="light">
        {
          data ?
          data.map((item,index)=> (
            <TabPane tab={item.name} key={index}>
              <ListPermission data={item.listPermissions} />
              <div className="RemoveRole">
                <Button onClick={() => props.handleRemove(item._id)}>Xóa Chức Vụ</Button>
              </div>
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