import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import CloseNavbar from "./CloseNavbar";
import Uploader from "../data/Uploader";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4.3rem;
  border-right: 1px solid var(--color-grey-100);
  transition: width 10s ease-in-out;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: ${(({ showNavbar }) => (showNavbar ? "auto" : "0px"),
  {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100vh",
  })};
  ${(props) => (props.showNavbar ? "" : "display: none")}

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar({ showNavbar, onToggle }) {
  return (
    <>
      <StyledSidebar showNavbar={showNavbar}>
        <Logo />
        <MainNav />
        <CloseNavbar onToggle={onToggle} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
