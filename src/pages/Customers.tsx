
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import CustomerList from '@/components/CustomerList';
import { fetchCustomers } from '@/utils/api';

const Customers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCustomers(searchQuery);
        setCustomers(data);
      } catch (error) {
        console.error('Error loading customers:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [searchQuery]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  return (
    <div className="p-6">
      <DashboardHeader 
        title="Customers" 
        subtitle="Manage your customer relationships"
      />
      
      <div className="mt-6">
        <CustomerList 
          customers={customers} 
          isLoading={isLoading} 
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Customers;
