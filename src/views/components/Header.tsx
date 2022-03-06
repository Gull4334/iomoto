import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const initialLoad = () => {
    let allElements = Array.from(document.querySelectorAll(".active"));
    for (let element of allElements) {
      element.classList.remove("active");
    }
    if (window.location.pathname === "/countries") {
      document.getElementById("countriesTab")?.classList.add("active");
    } else {
      document.getElementById("homeTab")?.classList.add("active");
    }
  };

  initialLoad();

  const switchToGerman = (e: React.ChangeEvent<HTMLInputElement>) => {
    const languageValue = e.currentTarget.checked ? "gr" : "en";
    i18n.changeLanguage(languageValue);
  };

  return (
    <div className="container">
      <ul className="nav nav-pills container-area">
        <li id="homeTab" onClick={(e) => navigate("/")} role="presentation">
          <button type="button">{t("home")}</button>
        </li>
        <li
          id="countriesTab"
          onClick={(e) => navigate("/countries")}
          role="presentation"
        >
          <button type="button">{t("countries")}</button>
        </li>

        <li className="pull-right">
          <button type="button">
            <div>
              <input
                onChange={(e) => switchToGerman(e)}
                type="checkbox"
                className="locale-checkbox"
              />
              <label>German Language</label>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
