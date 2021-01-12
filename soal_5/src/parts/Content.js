import React from "react";
import { IconList } from "../assets";
import Calender from "./Calender";
import ListNoted from "./ListNoted";
import Modal from "./Modal";
import Search from "./Search";

import dataCreate from "../json/dataCreate.json";

export default function Content() {
  return (
    <>
      <section>
        <div className="container pt-4">
          <div className="row">
            <div className="col-auto pr-6" style={{ width: 349 }}>
              <div className="content-left">
                <img
                  src={IconList}
                  alt="icon list to do"
                  className="img-list"
                />
                <div className="title-todo-list">
                  <p className="font-weight-bold line-height-1 mb-2 title-list">
                    Hallo, Sam!
                  </p>
                  <p className="font-weight-light">
                    You have 2 tasks left for today, Already completed Task
                    today?
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "44px" }}>
                <div className="col-auto">
                  <h6 className="mt--4">
                    <Calender />
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-6 pl-5">
              <div className="content-right">
                <h1 className="font-weight-bold line-height-1 mb-3">
                  Task For Today
                </h1>
                <div className="row">
                  <div className="col-4">
                    <Modal />
                  </div>
                  <div className="col-8">
                    <Search name="" />
                  </div>
                </div>
                <div className="row">
                  <ListNoted data={dataCreate.noted} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
