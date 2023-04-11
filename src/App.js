import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { AboutMe } from "./components/aboutMe";
import { MySkills } from "./components/mySkills";
import { MyCertificates } from "./components/myCertificate";
import { MyProjects } from "./components/myProjects";
import { Footer } from "./components/footer";
import { ButtonTop } from "./components/buttonTop";
import { GlobalStyle } from "./components/body";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Banner />
      <AboutMe />
      <MySkills />
      <MyCertificates />
      <MyProjects />
      <Footer />
      <ButtonTop />
    </ThemeProvider>
  );
};

export default App;
