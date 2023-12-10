import React from "react";
 
const SubmitReview = () => {
    return (
        <div id="submitReview">Submit a review for a CSC class</div>
    );
};
 
const AllReviews = () => {
    return <div id="allReviews">All reviews</div>;
};
 
const WelcomePage = () => {
    return (
        <div>
            <SubmitReview />
            <AllReviews />
        </div>
    );
};
 
export default WelcomePage;