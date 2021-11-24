import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/Common/FromControl/InputField/index';

const FromRole = (props) => {
    const forms = useForm({
        defaultValues: {
            name: props.data.name,
        },
    });


    return (
        <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>

            <div className="GroupForm">
                <label htmlFor="name">Tên chức năng</label>
                <InputField name="name" type='text' form={forms}></InputField>
            </div>

            <Button htmlType='submit'>Lưu</Button>
        </form>
    )
}

export default FromRole