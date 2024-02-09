import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Uploader from "../data/Uploader";
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  flex-wrap: wrap;
`;
function AppLayout() {
  const [showNavbar, setShowNavbar] = useState(true);

  function ToggleNavbar() {
    setShowNavbar((show) => !show);
  }
  return (
    <StyledAppLayout>
      <Header onToggle={ToggleNavbar} showNavbar={showNavbar} />
      <Sidebar showNavbar={showNavbar} onToggle={ToggleNavbar} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      
    </StyledAppLayout>
  );
}

export default AppLayout;
