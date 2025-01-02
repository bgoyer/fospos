import { Outlet, useNavigate } from "react-router";
import { Hamburger, Money, Users } from "@phosphor-icons/react";
import styled from "styled-components";

import { Button, Tooltip } from "@/components";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        <NavMain>
          <Tooltip
            side="right"
            trigger={
              <Button onClick={() => navigate("/admin/products")}>
                <Hamburger size={24} weight="bold" />
              </Button>
            }
          >
            Manage products
          </Tooltip>
          <Tooltip
            side="right"
            trigger={
              <Button onClick={() => navigate("/admin/users")}>
                <Users size={24} weight="bold" />
              </Button>
            }
          >
            Manage user logins
          </Tooltip>
          <Tooltip
            side="right"
            trigger={
              <Button onClick={() => navigate("/admin/sales")}>
                <Money size={24} weight="bold" />
              </Button>
            }
          >
            Manage sales
          </Tooltip>
        </NavMain>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Admin;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: auto;
  padding: 24px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.gray3};
  padding: 12px;
`;

const NavMain = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
