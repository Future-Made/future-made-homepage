import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";
import { Route } from "react-router-dom";

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


              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Work in progress")}</S.Title>

                <a href="https://github.com/future-made"
                  target="_blank"><strong>|{">"}</strong> humbly, open sourcing everything</a>
                <br></br>
                <a href="https://github.com/orgs/future-made/projects"
                  target="_blank"><strong>|{">"}</strong> project status and cooperations</a>
                <br></br>

                <a href="https://miro.com/app/board/o9J_lcIxk6U=/"
                  target="_blank"><strong>|{">"}</strong> participatory design (iteration#1)</a>
                <br></br>
                <a href="https://imgur.com/U6cuRw3"
                  target="_blank"><strong>|{">"}</strong> optimistic comparison</a>
                <br></br>
                <a href="https://miro.com/app/board/o9J_ldhZvuk=/"
                  target="_blank"><strong>|{">"}</strong> proposed co-op model for art events</a>
                <br></br>

                <a href="https://www.pearltrees.com/the_offset_movement"
                  target="_blank"><strong>|{">"}</strong> reading material</a>
                <br></br>

                <a href="https://docs.google.com/presentation/d/1vHhyi8oaW5J4Td5IXJklP_yQTRXxO1XEdY2Rbwi-d2U/"
                  target="_blank"><strong>|{">"}</strong> proposal for re-establishing trust</a>
                <br></br>

                {/* TODO 1: update for typos 
                  TODO 2: add to top/include where needed */}
                <a href="https://offsetmovement.org"
                  target="_blank"> 
                  <strong>     {"<"}|...</strong> <strong>|{">"}    </strong> 
                  <br></br>
                  non-perfectionist manifest</a>
                  <br></br>

              </Col>

              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />


              </Col>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Come, as you are")}</S.Language>
                <S.Large to="/">{t("")}</S.Large>
                <S.Para>
                  {t(
                    `future, made collective`
                  )}
                </S.Para>
                <a href="mailto:future.made@offsetmovement.org">
                  <S.Chat>{t(`email: future.made@offsetmovement.org`)}</S.Chat>
                </a>
                <Row>
                  <SocialLink
                    href="https://github.com/Future-Made"
                    src="github.svg"
                  />
                  <SocialLink
                    href="https://twitter.com/made_future"
                    src="twitter.svg"
                  />

                </Row>
              </Col>

            </Row>
            <Row type="flex" justify="space-between">

            <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("PHILOSOPHY AND HOPE")}</S.Language>
          
                    <strong>
                    future and impact drivenness via: <br></br>
                    </strong> <br></br>
                    encouragement<br></br>
                    <strong>+</strong> empowerment <br></br>
                    <strong>----------------------</strong> <br></br>
                    = enablement.<br></br>
                 
                    <br></br>
                    <strong>|{">"}</strong> local and planetary awareness <br></br> and togetherness
                    <br></br>
                    <br></br>

                    <strong>|{">"}</strong>  individual initiative-taking and collective decision-making
                    <br></br>
                    <br></br>
              
                    <strong>|{">"}</strong>  achieving universal basic experiences 
                    <br></br>via arts and science
                    <br></br>
                    <br></br>

                    <strong>|{">"}</strong> incentivising demand-awareness <br></br> in the creative fields<br></br>
                      aka. intentions over impressions
                    <br></br>
                    <br></br>
                    <strong>|{">"}</strong> demand-orientation <br></br> in the goods and services<br></br>
                    aka. less “over-production”
              

              </Col>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("MANY THANKS TO")}</S.Language>
                
                <S.Para>
                  <a href="https://zenodo.org/record/1193238" target="_blank">
                    Artwork with train @ intro, originally included in the book for CERN, named: <strong>Science Bridging Cultures</strong><br></br><br></br>
                  <strong>
                  Designed by: Davide Angheleddu, Justino António Cardoso, Margarita Cimadevila, Angelo Falciano, Michael Hoch, Karen Panman and Islam Mahmoud Sweity
                  </strong>
                  </a> 
                </S.Para>

                <S.Para>
                  <a href="https://github.com/Adrinlol/landy-react-template" target="_blank">
                  <br></br>
                  <br></br>
                  ++
                  <br></br>
                  <br></br>
                  
                  Initial code of our homepage page, a React.js template accessible at 
                  <a href="https://landly.website"><strong> landly.website</strong></a> <br></br><br></br>
                  <strong>Developed by <a href="https://github.com/Adrinlol">Lasha Kakabadze ~~ @Adrinlol</a></strong>
                    </a>
                </S.Para>
          
  
              </Col>

              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("LOCATION")}</S.Language>
                <S.Para>decentralised @ planet Earth</S.Para>
              </Col>

       
              {/* <Col lg={6} md={6} sm={12} xs={24}>
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
              </Col> */}
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
              <div
                className="license"
                dangerouslySetInnerHTML={{
                  __html: `
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />  &nbsp This work is licensed under a  Creative Commons Attribution 4.0 International License  </a>.
                  `
                }}
              />
            </Row>

          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);