import React from "react";
import Particles from "react-particles-js";

const ParticlesBackground = ({ children }) => {
  const ptc = {
    interactivity: {
      events: {
        onclick: { enable: true },
      },
    },
    particles: {
      line_linked: {
        enable: false,
      },
      number: { value: 90 },
    },
  };

  return (
    <>
      <Particles params={ptc} style={{ position: "fixed" }} />

      {children}
    </>
  );
};

export default ParticlesBackground;
