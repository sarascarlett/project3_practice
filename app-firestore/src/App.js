import logo from './logo.svg';
import './App.css';
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./App.css";
import ListOfClasses from './Home';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <div className="App">
      <div align = "left">
        <ListOfClasses></ListOfClasses>
      </div>
        <div> 
            <AnchorLink href="#submitReview">
                <button>Submit a Review</button>
            </AnchorLink>
            <AnchorLink href="#allReviews">
                <button>See All Reviews</button>
            </AnchorLink>
        </div>
        <WelcomePage></WelcomePage>
    </div>
  );
}

export default App;
