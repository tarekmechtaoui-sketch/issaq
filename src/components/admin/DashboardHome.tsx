import React from 'react';
import { orders, products, categories } from '../data/staticData';
import { Order, StatCard } from '../types';
import '../styles/DashboardHome.css';

const DashboardHome: React.FC = () => {
  const totalOrders: number = orders.length;
  const totalProducts: number = products.length;
  const totalCategories: number = categories.length;
  const totalRevenue: number = orders.reduce((sum: number, order: Order) => sum + order.price, 0);

  const stats: StatCard[] = [
    { label: 'Total Orders', value: totalOrders, icon: '📦' },
    { label: 'Total Products', value: totalProducts, icon: '🛍️' },
    { label: 'Total Categories', value: totalCategories, icon: '📑' },
    { label: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, icon: '💰' }
  ];

  const getStatusClass = (status: string): string => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>
      
      <div className="stats-grid">
        {stats.map((stat: StatCard, index: number) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-activity">
        <h2>Recent Orders</h2>
        <div className="activity-list">
          {orders.slice(0, 3).map((order: Order) => (
            <div key={order.id} className="activity-item">
              <div className="activity-info">
                <strong>{order.customerName}</strong>
                <span>ordered {order.product}</span>
              </div>
              <div className="activity-status">
                <span className={getStatusClass(order.status)}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;