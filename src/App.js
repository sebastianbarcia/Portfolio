//Styles
import "./App.scss";

//Components
import FrontPage from "./components/FrontPage/FrontPage";
import AboutMe from "./components/AboutMe/AboutMe";
import GroupSecondSection from "./components/GroupSecondSection/GroupSecondSection";
import Contact from "./components/contact-footer/Contact";
import SelectColors from "./components/SelectColors/SelectColors";
import HeadHelmet from "./components/HeadHelmet/HeadHelmet";

//Vectors
import IconArrowUp from "./Vectors/IconArrowUp";

//Context
import { TranslateProvider } from "./context/context";
import { SelectColorProvider } from "./context/SelectColorContext";

function App() {
  return (
    <TranslateProvider>
      <SelectColorProvider>
        <div className="App">
          <HeadHelmet/>
          <FrontPage />
          <AboutMe />
          <GroupSecondSection />
          <Contact />
          <SelectColors />
          <IconArrowUp />
        </div>
      </SelectColorProvider>
    </TranslateProvider>
  );
}

export default App;
