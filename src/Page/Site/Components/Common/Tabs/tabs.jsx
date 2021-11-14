import { Tabs } from 'antd';
import React from 'react'
import ListBestSeller from '../../../Page/Home/components/listBestSeller';
import ListFantasy from '../../../Page/Home/components/listFantasy';
import ListHistory from '../../../Page/Home/components/listHistory';
import ListArt from '../../../Page/Home/components/listArt';


const { TabPane } = Tabs;
const Tab = () => {
    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Best-Sellers" key="1">
                <ListBestSeller/>
            </TabPane>
            <TabPane tab="Fantasy" key="2">
                <ListFantasy/>
            </TabPane>
            <TabPane tab="History" key="3">
                <ListHistory/>
            </TabPane>
            <TabPane tab="Art" key="4">
                <ListArt/>
            </TabPane>
        </Tabs>
    )
}

export default Tab
