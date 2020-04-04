import Head from '../components/Head';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import About from '../components/About';
import HireMe from '../components/HireMe';

const Home = () => {
  return (
    <div className="container">
      <Head title="Mustafa Alfar" description="Mustafa's Portfolio" />
      <Intro />
      <Projects />
      <About />
      <HireMe />
    </div>
  );
};

export default Home;
