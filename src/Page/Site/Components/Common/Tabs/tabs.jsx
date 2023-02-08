import { Tabs } from 'antd';
import React from 'react';
import { ListHot, ListNew, ListSale } from '../../../Page/Home/Components';



const { TabPane } = Tabs;
const Tab = () => {
    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Hot nhất" key="1">
                <ListHot />
            </TabPane>
            <TabPane tab="Mới nhất" key="2">
                <ListNew />
            </TabPane>
            <TabPane tab="Đang giảm giá" key="3">
                <ListSale />
            </TabPane>
            {/* <TabPane tab="Bán chạy nhất" key="4">
                <ListBestSeller/>
            </TabPane> */}
        </Tabs>
    );
};

export default Tab;
