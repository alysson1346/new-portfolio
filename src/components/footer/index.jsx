import { Div, Text, Link } from "./style";

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
            Linkedin
          </Link>
          <Link href="mailto:alyssoncolombo@outlook.com" target="_blank">
            Email
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5519999281346"
            target="_blank"
          >
            Whatsapp
          </Link>
        </div>
      </div>
      <div>
        <Text>Conheça meu repositório:</Text>
        <Link href="https://github.com/alysson1346" target="_blank">
          Github
        </Link>
      </div>
    </Div>
  );
};
