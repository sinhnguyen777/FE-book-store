import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import prouctApi from '../../../../../api/productApi';
import ItemProduct from '../../../Page/ListProduct/Components/ItemProduct';


const ListHot = () => {
    const [DataHot, setDataHot] = useState([]);

    useEffect(() => {
        const filter = {
            productHot: true
        };
        const fetchProductHot = async (filter) => {

            const res = await prouctApi.GetProducts(filter);
            setDataHot(res.data);
        };

        fetchProductHot(filter);
    }, []);

    const data = DataHot.slice(0, 5);
    // console.log(data);
    return (
        <div className="List-product">
            <ItemProduct data={data} />

        </div>
    );
};

const ListNew = () => {
    const [productNew, setProductNew] = useState([]);
    useEffect(() => {
        const filter = {
            _sort: "",
            column: "createdAt",
            type: "desc",
        };
        const fetchProductHot = async (filter) => {
            const res = await prouctApi.GetProducts(filter);
            setProductNew(res.data);
        };

        fetchProductHot(filter);
    }, []);

    const data = productNew.slice(0, 5);
    console.log(data);
    return (
        <div className="List-product">
            <ItemProduct data={data} />
        </div>
    );
};

const ListSale = () => {
    const [DataHot, setDataHot] = useState([]);

    useEffect(() => {
        const filter = {
            productSale: true
        };
        const fetchProductHot = async (filter) => {

            const res = await prouctApi.GetProducts(filter);
            setDataHot(res.data);
        };

        fetchProductHot(filter);
    }, []);

    const data = DataHot.slice(0, 5);
    console.log(data);
    return (
        <div className="List-product">
            <ItemProduct data={data} />

        </div>
    );
};

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
