import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const FireWorks: React.FC = () => {
  const particlesInit = async (preset: any) => {
    await loadFireworksPreset(preset);
  };

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
    </>
  );
};

export default FireWorks;
