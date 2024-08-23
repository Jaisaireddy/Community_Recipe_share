import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Feedback.css";

const Feedback = ({ recipeId }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/ratings/?recipe=${recipeId}`)
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the feedback:", error);
      });
  }, [recipeId]);

  if (!feedbacks.length) {
    return <div>No feedback yet.</div>;
  }

  return (
    <div className="feedback-container">
      <h3>Feedback</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <p>
              <strong>{feedback.user.username}: </strong>Rating:{" "}
              {feedback.rating}
              /5
            </p>
            <p>{feedback.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
