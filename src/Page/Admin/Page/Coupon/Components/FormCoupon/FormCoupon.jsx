import { Button } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/Common/FromControl/InputField';

const FormCoupon = (props) => {
    const forms = useForm({
        defaultValues: {
            code: props.data.code,
            percent: props.data.percent,
        },
    });
    return (
        <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>

            <div className="GroupForm">
                <label htmlFor="code">Mã giảm</label>
                <InputField name="code" type='text' form={forms}></InputField>
            </div>

            <div className="GroupForm">
                <label htmlFor="percent">Số tiền giảm</label>
                <InputField name="percent" type='text' form={forms}></InputField>
            </div>

            <Button htmlType='submit'>Lưu</Button>
        </form>
    )
}

export default FormCoupon
