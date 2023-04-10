import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { DivImage } from "./style";
import { Container } from "./style";

export const Bolha = ({ children }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fps_limit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { particles_nb: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#b0009f" },
            links: {
              color: "#d3d3d3",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 300 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { random: true, value: 5 },
          },
          detectRetina: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <DivImage>{children}</DivImage>
    </Container>
  );
};
