import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { Product } from '../types';
import { products, getBrands, getCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get filter values from URL parameters
  const categoryParam = searchParams.get('category') || '';
  const brandsParam = searchParams.getAll('brand') || [];

  // Get available filter options
  const categories = getCategories();
  const brands = getBrands();

  // Initialize Fuse.js for fuzzy search
  const fuse = new Fuse(products, {
    keys: ['name', 'brand', 'type', 'capacity'],
    threshold: 0.3,
    includeScore: true
  });

  useEffect(() => {
    // Filter products based on URL parameters and search term
    let result = [...products];

    if (searchTerm) {
      const fuseResults = fuse.search(searchTerm);
      result = fuseResults.map(result => result.item);
    }

    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }

    if (brandsParam.length > 0) {
      result = result.filter(p => brandsParam.includes(p.brand));
    }

    setFilteredProducts(result);
  }, [categoryParam, brandsParam, searchTerm]);

  const updateFilter = (key: string, value: string, isMulti = false) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (isMulti) {
      const currentValues = newParams.getAll(key);
      if (currentValues.includes(value)) {
        const newValues = currentValues.filter(v => v !== value);
        newParams.delete(key);
        newValues.forEach(v => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchTerm('');
  };

  const getActiveFiltersCount = () => {
    return (categoryParam ? 1 : 0) + brandsParam.length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-gray-600">
              Find the perfect power solution for your needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm border border-gradient-to-r from-blue-500/20 to-purple-500/20"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Filters
                </h2>
                {getActiveFiltersCount() > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2 flex items-center text-gray-700">
                  <Filter className="h-4 w-4 mr-1" /> Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={categoryParam === category.id}
                        onChange={(e) => updateFilter('category', e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2 flex items-center text-gray-700">
                  <Filter className="h-4 w-4 mr-1" /> Brands
                </h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        value={brand}
                        checked={brandsParam.includes(brand)}
                        onChange={(e) => updateFilter('brand', e.target.value, true)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm 
                    ? 'Try different search terms or adjust your filters'
                    : 'Try changing your filter criteria or browse all products'
                  }
                </p>
                <Button variant="gradient-primary" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                  </p>
                  {getActiveFiltersCount() > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Active filters:</span>
                      <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-blue-500/20">
                        {getActiveFiltersCount()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;