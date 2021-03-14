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
        target="_blank" rel="noreferrer"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="50px" height="50px" />
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
                <a href="https://drive.google.com/file/d/1CkhLXaKBthhyxugrNZ6wWfkUJPs2oa0f/view"
                  target="_blank" rel="noreferer">
                    <strong>|{">"}</strong> video record of  
                    <a href="https://github.com/Future-Made/demand-upon-tune-web"> current app in development,
                    </a>
                    </a> based on <a href="https://tune.fullyforged.com/"><strong>tune.fullyforged.com</strong></a>
                  <br></br>                  
                  <br></br>

                <a href="https://github.com/future-made"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> humbly, open sourcing everything</a>
                <br></br>
                <br></br>


                  
                <a href="https://youtu.be/s3rbK49uzAE"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> project status and cooperations</a>
                <br></br>

                <a href="https://miro.com/app/board/o9J_lcIxk6U=/"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> participatory design (iteration#1)</a>
                <br></br>
                <a href="https://imgur.com/U6cuRw3"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> optimistic comparison</a>
                <br></br>
                <a href="https://miro.com/app/board/o9J_ldhZvuk=/"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> proposed co-op model for art events</a>
                <br></br>

                <a href="https://www.pearltrees.com/the_offset_movement"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> reading material</a>
                <br></br>

                <a href="https://docs.google.com/presentation/d/1vHhyi8oaW5J4Td5IXJklP_yQTRXxO1XEdY2Rbwi-d2U/"
                  target="_blank" rel="noreferrer"><strong>|{">"}</strong> proposal for re-establishing trust</a>
                <br></br>

                {/* TODO 1: update for typos 
                  TODO 2: add to top/include where needed */}
                <a href="https://offsetmovement.org"
                  target="_blank" rel="noreferrer"> 
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
                    <strong>|{">"}</strong> local and planetary awareness and togetherness <br></br> 
                    aka. 
                    <button>
                      <a  href="https://i.imgur.com/r0xZEvy.jpg" target="_blank" rel="noreferrer">
                      "reason and impact {"<"}|{">"} locally and globally"
                      
                      </a> 
                      </button>
                    <br></br>
                    <br></br>

                    <strong>|{">"}</strong>  individual initiative-taking and collective decision-making
                    <br></br>
                    <br></br>
              
                    <strong>|{">"}</strong>
                    <button> 
                      <a href="https://i.imgur.com/4A7je2S.png" target="_blank" rel="noreferrer">universal basic experiences</a> 
                    </button> 
                    <br></br>via STEM to STEAM transformation
                    <br></br>
                    <br></br>

                    <strong>|{">"}</strong> demand-awareness <br></br> in all marketed fields<br></br>
                      aka. less "over-prediction" 
                      (intentions over impressions)
                    <br></br>
                    <br></br>
                    <strong>|{">"}</strong> demand-orientation <br></br> in the goods and services<br></br>
                    aka. less “over-production”
                    (demand over supply)
              

              </Col>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("MANY THANKS TO")}</S.Language>
                
                <S.Para>
                  <a href="https://zenodo.org/record/1193238" target="_blank" rel="noreferrer">
                    Artwork with train @ intro, originally included in the book for CERN, named: <strong>Science Bridging Cultures</strong><br></br><br></br>
                  <strong>
                  Designed by: Davide Angheleddu, Justino António Cardoso, Margarita Cimadevila, Angelo Falciano, Michael Hoch, Karen Panman and Islam Mahmoud Sweity
                  </strong>
                  </a> 
                </S.Para>

                <S.Para>
                  <a href="https://github.com/Adrinlol/landy-react-template" target="_blank" rel="noreferrer">
                  <br></br>
                  <br></br>
                  ++
                  <br></br>
                  <br></br>
                  
                  Initial code of our homepage page, a React.js template accessible at 
                  <a href="https://landly.website" target="_blank" rel="noreferrer"><strong> landly.website</strong></a> <br></br><br></br>
                  <strong>Developed by <a href="https://github.com/Adrinlol" target="_blank" rel="noreferrer">Lasha Kakabadze ~~ @Adrinlol</a></strong>
                    </a>

                    <br></br>
                  <br></br>
            
                   
                  <br></br>
                  <br></br>
                    ++
                  <br></br>
                  <br></br>
                  
                  <a href="https://diannemalone.com/blog/wp-content/uploads/2019/04/now-digital-are-you-ready-for-change-4-638.jpg" target="_blank" rel="noreferrer">
                  The "it's time" picture on collaborators list, 
                    </a>
                  <strong> is from an inspiring post by<a href="https://diannemalone.com/" target="_blank" rel="noreferrer"> Dianne Malone</a></strong>
                    

                    <br></br>
                  <br></br>
                    ++
                  <br></br>
                  <br></br>
                  The song,  
                  <a href="https://www.youtube.com/watch?v=afQTyDtcUu0&t=2550s" target="_blank" rel="noreferrer"><strong> "Remain Fluid"</strong></a>
                  <strong> by <a href="http://www.tommyguerrero.com/" target="_blank" rel="noreferrer">Tommy Guerrero</a></strong>
                    
                
                </S.Para>

                
                  
  
              </Col>

              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("See you in the future")}</S.Language>

                
                <S.Para>decentralised @ planet Earth</S.Para>
                <br></br>

                until then,

                for demand-event-upon-stream concept,

                <button>
                  <a href="https://community.spotify.com/t5/Live-Ideas/Demand-Event-Performance-Upon-Stream-Listen/idi-p/5096642"
                     target="_blank" rel="noreferrer">
                    support us on Spotify campaign, maybe? </a>
                  
                  </button>
                  <br></br> 
             
                
                <button>
                  <a href="https://www.youtube.com/watch?v=afQTyDtcUu0&t=2550s"
                     target="_blank" rel="noreferrer">
                    ~ remain fluid ~ </a>
                  
                  </button>

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