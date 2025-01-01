import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";

import { Moon, Sun } from "@phosphor-icons/react";

import { Button } from "@/components";

import {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
} from "@radix-ui/colors";

// Create your light theme
const lightTheme = {
    colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
    },
};

// Create your dark theme
const darkTheme = {
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
    },
};

const Layout = () => {
    const [mode, setMode] = useState("light");
    const theme = mode == "light" ? lightTheme : darkTheme;

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeProvider theme={theme}>
            <Home>
                <Header>
                    <HeaderNav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="admin">Admin</NavLink>
                        <NavLink to="pos">Point of Sale</NavLink>
                        <NavLink to="pos">Point of Sale</NavLink>
                    </HeaderNav>
                    <Button onClick={toggleMode}>
                        {mode === "light" ? (
                            <Sun size={16} weight="bold" />
                        ) : (
                            <Moon size={16} weight="bold" />
                        )}
                    </Button>
                </Header>
                <Nav>
                    <Button onClick={toggleMode}>
                        {mode === "light" ? (
                            <Sun size={16} weight="bold" />
                        ) : (
                            <Moon size={16} weight="bold" />
                        )}
                    </Button>
                </Nav>
                <Main>
                    <Outlet />
                </Main>
            </Home>
        </ThemeProvider>
    );
};

export default Layout;

const Home = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: auto 1fr auto;
    grid-template-areas:
        "nav header"
        "nav main"
        "nav footer";

    height: 100%;
    width: 100%;

    & > * {
        padding: 8px;
        background-color: white;
    }
`;

const Header = styled.header`
    grid-area: header;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${(props) => props.theme.colors.gray1};
`;

const Main = styled.main`
    grid-area: main;
    background-color: ${(props) => props.theme.colors.gray1};
`;

const Nav = styled.nav`
    grid-area: nav;
    background-color: ${(props) => props.theme.colors.gray3};
`;

const HeaderNav = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    & > a {
        color: ${(props) => props.theme.colors.gray11};
        text-decoration: none;
    }
`;
