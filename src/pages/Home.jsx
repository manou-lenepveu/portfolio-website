import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
  return (
    <div className="bg-[var(--bg)]">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default Home;
