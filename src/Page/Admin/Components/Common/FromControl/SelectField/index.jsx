import { Input } from 'antd';
import Select from 'rc-select';
import React from 'react';
import { Controller } from 'react-hook-form';

const { Option } = Select;

const SelectField = (props) => {
    return (
        <Controller
            name={props.name}
            control={props.form.control}
            render={({ ...field }) => (
                <Select defaultValue="lucy" style={{ width: 120 }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            )}
        />
    )
}

export default SelectField