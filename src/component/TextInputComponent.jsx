import React, { useState } from "react";
import PropTypes from "prop-types";

TextInputComponent.propTypes = {
  onSubmit: PropTypes.func,
};
TextInputComponent.defaultProps = {
  onSubmit: null,
};

export default function TextInputComponent(props) {
  const { onSubmit } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    if (!onSubmit) return;
    const formValues = {
      searchTerm: e.target.values,
    };
    onSubmit(formValues);
  };

  return (
    <form>
      <label htmlFor="default-input" className="labelInputField">
        tìm kiếm khóa học
      </label>
      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        type="text"
        className="textInput"
      />
    </form>
  );
}
