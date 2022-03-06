import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className=" container-area">
        <div className="well">
          <p>
            {t("p1")} {process.env.REACT_APP_USER_NAME}
          </p>
          <p> {t("p2")} </p>
          <p> {t("p3")} </p>
          <p> {t("p4")} </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
