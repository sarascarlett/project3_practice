import React, {Component} from 'react';
import EmptyStar from './empty_star.png';
import FilledStar from './full_star.png';
import { firestore } from "./firebase";
import { addDoc, collection} from "@firebase/firestore";
import { useState,useEffect } from 'react';
import Review from './Review';
import Button from 'react-bootstrap/Button';

const SubmitReview = () => {
    const [review, setReview] = useState("");
    const [code, setCode] = useState("");
    const [starRating, setStarRating] = useState("");
    const myCollection = collection(firestore, 'Collection');

    function handleSubmit(e) {
        //this function prevents any default behavior the browser may have to a particular event.
        const data = {
            code: code,
            review: review,
            rating: starRating
        };
        addDoc(myCollection, data);
       e.preventDefault();
       setReview("");
        
      }

      class Stars extends Component {
        constructor(props) {
          super(props);
          this.state = {currRating : 0}
          this.onHover = this.onHover.bind(this)
          this.onClick = this.onClick.bind(this) 
        }
       onHover(e) {
        if (e.target.className === 'star') {
         this.setRating(e.target.dataset.value)
        }
       }
       onClick(e) {
        if (e.target.dataset.value === this.state.currRating){
         this.setRating(e.target.dataset.value)
        }
        setStarRating(e.target.dataset.value)
       }
       setRating(value) {
         this.setState({currRating : value})
       }
       render(){
         return(
         [...Array(this.props.starCount).keys()].map((index) => {
         return (
          <img 
          onMouseOver={this.onHover}
          onClick={this.onClick}
          data-value={index + 1}
          className="star"   
          src={index + 1 <= this.state.currRating ? 
              FilledStar : EmptyStar}
          alt={index + 1 <= this.state.currRating ? 
              "filled star" : "empty star"} />)
          })
         )
        }
       }
        const RatingSystem = (props) =>  {
            return (
              <div>
                <h2>Select a rating:</h2>
              <div className='rating'>
                <Stars starCount={props.starCount}/>
              </div>
              <br></br>
              </div> 
            );
            }

    return (
        <div>
            <br></br>
            <div id="submitReview">
                <h2> Submit a Review for a CSC Class</h2>
            </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    Course Code:&nbsp;
                    <select value={code} onChange={(event)=>setCode(event.target.value)}>
                        <option value="Select">Select</option>
                        <option value="CSC 1051">CSC 1051</option>
                        <option value="CSC 1990">CSC 1990</option>
                        <option value="CSC 1052">CSC 1052</option>
                        <option value="CSC 1300">CSC 1300</option>
                        <option value="CSC 2400">CSC 2400</option>
                        <option value="CSC 2053">CSC 2053</option>
                        <option value="CSC 2300">CSC 2300</option>
                        <option value="CSC 2450">CSC 2450</option>
                        <option value="CSC 1700">CSC 1700</option>
                        <option value="CSC 1800">CSC 1800</option>
                        <option value="CSC 4480">CSC 4480</option>
                        <option value="CSC 2405">CSC 2405</option>
                        <option value="CSC 4700">CSC 4700</option>
                        <option value="CSC 4790">CSC 4790</option>
                    </select>
                </label>
         <br></br>
         <br></br>
         <label>
            Review
            <br></br>
         <textarea name="Review" rows="4" cols="50"
             value={review} onChange={(event)=>setReview(event.target.value)}></textarea>
         </label>
        <br></br>
        <br></br>
        <div className="App">
               <RatingSystem starCount={5} />
             </div>
          <Button onClick={handleSubmit}>Submit Review</Button>
        </form>
        <br></br>
        <br></br>
        </div>

    );
};
 
const AllReviews = () => {
    const dataSource = [
        { title: "Algorithms and Data Structures I ", courseCode: "CSC 1051" },
        { title: "The Enrichment Seminar", courseCode: "CSC 1990"},
        { title: "Algorithms and Data Structures II", courseCode: "CSC 1052" },
        { title: "Discrete Structures", courseCode: "CSC 1300"},
        { title: "Computing Systems I ", courseCode: "CSC 2400" },
        { title: "Platform Based Computing", courseCode: "CSC 2053" },
        { title: "Statistics for Computing", courseCode: "CSC 2300" },
        { title: "Computing Systems II", courseCode: "CSC 2405" },
        { title: "Analysis of Algorithms", courseCode: "CSC 1700" },
        { title: "Programming Languages", courseCode: "CSC 1800" },
        { title: "Theory of Computation", courseCode: "CSC 4480" },
        { title: "Database Systems ", courseCode: "CSC 2405" },
        { title: "Software Engineering", courseCode: "CSC 4700" },
        { title: "Senior Project", courseCode: "CSC 4790" }
    ];

    var listOfClasses =  dataSource.map(course => 
        <div> 
            <div>
                <h5>{course.courseCode} : {course.title}  </h5>
            </div>
            <div>
                <Review code = {course.courseCode}/>
            </div>
        </div>);


    return ( 
        <div>
            <div id="allReviews">
                <h2>All Reviews</h2>
            </div>
            <br></br>
            {listOfClasses}
            <br></br>
        </div>
    ); 
};

 
const WelcomePage = () => {

    return (
        <div>
        <div>
           <SubmitReview/>
            </div>
            <div>
            <AllReviews/>
        </div>
        </div>
    );
};
 
export default WelcomePage;