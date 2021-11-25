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
                <div className="List-filter_result">Showing 1–12 of 53 results</div>
                <form action="" className="List-filter_sort">
                <Select
                    labelInValue
                    defaultValue={{ value: 'new' }}
                    style={{ width: 230 }}
                    onChange={handleChange}
                >
                    <Option value="new">Sắp xếp theo thứ tự mới nhất</Option>
                    <Option value="pricelow">Sắp xếp theo giá: thấp đến cao</Option>
                </Select>
                </form>
            </div>
        </>
    )
}

export default ListPro

