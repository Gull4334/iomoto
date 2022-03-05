import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const toggleActiveAndNavigateTab = (
    element: React.MouseEvent<HTMLLIElement, MouseEvent>,
    component: string
  ) => {
    if (document.getElementsByClassName("active").length > 0) {
      let allElements = Array.from(document.querySelectorAll(".active"));
      for (let element of allElements) {
        element.classList.remove("active");
      }
    }

    element.currentTarget.className = "active";
    navigate(component);
  };

  const switchToGerman = (e: React.ChangeEvent<HTMLInputElement>) => {
    const languageValue = e.currentTarget.checked ? "gr" : "en";
    i18n.changeLanguage(languageValue);
  };

  return (
    <>
      <ul className="nav nav-pills container countires-area">
        <li
          className="active"
          onClick={(e) => toggleActiveAndNavigateTab(e, "/")}
          role="presentation"
        >
          <button type="button">{t("home")}</button>
        </li>
        <li
          onClick={(e) => toggleActiveAndNavigateTab(e, "/countries")}
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
    </>
  );
};

export default Header;
