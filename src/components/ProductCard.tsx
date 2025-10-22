import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types/database';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const imageUrl = product.images[0] || 'https://via.placeholder.com/400x400?text=No+Image';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-[#0ea5a4] transition-colors line-clamp-2 mb-2">
          {product.title}
        </h3>

        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.stock_quantity > 0 ? (
              <p className="text-xs text-green-600 mt-1">In Stock</p>
            ) : (
              <p className="text-xs text-red-600 mt-1">Out of Stock</p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock_quantity === 0}
            className="p-3 bg-[#0ea5a4] text-white rounded-lg hover:bg-[#0d9492] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
