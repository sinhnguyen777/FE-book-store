import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';


const InputField = (props) => {
    return (
        <Controller
            name={props.name}
            control={props.form.control}
            as={Input}

            type={props.type}  
            id={props.value}
            placeholder="_ _"
        />
    )
}

export default InputField