import './Particle.css';
import Particles from 'react-tsparticles';

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 1,
            density: {
              enable: true,
              value_area: 1,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0,
          },
          move: {
            direction: 'right',
            speed: 1,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 7,
              opacity_min: 0.05,
            },
          },
          color: {
            value: '#FFD700',
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
