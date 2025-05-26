import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;
  const { addToCart, isInCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id, quantity);
    }
  };

  const shareToWhatsApp = () => {
    if (!product) return;

    const phoneNumber = '917728962090';
    const message = `I'm interested in ${product.name} priced at ₹${product.price}. Please provide more information.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-4">The product you are looking for does not exist or has been removed.</p>
          <Button variant="primary" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Images */}
            <div className="md:w-1/2 p-4">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                        activeImage === index ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {product.brand}
                </span>
                {product.warranty && (
                  <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-700 rounded">
                    {product.warranty}
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              
              <p className="text-gray-600 mb-4">
                {product.capacity && `${product.capacity} • `}
                {product.type && `${product.type}`}
              </p>
              
              <div className="text-3xl font-bold text-blue-600 mb-6">
                ₹{product.price.toLocaleString()}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 text-gray-600 hover:text-blue-600"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 text-gray-600 hover:text-blue-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={isInCart(product.id) ? 'secondary' : 'primary'}
                  size="lg"
                  icon={isInCart(product.id) ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                  onClick={handleAddToCart}
                >
                  {isInCart(product.id) ? 'Update Cart' : 'Add to Cart'}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={shareToWhatsApp}
                >
                  Inquire on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="p-6 border-t">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b pb-2">
                  <span className="font-medium w-1/3">{key}:</span>
                  <span className="text-gray-700 w-2/3">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;