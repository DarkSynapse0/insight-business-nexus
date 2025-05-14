
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Edit, Trash2 } from 'lucide-react';
import { Customer } from '@/utils/api';
import SearchInput from './SearchInput';

interface CustomerListProps {
  customers: Customer[];
  isLoading: boolean;
  onSearch: (query: string) => void;
}

const CustomerList = ({ customers, isLoading, onSearch }: CustomerListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <SearchInput 
            value={searchQuery} 
            onChange={handleSearch} 
            placeholder="Search customers..."
            className="w-full md:w-[300px]"
          />
          
          <Button className="w-full md:w-auto">
            Add Customer
          </Button>
        </div>
        
        {isLoading ? (
          <div className="py-10 text-center">
            <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent text-primary rounded-full" aria-hidden="true"></div>
            <p className="mt-2 text-gray-500">Loading customers...</p>
          </div>
        ) : customers.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-500">No customers found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                  <TableHead className="text-right">Orders</TableHead>
                  <TableHead>Last Purchase</TableHead>
                  <TableHead>Customer Since</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center text-sm">
                          <Mail size={14} className="mr-2 text-gray-500" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone size={14} className="mr-2 text-gray-500" />
                          {customer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(customer.totalSpent)}
                    </TableCell>
                    <TableCell className="text-right">
                      {customer.orderCount}
                    </TableCell>
                    <TableCell>
                      {formatDate(customer.lastPurchase)}
                    </TableCell>
                    <TableCell>
                      {formatDate(customer.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit size={16} />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomerList;
