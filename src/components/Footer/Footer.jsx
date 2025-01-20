import { CgAdd } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import Btn from "../Btn/Btn";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Btn to="/" location="footer" icon={<GoHome />}>
          HOME
        </Btn>
        <Btn to="/new-video" location="footer" icon={<CgAdd />}>
          NOVO VÍDEO
        </Btn>
      </nav>
    </footer>
  );
};

export default Footer;
