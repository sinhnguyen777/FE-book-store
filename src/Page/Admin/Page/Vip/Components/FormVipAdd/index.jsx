import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/Common/FromControl/InputField/index';

const FormVipAdd = (props) => {
    const forms = useForm({
        defaultValues: {
            name: '',
            price: '',
            time: '',
        },
    });


    return (
        <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>

            <div className="GroupForm">
                <label htmlFor="name">Tên Gói VIP</label>
                <InputField name="name" type='text' form={forms}></InputField>
            </div>
            <div className="GroupForm">
                <label htmlFor="price">Giá Gói</label>
                <InputField name="price" type='text' form={forms} ></InputField>
            </div>
            <div className="GroupForm">
                <label htmlFor="time">Thời gian hết hạn gói</label>
                <InputField name="time" type='number' form={forms}></InputField>
            </div>
            <Button htmlType='submit'>Lưu</Button>
        </form>
    )
}

export default FormVipAdd