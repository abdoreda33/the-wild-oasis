import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  @media (max-width: 768px) {
    gap: 0.6rem;
    margin-left: 10px;
  }
`;
const StyledMenuItem = styled.li`
  @media (max-width: 768px) {
    padding-right: 14px;
    margin-right: -25px;
  }
`;
const Span = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
function HeaderMenu({ onToggle, showNavbar }) {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <StyledMenuItem>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </StyledMenuItem>
      <StyledMenuItem>
        <DarkModeToggle />
      </StyledMenuItem>
      <StyledMenuItem className="navbar" onClick={onToggle}>
        <ButtonIcon>
          <Span>
            {showNavbar ? <AiOutlineAlignRight /> : <AiOutlineAlignLeft />}
          </Span>
        </ButtonIcon>
      </StyledMenuItem>
      <StyledMenuItem>
        <Logout />
      </StyledMenuItem>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
