
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from './AdminLayout';

interface AdminPanelProps {
  children: React.ReactNode;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return null;
  }

  const getCurrentPage = (): 'dashboard' | 'enquiries' | 'products' => {
    const path = location.pathname;
    if (path.includes('/enquiries')) return 'enquiries';
    if (path.includes('/products')) return 'products';
    return 'dashboard';
  };

  return (
    <AdminLayout currentPage={getCurrentPage()}>
      {children}
    </AdminLayout>
  );
};

export default AdminPanel;
