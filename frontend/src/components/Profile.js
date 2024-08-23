import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Profile.css";

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/profiles/${userId}/`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the profile:", error);
      });
  }, [userId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  if (profile.profile_picture) {
    profile.profile_picture = profile.profile_picture.replace(
      "http://127.0.0.1:8000/",
      "recipe_share/"
    );
    console.log(profile.profile_picture);
  }

  return (
    <div className="profile-container">
      <h2>{profile.user.username}'s Profile</h2>
      <img
        src={profile.profile_picture}
        alt={`${profile.user.username}'s profile`}
      />
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default Profile;
