import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Join us")}</S.Language>
                <S.Large to="/">{t("Come, as you are")}</S.Large>
                <S.Para>
                  {t(
                    ``
                  )}
                </S.Para>
                <a href="mailto:future.made@offsetmovement.org">
                  <S.Chat>{t(`email: future.made@offsetmovement.org`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("philosophy")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Impact Orientation")}
                </S.Large>
                <S.Large to="/" left="true">
                  {t("Demand Augmentation")}
                </S.Large>
                <S.Large to="/" left="true">
                  {t("Universal Basic Experiences")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
           
              
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("LOCATION")}</S.Language>
                <S.Para>decentralised @ planet Earth</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Collective")}</S.Title>
                <S.Large left="true" to="/">
                  {t("collaborators")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("blog")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("workspace")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("source code")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("resources")}
                </S.Large>
               
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="de">Deutsche</option>
                    <option value="es">Español</option>
                    <option value="tr">Türkçe</option>
                    <option value="it">Italiana</option>
                    <option value="fr">Française</option>

                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="future_made_logo.svg"
                    aria-label="homepage"
                    width="64px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Future-Made"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/made_future"
                  src="twitter.svg"
                />

                <SocialLink
                  href="https://futuremade.blackblogs.org/"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);