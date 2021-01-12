import React, { Component } from "react";
import Rodal from "rodal";
import PropTypes from "prop-types";
import "rodal/lib/rodal.css";
import { Plus } from "../assets";
import Calender from "./Calender";
import Button from "../assets/elements/Button";
import Input from "../assets/elements/Input";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.show.bind(this)}
          className="btn-default"
          type="button"
        >
          <img src={Plus} alt="icon plus" className="mr-2" />
          <span>Create New</span>
        </button>
        <Rodal
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          width={500}
          height={680}
        >
          <div className="model-content">
            <div className="row">
              <h4 className="h5 font-weight-bold">New Task</h4>
            </div>
            <div className="row">
              <label htmlFor="duration">Title</label>
              <Input placeholder="Fill title" />
            </div>
            <div className="row">
              <label htmlFor="duration">Description</label>
              <Input placeholder="Fill description" />
            </div>
            <div className="row">
              <label htmlFor="duration">Choosen Date</label>
              <Calender />
            </div>
            <div className="row modal-btn">
              <Button className="btn-light">Cancel</Button>
              <Button className="btn-default isExternal">Create Task</Button>
            </div>
          </div>
        </Rodal>
      </div>
    );
  }
}

Modal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func,
};

Modal.defaultProps = {
  width: 600,
  height: 400,
  measure: "px",
  visible: false,
  closeOnEsc: false,
  closeMaskOnClick: true,
  showCloseButton: true,
  className: "",
  customStyles: {},
};
