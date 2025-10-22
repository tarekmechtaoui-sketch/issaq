import React from 'react';
import { orders } from '../data/staticdata';
import { Order } from '../types';
import '../styles/Table.css';

const Orders: React.FC = () => {
  const getStatusClass = (status: Order['status']): string => {
    switch (status.toLowerCase()) {
      case 'completed': return 'status-completed';
      case 'pending': return 'status-pending';
      case 'shipped': return 'status-shipped';
      case 'processing': return 'status-processing';
      default: return 'status-default';
    }
  };

  const handleEdit = (orderId: number): void => {
    console.log('Edit order:', orderId);
    // Will be implemented when dynamic
  };

  const handleDelete = (orderId: number): void => {
    console.log('Delete order:', orderId);
    // Will be implemented when dynamic
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Orders Management</h1>
        <button className="btn-primary">Add New Order</button>
      </div>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.email}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.price}</td>
              <td>
                <span className={`status-badge ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
              <td>
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(order.id)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(order.id)}
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

export default Orders;