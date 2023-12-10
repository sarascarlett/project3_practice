import logo from './logo.svg';
import './App.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./App.css";
import ListOfClasses from './Home';
import WelcomePage from './WelcomePage';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Villanova Computer Science Courses</h1>
      <div align = "left">
        <ListOfClasses></ListOfClasses>
      </div>
        <div> 
            <AnchorLink href="#submitReview">
                <Button>Submit a Review</Button>
            </AnchorLink>
            <AnchorLink href="#allReviews">
                <Button>See All Reviews</Button>
            </AnchorLink>
        </div>
        <WelcomePage></WelcomePage>
    </div>
  );
}

export default App;