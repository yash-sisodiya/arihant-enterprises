import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ChevronLeft, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { getCartProducts, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const cartProducts = getCartProducts();

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    const phoneNumber = '917728962090';
    
    let message = `New Order:\n\n`;
    
    // Add products
    cartProducts.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - ₹${product.price} x ${product.quantity} = ₹${product.price * product.quantity}\n`;
    });
    
    message += `\nTotal: ₹${getTotalPrice().toLocaleString()}`;
    
    // Add customer info if provided
    if (customerInfo.name || customerInfo.phone || customerInfo.address) {
      message += `\n\nCustomer Details:`;
      if (customerInfo.name) message += `\nName: ${customerInfo.name}`;
      if (customerInfo.phone) message += `\nPhone: ${customerInfo.phone}`;
      if (customerInfo.address) message += `\nAddress: ${customerInfo.address}`;
    }
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="flex items-center text-gray-600 hover:text-blue-600 mb-6">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-2" />
                  Your Cart
                </h1>
              </div>

              {cartProducts.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link to="/products">
                    <Button variant="primary">Browse Products</Button>
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="divide-y">
                    {cartProducts.map(product => (
                      <li key={product.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow sm:mr-4">
                          <Link to={`/products/${product.id}`} className="font-medium hover:text-blue-600">
                            {product.name}
                          </Link>
                          <div className="text-sm text-gray-600 mt-1">
                            {product.capacity && `${product.capacity} • `}
                            {product.type && `${product.type}`}
                          </div>
                          <div className="text-blue-600 font-bold mt-1">
                            ₹{product.price.toLocaleString()}
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border rounded-md mr-4">
                            <button
                              onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                              className="p-1.5 text-gray-600 hover:text-blue-600"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3">{product.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                              className="p-1.5 text-gray-600 hover:text-blue-600"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="p-6 border-t">
                    <button
                      onClick={() => clearCart()}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Order Summary */}
          {cartProducts.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between font-medium">
                      <span>Subtotal ({cartProducts.length} items)</span>
                      <span>₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Your Information (Optional)</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<MessageCircle className="h-5 w-5" />}
                    onClick={handleCheckout}
                  >
                    Place Order via WhatsApp
                  </Button>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    By placing your order, you agree to be contacted by our team via WhatsApp to confirm your order details.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;