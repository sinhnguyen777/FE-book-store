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
            <TabPane tab="Bán chạy nhất" key="1">
                <ListBestSeller/>
            </TabPane>
            <TabPane tab="Tưởng tượng" key="2">
                <ListFantasy/>
            </TabPane>
            <TabPane tab="Lịch sử" key="3">
                <ListHistory/>
            </TabPane>
            <TabPane tab="Nghệ thuật" key="4">
                <ListArt/>
            </TabPane>
        </Tabs>
    )
}

export default Tab
