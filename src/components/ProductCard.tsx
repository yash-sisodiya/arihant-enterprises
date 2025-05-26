import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../types';
import { Card, CardImage, CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white/80 backdrop-blur-sm border border-transparent hover:border-gradient-to-r from-blue-500/20 to-purple-500/20">
        <CardImage
          src={product.images[0]}
          alt={product.name}
          className="group-hover:scale-105"
        />
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded-full backdrop-blur-sm border border-blue-500/20">
              {product.brand}
            </span>
            {product.warranty && (
              <span className="text-xs font-medium px-2.5 py-1 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700 rounded-full backdrop-blur-sm border border-green-500/20">
                {product.warranty}
              </span>
            )}
          </div>
          <h3 className="font-semibold line-clamp-2 mb-1 group-hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {product.capacity && `${product.capacity} • `}
            {product.type && `${product.type}`}
          </p>
          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ₹{product.price.toLocaleString()}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            variant={isInCart(product.id) ? "gradient-secondary" : "gradient-primary"}
            fullWidth
            icon={isInCart(product.id) ? <ShoppingCart className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            onClick={handleAddToCart}
          >
            {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;