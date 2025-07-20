import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';

// Main website components
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import How from "./components/How"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import Rent from "./components/Rent"
import SecondSection from "./components/SecondSection"
import WhySection from "./components/WhySection"
import FiltersShowcase from "./components/FiltersShowcase"


const MainWebsite = () => {
  return (
    <div className="nth-[2n+4]:bg-[#FAFAFA]">
      <Nav></Nav>
      <Hero></Hero>
      <FiltersShowcase></FiltersShowcase>
      <SecondSection></SecondSection>
      <WhySection></WhySection>
      <Plans></Plans>
      <Rent></Rent>
      <How></How>
      <Footer></Footer>
    </div>
  )
}

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return user ? <>{children}</> : <Navigate to="/admin/login" />;
};
const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainWebsite />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App