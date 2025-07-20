import { useState } from 'react';
import { useData } from '../context/DataContext';

const FiltersShowcase = () => {
  const { products } = useData();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Filter only active products
  const activeProducts = products.filter(product => product.isActive);

  const openQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <section className="py-[60px] md:py-[100px] px-4 md:px-[100px] bg-white">
        <div className="text-left md:text-center">
          <h2 className="text-2xl md:text-4xl font-semibold capitalize lg:text-[40px] text-black">
            Our Premium Water Filters
          </h2>
          <p className="text-sm text-black/60 mt-3 md:mt-4 md:text-base">
            Discover our range of advanced water purification systems designed for every need
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openQuickView(product)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-black/60 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-xs text-black/70">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 w-full py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QuickView Modal */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isQuickViewOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={closeQuickView}
          />
          
          {/* Modal Content */}
          <div className={`relative bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
            isQuickViewOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            {/* Close Button */}
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedProduct && (
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Images Section */}
                <div className="p-6 bg-gray-50">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={selectedProduct.quickViewImages[0]}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.quickViewImages.slice(1).map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${selectedProduct.name} view ${index + 2}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-black/70 mb-6 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-black mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-black/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                      Enquiry Now
                    </button>
                    <button className="w-full py-4 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersShowcase;