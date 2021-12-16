import { LoadingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from "react";
import ItemList from './ItemList';

const { TabPane } = Tabs;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const ListMember = (props) => {

  const { data } = props;
  console.log(data);
  return (
    <>
      <Tabs tabPosition="left" theme="light">
        {
          data ?
            data.map((item, index) => (
              <TabPane tab={item.name} key={index}>
                <ItemList id = {item._id} />
              </TabPane>
            ))
            :
            <LoadingOutlined />
        }
      </Tabs>


    </>
  );
}

export default ListMember