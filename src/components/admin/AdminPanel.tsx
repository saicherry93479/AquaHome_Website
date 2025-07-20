import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import EnquiriesManager from './EnquiriesManager';
import ProductsManager from './ProductsManager';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'enquiries' | 'products'>('dashboard');

  if (!user) {
    return null;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'enquiries':
        return <EnquiriesManager />;
      case 'products':
        return <ProductsManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </AdminLayout>
  );
};

export default AdminPanel;