import { useState } from 'react';
import { firestore } from "./firebase";
import Review from './Review';
import { addDoc, collection } from "@firebase/firestore";
import Button from 'react-bootstrap/Button';


function SubmitReview() {
    //state variable to hold the review entered into the textarea
    //needs to be state variable because it updates every time the user enters a keyboard stroke
    const [review, setReview] = useState("");
    const [code, setCode] = useState("");
    const myCollection = collection(firestore, 'Collection');
  
    
    /* Save the review to Firestore */
    function handleSubmit(e) {
      //this function prevents any default behavior the browser may have to a particular event.
      const data = {
          code: code,
          review: review
      };
      addDoc(myCollection, data);
     e.preventDefault();
      
    }
  
    return (
      <div>  
        {/* This is a form.
            Forms handle events like when the user enters data into a text field or when
            the user clicks a button to submit the form among other events.
            When an event happens an event handler function handles the event.
            Here we have two event handler functions - handleSubmit that takes the event
            object as a parameter and saves the data entered into the text area field to firestore.
            The second is the arrow function that is called when a user enters text into the
            textarea field. The value property is what to display in the textarea. */}
        <form onSubmit={handleSubmit}>
          <textarea name="Course Code" rows="4" cols="50"
             value={code} onChange={(event)=>setCode(event.target.value)}></textarea>
         <br></br>
         <textarea name="Review" rows="4" cols="50"
             value={review} onChange={(event)=>setReview(event.target.value)}></textarea>
          <Button>Submit Review</Button>
        </form>
        {/* The Reviews component is called with an id. 
            The Reviews component displays all of the reviews for a property with the given id. */}
        <Review code={code} />
      </div>    
    );
  }
  
  export default SubmitReview;
  