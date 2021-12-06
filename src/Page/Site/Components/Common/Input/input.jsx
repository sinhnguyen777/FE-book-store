import { SearchOutlined } from '@ant-design/icons';
import React from 'react'
import { useForm } from 'react-hook-form';
import prouctApi from '../../../../../api/productApi';

const InputSearch = () => {
    const forms = useForm();
    const handleSearchName = async (values) => {
        const { search } = values;
        const res = await prouctApi.GetProductsByname(search);
        console.log(res);
    }
    const handleSearchAuthor = async (values) => {
        const { search } = values;
        const res = await prouctApi.GetProductsByauthor(search);
        console.log(res);
    }
    console.log(forms);
    return (
        <form onSubmit={forms.handleSubmit(handleSearchName)} onSubmit={forms.handleSubmit(handleSearchAuthor)}>
            <div className="form_holder" >
                <input type="text" name="search" id="search" autocomplete="off" required className="search_field" placeholder="Search" ref={forms.register} />
                <button type="submit" className="search_submit">
                    <span className="search_label"><SearchOutlined /></span>
                </button>
            </div>
        </form>
    )
}

export default InputSearch
