import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
const ListPro = () => {
    return (
        <>
            <div className="List-filter">
                <div className="List-filter_result">Trang 1/12 của 53 sản phẩm</div>
                <form action="" className="List-filter_sort">
                    <Select
                        labelInValue
                        defaultValue={{ value: 'new' }}
                        style={{ width: 230, height: 50 }}
                        onChange={handleChange}
                    >
                        <Option value="new">Sắp xếp theo thứ tự mới nhất</Option>
                        <Option value="pricelow">Sắp xếp theo giá: thấp đến cao</Option>
                        <Option value="pricehigh">Sắp xếp theo giá: cao đến thấp</Option>
                    </Select>
                </form>
            </div>
        </>
    )
}

export default ListPro

