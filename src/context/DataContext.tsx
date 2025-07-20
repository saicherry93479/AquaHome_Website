import React, { createContext, useContext, useState, useEffect } from 'react';
import { Enquiry, Product } from '../types';

interface DataContextType {
  enquiries: Enquiry[];
  products: Product[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load data from localStorage
    const savedEnquiries = localStorage.getItem('enquiries');
    const savedProducts = localStorage.getItem('products');
    
    if (savedEnquiries) {
      setEnquiries(JSON.parse(savedEnquiries));
    }
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Initialize with default products
      const defaultProducts: Product[] = [
        {
          id: '1',
          name: "DrinkPrime Copper",
          description: "Advanced copper-infused water purification with natural antimicrobial properties",
          image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400",
          features: ["Copper Infusion", "RO + UV Technology", "7-Stage Purification", "Smart Monitoring"],
          quickViewImages: [
            "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600"
          ],
          category: 'copper',
          isActive: true,
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          name: "DrinkPrime RO+",
          description: "Premium reverse osmosis system with advanced filtration technology",
          image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
          features: ["RO Technology", "UV Sterilization", "TDS Control", "Mineral Retention"],
          quickViewImages: [
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600"
          ],
          category: 'ro',
          isActive: true,
          createdAt: new Date().toISOString()
        },
        {
          id: '3',
          name: "DrinkPrime Alkaline",
          description: "Alkaline water purifier for enhanced hydration and health benefits",
          image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
          features: ["Alkaline Enhancement", "pH Balance", "Antioxidant Properties", "Mineral Boost"],
          quickViewImages: [
            "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          ],
          category: 'alkaline',
          isActive: true,
          createdAt: new Date().toISOString()
        },
        {
          id: '4',
          name: "DrinkPrime Smart",
          description: "IoT-enabled smart water purifier with app connectivity and monitoring",
          image: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400",
          features: ["IoT Connectivity", "App Control", "Real-time Monitoring", "Auto Maintenance"],
          quickViewImages: [
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          ],
          category: 'smart',
          isActive: true,
          createdAt: new Date().toISOString()
        }
      ];
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  }, []);

  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    const updatedEnquiries = [newEnquiry, ...enquiries];
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    const updatedEnquiries = enquiries.map(enquiry =>
      enquiry.id === id ? { ...enquiry, status } : enquiry
    );
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
  };

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    const updatedProducts = [newProduct, ...products];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, ...productData } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <DataContext.Provider value={{
      enquiries,
      products,
      addEnquiry,
      updateEnquiryStatus,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </DataContext.Provider>
  );
};