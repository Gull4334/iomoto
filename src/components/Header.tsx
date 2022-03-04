import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const toggleActiveAndNavigateTab = (element: React.MouseEvent<HTMLLIElement, MouseEvent>, component: string) => {
        if (document.getElementsByClassName('active').length > 0) {
            let allElements = Array.from(document.querySelectorAll('.active'))
            for (let element of allElements) {
                element.classList.remove('active');
            }
        }

        element.currentTarget.className = 'active';
        navigate(component);
    }


    const switchToGerman = (e: React.ChangeEvent<HTMLInputElement>) => {
        const languageValue = e.currentTarget.checked ? 'gr' : 'en';
        i18n.changeLanguage(languageValue);
    }

    return (<>
        <ul className="nav nav-pills container countires-area">
            <li className="active" onClick={(e) => toggleActiveAndNavigateTab(e, '/')} role="presentation">
                <a href="#">{t('home')}</a>
            </li>
            <li onClick={(e) => toggleActiveAndNavigateTab(e, '/countries')} role="presentation">
                <a href="#">{t('countries')}</a></li>

            <li className="pull-right">
                <a>
                    <div>
                        <input onChange={(e) => switchToGerman(e)}
                            type="checkbox" className="locale-checkbox" />
                        <label>German Language</label>
                    </div></a>
            </li>
        </ul>
    </>);

}

export default Header;