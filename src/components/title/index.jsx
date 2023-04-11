import { Titles } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Title = ({ children, black }) => {
  return (
    <>
      <Titles
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        black={black}
      >
        {children}
      </Titles>
    </>
  );
};
