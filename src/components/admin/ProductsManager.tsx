import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Edit, Trash2, Eye, EyeOff, Upload, Package } from 'lucide-react';
import type { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

const ProductsManager: React.FC = () => {
  const { products, deleteProduct, loading } = useData();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    features: [''],
    quickViewImages: [''],
    category: 'copper' as Product['category'],
    isActive: true
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image: '',
      features: [''],
      quickViewImages: [''],
      category: 'copper',
      isActive: true
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      features: product.features,
      quickViewImages: product.quickViewImages,
      category: product.category,
      isActive: product.isActive
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleImageUpload = async (file: File, isMainImage: boolean = true, index?: number) => {
    setUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'products');

      if (isMainImage) {
        setFormData({ ...formData, image: imageUrl });
      } else if (index !== undefined) {
        const newImages = [...formData.quickViewImages];
        newImages[index] = imageUrl;
        setFormData({ ...formData, quickViewImages: newImages });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      quickViewImages: formData.quickViewImages.filter(img => img.trim() !== '')
    };

    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
      } else {
        await addProduct(productData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product. Please try again.');
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.quickViewImages];
    newImages[index] = value;
    setFormData({ ...formData, quickViewImages: newImages });
  };

  const addImage = () => {
    setFormData({ ...formData, quickViewImages: [...formData.quickViewImages, ''] });
  };

  const removeImage = (index: number) => {
    const newImages = formData.quickViewImages.filter((_, i) => i !== index);
    setFormData({ ...formData, quickViewImages: newImages });
  };

  const handleDeleteProduct = async (productId: string) => {
    if (confirm('Are you sure you want to delete this product? This will also delete all associated images.')) {
      try {
        await deleteProduct(productId);
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage your water purifier products
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={resetForm} />

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {editingProduct ? 'Edit Product' : 'Add New Product'}
                    </h3>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Main Image
                      </label>
                      <div className="space-y-2">
                        <input
                          type="url"
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter image URL or upload below"
                        />
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageUpload(file, true);
                            }}
                            className="hidden"
                            id="main-image-upload"
                          />
                          <label
                            htmlFor="main-image-upload"
                            className="cursor-pointer flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Image
                          </label>
                          {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
                        </div>
                        {formData.image && (
                          <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded" />
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as Product['category'] })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="copper">Copper</option>
                        <option value="ro">RO+</option>
                        <option value="alkaline">Alkaline</option>
                        <option value="smart">Smart</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Features
                      </label>
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter feature"
                          />
                          {formData.features.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeFeature(index)}
                              className="px-3 py-2 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addFeature}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        + Add Feature
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quick View Images
                      </label>
                      {formData.quickViewImages.map((image, index) => (
                        <div key={index} className="space-y-2 mb-4 p-3 border border-gray-200 rounded">
                          <div className="flex gap-2">
                            <input
                              type="url"
                              value={image}
                              onChange={(e) => handleImageChange(index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter image URL"
                            />
                            {formData.quickViewImages.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="px-3 py-2 text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleImageUpload(file, false, index);
                              }}
                              className="hidden"
                              id={`quick-image-upload-${index}`}
                            />
                            <label
                              htmlFor={`quick-image-upload-${index}`}
                              className="cursor-pointer flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload
                            </label>
                          </div>
                          {image && (
                            <img src={image} alt="Preview" className="w-16 h-16 object-cover rounded" />
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addImage}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        + Add Image
                      </button>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isActive"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                        Active Product
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                  >
                    {editingProduct ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {product.isActive ? (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    Inactive
                  </span>
                )}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

              <div className="mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => updateProduct(product.id, { isActive: !product.isActive })}
                    className="p-2 text-gray-600 hover:text-gray-800"
                    title={product.isActive ? 'Deactivate' : 'Activate'}
                  >
                    {product.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-2 text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new product.</p>
          <div className="mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsManager;