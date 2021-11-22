import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/Common/FromControl/InputField/index';

const FromCata = (props) => {
    const forms = useForm({
        defaultValues: {
            nameCata: props.data.nameCata,
        },
    });


    return (
        <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>

            <div className="GroupForm">
                <label htmlFor="nameCata">Tên Danh mục</label>
                <InputField name="nameCata" type='text' form={forms}></InputField>
            </div>

            <Button htmlType='submit'>Lưu</Button>
        </form>
    )
}

export default FromCata