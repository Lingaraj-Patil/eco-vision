import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import LocationsPage from './pages/LocationsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ContributionPage from './pages/ContibutionPage';
import DetectionPage from './pages/DetectionPage';
import RecycleClassifierPage from './pages/RecycleClassifierPage';
import WasteClassifierHuggingFace from './pages/WasteClassifierHuggingFace';
import RewardsPage from './pages/RewardsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/detection" element={<DetectionPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contribution" element={<ContributionPage />} />            
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;