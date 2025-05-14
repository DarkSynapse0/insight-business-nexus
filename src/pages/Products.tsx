
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/utils/api';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts({ 
          search: searchQuery,
          category: category
        });
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [searchQuery, category]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleCategoryFilter = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };
  
  return (
    <div className="p-6">
      <DashboardHeader 
        title="Products" 
        subtitle="Manage your product inventory"
      />
      
      <div className="mt-6">
        <ProductList 
          products={products} 
          isLoading={isLoading} 
          onSearch={handleSearch} 
          onCategoryFilter={handleCategoryFilter}
        />
      </div>
    </div>
  );
};

export default Products;
