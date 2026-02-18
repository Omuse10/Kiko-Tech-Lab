import React from 'react';
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { HomePage } from './pages/home';
import { LabsPage } from './pages/labs';
import { LoginPage } from './pages/login';
import { LabWorkspace } from './pages/lab-workspace';
import { LabSelectPage } from './pages/lab-select';
import { useAuthStore } from './stores/auth';

function App() {
  const { initialize, loading } = useAuthStore();

  React.useEffect(() => {
    initialize();
  }, [initialize]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lab-select/:labType" element={<LabSelectPage />} />
          <Route path="/lab/:labType/:projectId" element={<LabWorkspace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;