import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import Feedback from "./components/Feedback";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user ID and recipe ID from the backend
    const fetchInitialData = async () => {
      try {
        const userResponse = await axios.get("/api/profiles/"); // Replace with your actual endpoint
        const recipeResponse = await axios.get("/api/recipes/"); // Replace with your actual endpoint

        setUserId(userResponse.data[0].id); // Assuming the response contains the user ID
        setRecipeId(recipeResponse.data[0].id); // Assuming the first recipe ID

        setLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/profile"
            element={
              <>
                <header className="App-header">
                  <h1>Community Recipe Sharing Platform</h1>
                </header>
                <main>
                  <Profile userId={userId} />
                  <Recipe recipeId={userId} />
                  <Feedback recipeId={recipeId} />
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
