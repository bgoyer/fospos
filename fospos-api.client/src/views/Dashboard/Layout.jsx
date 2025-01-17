import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import styled from "styled-components";

import { Avatar, ThemeSwitcher } from "@/components";
import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";

const Layout = () => {
  const [theme, setTheme] = useState(lightTheme);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Log Out!");
    // Handle Log Out!
    navigate("/admin/users");
  };

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <Header>
          <Section>
            <Avatar>PL</Avatar>
          </Section>
          <Section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="admin">Admin</NavLink>
            <NavLink to="pos">Point of Sale</NavLink>
            <NavLink to="/swagger" target="_blank">
              API Documentation
            </NavLink>
          </Section>
          <Section>
            <NavLink onClick={handleLogout}>Log Out</NavLink>
            <ThemeSwitcher onChange={setTheme} />
          </Section>
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

const Section = styled.div`
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

const LinkSection = styled(Section)`
  justify-content: center;
`;
