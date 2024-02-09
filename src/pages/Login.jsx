import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    font-size: 2.1rem; /* اختر الحجم الذي تريده هنا */
  }
`;
function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledHeading as="h4">Log in to your account</StyledHeading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
