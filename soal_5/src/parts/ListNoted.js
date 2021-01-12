import React from "react";
import { IconDelete, IconEdit, IconSuccess, IconPending } from "../assets";

export default function ListNoted(props) {
  return (
    <section className="container">
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div key={`list-item-${index}`} className="mb-4">
              <div className="card">
                <div className="title-noted">
                  {item.name}
                  {item.status === "Complete" ? (
                    <p className="tag-success">
                      <img
                        src={IconSuccess}
                        alt="success"
                        className="img-tag-success"
                      />
                      {item.status}
                    </p>
                  ) : (
                    <p className="tag">
                      <img
                        src={IconPending}
                        alt="success"
                        className="img-tag-pending"
                      />{" "}
                      {item.status}
                    </p>
                  )}
                </div>
                <div className="meta-wrapper">{item.content}</div>
                <div className="action-card">
                  <button className="btn-action">
                    <img src={IconEdit} alt="edit" className="img-action" />
                  </button>
                  <button className="btn-action">
                    <img src={IconDelete} alt="delete" className="img-action" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
