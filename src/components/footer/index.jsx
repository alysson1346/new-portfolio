import { Div, Text, Link } from "./style";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <Div>
      <div>
        <Text>Faça contato via:</Text>
        <div className="contact">
          <Link
            href="https://www.linkedin.com/in/alysson-colombo-7b5b84207/"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin
          </Link>
          <Link href="mailto:alyssoncolombo@outlook.com" target="_blank">
            <FaRegEnvelope />
            Email
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5519999281346"
            target="_blank"
          >
            <FaWhatsapp />
            Whatsapp
          </Link>
        </div>
      </div>
      <div>
        <Text>Conheça meu repositório:</Text>
        <Link href="https://github.com/alysson1346" target="_blank">
          <FaGithub />
          Github
        </Link>
      </div>
    </Div>
  );
};
