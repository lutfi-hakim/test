import React from "react";
import { IconSetting, avatar } from "../assets/index";
import BrandIcon from "../parts/IconText";

export default function Header() {
  return (
    <div>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <img src={avatar} alt="img-profile" />
                </li>
                <li className="nav-item">
                  <div className="nav-link" type="link" href="/agents">
                    Samsul Arifin
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" type="link" href="/agents">
                    <img src={IconSetting} alt="icon setting" />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
