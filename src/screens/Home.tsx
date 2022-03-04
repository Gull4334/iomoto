import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="container countires-area">
            <div className="well">
                <p>{t('p1')}
                
                <br />
                <br />
                {t('p2')}
                <br />
                <br />
                {t('p3')}
                <br />
                <br />
                {t('p4')}
                <br />
                <br />
                </p>
            </div>
        </div>
    );
}

export default Home;