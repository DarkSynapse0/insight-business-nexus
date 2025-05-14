
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import OrderList from '@/components/OrderList';
import { fetchOrders } from '@/utils/api';

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('all');
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchOrders({
          search: searchQuery,
          status: status
        });
        setOrders(data);
      } catch (error) {
        console.error('Error loading orders:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [searchQuery, status]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleStatusFilter = (selectedStatus: string) => {
    setStatus(selectedStatus);
  };
  
  return (
    <div className="p-6">
      <DashboardHeader 
        title="Orders" 
        subtitle="Track and manage customer orders"
      />
      
      <div className="mt-6">
        <OrderList 
          orders={orders} 
          isLoading={isLoading} 
          onSearch={handleSearch}
          onStatusFilter={handleStatusFilter}
        />
      </div>
    </div>
  );
};

export default Orders;
