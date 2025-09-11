import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import UserProfile from "./components/UserProfile.jsx";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext.js";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
