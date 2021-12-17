import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const InputSearch = (props) => {
  const forms = useForm();
  let history = useHistory();

  const handleSearchAuthor = async (values) => {
    const { search } = values;
    props.handleListAuthour(search);
  };
  console.log(forms);
  return (
    <form onSubmit={forms.handleSubmit(handleSearchAuthor)}>
      <div className="form_holder">
        <input
          type="text"
          name="search"
          id="search"
          autocomplete="off"
          required
          className="search_field"
          placeholder="Search"
          ref={forms.register}
        />
        <button type="submit" className="search_submit">
          <span className="search_label">
            <SearchOutlined />
          </span>
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
