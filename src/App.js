//Styles
import './App.scss';

//Components
import FrontPage from './components/FrontPage/FrontPage';
import AboutMe from './components/AboutMe/AboutMe';
import GroupSecondSection from './components/GroupSecondSection/GroupSecondSection';
import Contact from './components/contact-footer/Contact';
import IconArrowUp from './Vectors/IconArrowUp';

import {TranslateProvider} from './context/context'



function App() {
  return (
    <TranslateProvider>
      <div className="App">
        <FrontPage/>  
        <AboutMe/>
        <GroupSecondSection/>
        <Contact/>
        <IconArrowUp/>
      </div>
    </TranslateProvider>
  );
}

export default App;
