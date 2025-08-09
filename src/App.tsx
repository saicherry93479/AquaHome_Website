
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider, useData } from './context/DataContext';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';
import Dashboard from './components/admin/Dashboard';
import EnquiriesManager from './components/admin/EnquiriesManager';
import ProductsManager from './components/admin/ProductsManager';
import ProductForm from './components/admin/ProductForm';

// Main website components
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import How from "./components/How"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import Rent from "./components/Rent"
// import SecondSection from "./components/SecondSection"
import WhySection from "./components/WhySection"
// import FiltersShowcase from "./components/FiltersShowcase"
import LoadingSpinner from "./components/LoadingSpinner"
import PrivacyPolicies from './components/PrivacyPolicies';
import TermsConditions from './components/TermsConditions';
import CancellationRefundPolicy from './components/CancellationRefundPolicy';
import FiltersShowcaseSample from './components/FilterShowcaseSample';
import ContactUs from './components/Contactus.tsx';
import SocialMediaWidget from './components/SocialMediaWidget';

const MainWebsite = () => {
  const { loading } = useData();
  
  // Filter only active products
  // const activeProducts = products.filter(product => product.isActive);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <LoadingSpinner 
          size="lg" 
          text="Please wait while we load our products..." 
        />
      </div>
    );
  }

  return (
    <div className="nth-[2n+4]:bg-[#FAFAFA]">
      <Nav></Nav>
      <Hero></Hero>
      <FiltersShowcaseSample></FiltersShowcaseSample>
      {/* {activeProducts.length > 0 && <FiltersShowcase></FiltersShowcase>} */}
      <Plans></Plans>
      <Rent></Rent>
      {/* <SecondSection></SecondSection> */}
      <WhySection></WhySection>
     
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
          <SocialMediaWidget />
          <Routes>
            <Route path="/" element={<MainWebsite />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/privacypolicy" element={<PrivacyPolicies></PrivacyPolicies>} />
            <Route path="/termsconditions" element={<TermsConditions></TermsConditions>} />
            <Route path="/contactus" element={<ContactUs></ContactUs>} />
            <Route path="/cancellationrefundpoliese" element={<CancellationRefundPolicy></CancellationRefundPolicy>} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPanel>
                    <Dashboard />
                  </AdminPanel>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/enquiries" 
              element={
                <ProtectedRoute>
                  <AdminPanel>
                    <EnquiriesManager />
                  </AdminPanel>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/products" 
              element={
                <ProtectedRoute>
                  <AdminPanel>
                    <ProductsManager />
                  </AdminPanel>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/products/add" 
              element={
                <ProtectedRoute>
                  <AdminPanel>
                    <ProductForm />
                  </AdminPanel>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/products/:id" 
              element={
                <ProtectedRoute>
                  <AdminPanel>
                    <ProductForm />
                  </AdminPanel>
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
