import './App.css';
import Header from './Header/Header.jsx';
import BriefIntro from './BriefIntro/BriefIntro';
import Hobbies from './Hobbies/Hobbies';
import Count from './Count/Count';
import Offer from './Offer/Offer';
import WorkExpertise from './WorkExpertise/WorkExpertise';

function App() {
  return (
    <div className="App">
        <Header />
        <BriefIntro />
        <Hobbies />
        <Count />
        <Offer />
        <WorkExpertise/>
    </div>
  );
}

export default App;
