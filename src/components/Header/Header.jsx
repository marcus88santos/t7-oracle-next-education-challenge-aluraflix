import Btn from "../Btn/Btn";
import "./header.css";

const Header = () => {
  if (window.screen.width >= 450) {
    return (
      <header>
        <img src="/images/logo.png" alt="Logo do AluraFlix" />
        <nav>
          <Btn to="/" location="header">
            Home
          </Btn>
          <Btn to="/new-video" location="header">
            Novo Vídeo
          </Btn>
        </nav>
      </header>
    );
  } else {
    return <></>;
  }
};

export default Header;
