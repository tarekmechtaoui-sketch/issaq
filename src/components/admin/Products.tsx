import React from 'react';
import { products } from '../data/staticData';
import { Product } from '../types';
import '../styles/Table.css';

const Products: React.FC = () => {
  const getStockClass = (status: Product['status']): string => {
    switch (status.toLowerCase()) {
      case 'in stock': return 'status-in-stock';
      case 'low stock': return 'status-low-stock';
      case 'out of stock': return 'status-out-of-stock';
      default: return 'status-default';
    }
  };

  const handleEdit = (productId: number): void => {
    console.log('Edit product:', productId);
    // Will be implemented when dynamic
  };

  const handleDelete = (productId: number): void => {
    console.log('Delete product:', productId);
    // Will be implemented when dynamic
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Products Management</h1>
        <button className="btn-primary">Add New Product</button>
      </div>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product.id}>
              <td>#{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <span className={`status-badge ${getStockClass(product.status)}`}>
                  {product.status}
                </span>
              </td>
              <td>
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;