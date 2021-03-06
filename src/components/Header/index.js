import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        {/* <S.CustomNavLinkSmall onClick={() => scrollTo("expression_of_demand")}>
                    <S.Span>{t("demand-aware framework")}</S.Span>

        </S.CustomNavLinkSmall> */}

        <S.CustomNavLinkSmall
          style={{ width: "160px" }}
          onClick={() => scrollTo("expression_of_demand")}
        >
          <S.Span>
            <Button>{t("expression of demand")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall
          style={{ width: "160px" }}
          onClick={() => scrollTo("discovery_of_demand")}
        >
          <S.Span>
            <Button>{t("discovery of demand")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall
          style={{ width: "160px" }}
          onClick={() => scrollTo("demand_on_air")}
        >
          <S.Span>
            <Button>{t("demand, on-air")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>

        

        
        <S.CustomNavLinkSmall
          style={{ width: "160px" }}
          onClick={() => scrollTo("donation_as_precondition")}
        >
          <S.Span>
            <Button>{t("donation as precondition")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>

      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="future_made_logo.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
