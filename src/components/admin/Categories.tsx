import React from 'react';
import { categories } from '../data/staticData';
import { Category } from '../types';
import '../styles/Table.css';

const Categories: React.FC = () => {
  const getStatusClass = (status: Category['status']): string => {
    return status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  };

  const handleEdit = (categoryId: number): void => {
    console.log('Edit category:', categoryId);
    // Will be implemented when dynamic
  };

  const handleDelete = (categoryId: number): void => {
    console.log('Delete category:', categoryId);
    // Will be implemented when dynamic
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Categories Management</h1>
        <button className="btn-primary">Add New Category</button>
      </div>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Product Count</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: Category) => (
            <tr key={category.id}>
              <td>#{category.id}</td>
              <td>{category.name}</td>
              <td>{category.productCount}</td>
              <td>
                <span className={`status-badge ${getStatusClass(category.status)}`}>
                  {category.status}
                </span>
              </td>
              <td>
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(category.id)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(category.id)}
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

export default Categories;