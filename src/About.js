import './About.css';
import Tabs from './Tabs'

function About() {
  return (
    <div className="About">
      <h1 className='heading-shadow mb-10'>Why DIAPAIR?</h1>
      <div className="flex justify-evenly items-center info-container h-min">
        <h6 className='white text-center lg:text-2xl border-dashed border-white border-2 rounded-xl w-1/4 p-10 h-full moving-border'>DIAPAIR is a student-connect platform that allows for DIA students of varied experience and age to collaborate with peers.</h6>
        <Tabs />
      </div>
    </div>
  );
}

export default About;
