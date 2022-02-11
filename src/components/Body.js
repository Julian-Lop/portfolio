import '../css/styles.css';
import SectionIntro from './SectionIntro';
import SectionAbout from './SectionAbout';
import SectionPortfolio from './SectionPortfolio.js';
import SectionContact from './SectionContact';

function Body() {
  return (
    <div className="Body">
        <SectionIntro/>
        <SectionAbout/>
        <SectionPortfolio/>
        <SectionContact/>
    </div>
  );
}

export default Body;