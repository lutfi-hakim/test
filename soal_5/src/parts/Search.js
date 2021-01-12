import React from "react";
import propTypes from "prop-types";
import { IconSearch } from "../assets";

export default function Search(props) {
  const { value, type, placeholder, name } = props;

  return (
    <div className="search">
      <input name={name} type={type} value={value} placeholder={placeholder} />
      <img className="img-search" alt="icon search" src={IconSearch} />
    </div>
  );
}
Search.defaultProps = {
  type: "text",
  placeholder: "Cari",
};
Search.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
};
