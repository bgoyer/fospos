import { useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router";
import { TipJar } from "@phosphor-icons/react";

import { ThemeSwitcher } from "@/components";
import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import { apiResolver } from "../../utilities/urlHelper";

const Layout = () => {
  const [theme, setTheme] = useState(lightTheme);

console.log(import.meta)

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <Header>
          <HeaderNav>
            <Logo>
              <TipJar size={24} weight="bold" />
            </Logo>
            <NavLink to="/">Home</NavLink>
            <NavLink to="admin">Admin</NavLink>
            <NavLink to="pos">Point of Sale</NavLink>
            <NavLink to='/swagger' target="_blank">
              API Documentation
            </NavLink>
          </HeaderNav>
          <ThemeSwitcher onChange={setTheme} />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Home>
    </ThemeProvider>
  );
};

export default Layout;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray12};
  height: 100%;
`;

const Home = styled.div`
  display: grid;
  grid-auto-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  background-color: ${(props) => props.theme.colors.gray5};
  padding: 12px 16px;
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  & > a {
    color: ${(props) => props.theme.colors.gray11};
    font-weight: 700;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  color: ${(props) => props.theme.colors.gray12};
  padding: 4px 24px 4px 8px;
  line-height: 0;
  & svg {
    line-height: 0;
  }
`;
