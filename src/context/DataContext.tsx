
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db,  storage } from '../lib/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  onSnapshot 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import type { Product, Enquiry } from '../types';

interface DataContextType {
  enquiries: Enquiry[];
  products: Product[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => Promise<void>;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => Promise<void>;
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  uploadImage: (file: File, path: string) => Promise<string>;
  deleteImage: (url: string) => Promise<void>;
  loading: boolean;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up real-time listeners for enquiries
    const enquiriesQuery = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
    const unsubscribeEnquiries = onSnapshot(enquiriesQuery, (snapshot) => {
      const enquiriesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Enquiry[];
      setEnquiries(enquiriesData);
    });

    // Set up real-time listeners for products
    const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribeProducts = onSnapshot(productsQuery, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productsData);
      setLoading(false);
    });

    return () => {
      unsubscribeEnquiries();
      unsubscribeProducts();
    };
  }, []);

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  const deleteImage = async (url: string): Promise<void> => {
    try {
      const imageRef = ref(storage, url);
      await deleteObject(imageRef);
    } catch (error) {
      console.warn('Failed to delete image:', error);
    }
  };

  const addEnquiry = async (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    try {
      await addDoc(collection(db, 'enquiries'), {
        ...enquiryData,
        status: 'new',
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding enquiry:', error);
      throw error;
    }
  };

  const updateEnquiryStatus = async (id: string, status: Enquiry['status']) => {
    try {
      const enquiryRef = doc(db, 'enquiries', id);
      await updateDoc(enquiryRef, { status });
    } catch (error) {
      console.error('Error updating enquiry status:', error);
      throw error;
    }
  };

  const addProduct = async (productData: Omit<Product, 'id' | 'createdAt'>) => {
    try {
      await addDoc(collection(db, 'products'), {
        ...productData,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    try {
      const productRef = doc(db, 'products', id);
      await updateDoc(productRef, productData);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      // Find the product to get image URLs
      const product = products.find(p => p.id === id);
      if (product) {
        // Delete main image
        if (product.image) {
          await deleteImage(product.image);
        }
        
        // Delete quick view images
        if (product.quickViewImages && product.quickViewImages.length > 0) {
          await Promise.all(
            product.quickViewImages.map(imageUrl => deleteImage(imageUrl))
          );
        }
      }

      // Delete the product document
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  return (
    <DataContext.Provider value={{
      enquiries,
      products,
      addEnquiry,
      updateEnquiryStatus,
      addProduct,
      updateProduct,
      deleteProduct,
      uploadImage,
      deleteImage,
      loading
    }}>
      {children}
    </DataContext.Provider>
  );
};
