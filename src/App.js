import './App.css';
import Header from './Header/Header.jsx';
import BriefIntro from './BriefIntro/BriefIntro';
import Hobbies from './Hobbies/Hobbies';
import Count from './Count/Count';
import Offer from './Offer/Offer';
import WorkExpertise from './WorkExpertise/WorkExpertise';
import Projects from './Projects/Projects';
import CodingActivity from './CodingActivity/CodingActivity';
import Freelance from './Freelance/Freelance';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <BriefIntro />
        <Hobbies />
        <Count />
        <Offer />
        <WorkExpertise/>
        <Projects/>
        <CodingActivity/>
        <Freelance/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}

export default App;
