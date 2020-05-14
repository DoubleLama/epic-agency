import About from './About.json';
import Home from './Home.json';
import Works from './Works.json';
import Navbar from './Navbar.json';
import StudyCase from './StudyCase.json'

const fr = {
    ...About, ...Home, ...Works, ...Navbar, ...StudyCase //On concatène tous nos objets JSON en un seul
};


export default fr;