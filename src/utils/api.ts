
// Mock data for dashboard
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  category: string;
  image: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  orderCount: number;
  lastPurchase: string;
  createdAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerId: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
}

// Mock products data
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    description: 'Noise cancelling over-ear headphones with premium sound quality',
    price: 249.99,
    inventory: 58,
    category: 'Electronics',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Headphones',
    createdAt: '2023-04-12T14:48:00.000Z'
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support',
    price: 199.95,
    inventory: 25,
    category: 'Furniture',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Chair',
    createdAt: '2023-05-20T09:32:00.000Z'
  },
  {
    id: '3',
    name: 'Ultra HD Monitor',
    description: '32-inch 4K monitor with HDR support',
    price: 399.99,
    inventory: 15,
    category: 'Electronics',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Monitor',
    createdAt: '2023-06-05T16:21:00.000Z'
  },
  {
    id: '4',
    name: 'Wireless Keyboard',
    description: 'Slim wireless keyboard with backlit keys',
    price: 79.99,
    inventory: 42,
    category: 'Electronics',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Keyboard',
    createdAt: '2023-07-15T11:19:00.000Z'
  },
  {
    id: '5',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness',
    price: 49.95,
    inventory: 67,
    category: 'Home',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Lamp',
    createdAt: '2023-08-02T14:53:00.000Z'
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker',
    price: 89.99,
    inventory: 31,
    category: 'Electronics',
    image: 'https://placehold.co/200x200/e2e8f0/64748b?text=Speaker',
    createdAt: '2023-09-11T10:08:00.000Z'
  },
];

// Mock customers data
const customers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    totalSpent: 749.97,
    orderCount: 3,
    lastPurchase: '2023-09-25T13:45:00.000Z',
    createdAt: '2022-11-05T09:23:00.000Z'
  },
  {
    id: '2',
    name: 'Emma Johnson',
    email: 'emma.j@example.com',
    phone: '(555) 234-5678',
    totalSpent: 1249.95,
    orderCount: 5,
    lastPurchase: '2023-10-10T15:30:00.000Z',
    createdAt: '2022-08-17T14:51:00.000Z'
  },
  {
    id: '3',
    name: 'Michael Williams',
    email: 'mwilliams@example.com',
    phone: '(555) 345-6789',
    totalSpent: 399.99,
    orderCount: 1,
    lastPurchase: '2023-09-05T10:15:00.000Z',
    createdAt: '2023-01-22T11:09:00.000Z'
  },
  {
    id: '4',
    name: 'Olivia Brown',
    email: 'oliviab@example.com',
    phone: '(555) 456-7890',
    totalSpent: 959.93,
    orderCount: 4,
    lastPurchase: '2023-10-15T09:20:00.000Z',
    createdAt: '2022-12-03T16:47:00.000Z'
  },
  {
    id: '5',
    name: 'James Davis',
    email: 'james.davis@example.com',
    phone: '(555) 567-8901',
    totalSpent: 849.98,
    orderCount: 2,
    lastPurchase: '2023-10-02T14:35:00.000Z',
    createdAt: '2023-02-14T10:23:00.000Z'
  },
];

// Mock orders data
const orders: Order[] = [
  {
    id: '1',
    customerName: 'John Smith',
    customerId: '1',
    date: '2023-09-25T13:45:00.000Z',
    status: 'delivered',
    total: 329.98,
    paymentStatus: 'paid',
    items: [
      {
        productId: '1',
        productName: 'Premium Headphones',
        quantity: 1,
        price: 249.99
      },
      {
        productId: '5',
        productName: 'Desk Lamp',
        quantity: 1,
        price: 49.95
      }
    ]
  },
  {
    id: '2',
    customerName: 'Emma Johnson',
    customerId: '2',
    date: '2023-10-10T15:30:00.000Z',
    status: 'shipped',
    total: 399.99,
    paymentStatus: 'paid',
    items: [
      {
        productId: '3',
        productName: 'Ultra HD Monitor',
        quantity: 1,
        price: 399.99
      }
    ]
  },
  {
    id: '3',
    customerName: 'Michael Williams',
    customerId: '3',
    date: '2023-09-05T10:15:00.000Z',
    status: 'delivered',
    total: 399.99,
    paymentStatus: 'paid',
    items: [
      {
        productId: '3',
        productName: 'Ultra HD Monitor',
        quantity: 1,
        price: 399.99
      }
    ]
  },
  {
    id: '4',
    customerName: 'Olivia Brown',
    customerId: '4',
    date: '2023-10-15T09:20:00.000Z',
    status: 'processing',
    total: 279.94,
    paymentStatus: 'paid',
    items: [
      {
        productId: '4',
        productName: 'Wireless Keyboard',
        quantity: 2,
        price: 79.99
      },
      {
        productId: '5',
        productName: 'Desk Lamp',
        quantity: 1,
        price: 49.95
      }
    ]
  },
  {
    id: '5',
    customerName: 'James Davis',
    customerId: '5',
    date: '2023-10-02T14:35:00.000Z',
    status: 'delivered',
    total: 339.98,
    paymentStatus: 'paid',
    items: [
      {
        productId: '6',
        productName: 'Bluetooth Speaker',
        quantity: 1,
        price: 89.99
      },
      {
        productId: '4',
        productName: 'Wireless Keyboard',
        quantity: 1,
        price: 79.99
      },
      {
        productId: '5',
        productName: 'Desk Lamp',
        quantity: 1,
        price: 49.95
      }
    ]
  },
  {
    id: '6',
    customerName: 'Emma Johnson',
    customerId: '2',
    date: '2023-10-18T11:42:00.000Z',
    status: 'pending',
    total: 249.99,
    paymentStatus: 'unpaid',
    items: [
      {
        productId: '1',
        productName: 'Premium Headphones',
        quantity: 1,
        price: 249.99
      }
    ]
  },
];

// API mock functions
export const fetchProducts = async (filters?: {
  search?: string;
  category?: string;
}): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  let filteredProducts = [...products];
  
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters?.category && filters.category !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.category === filters.category
    );
  }
  
  return filteredProducts;
};

export const fetchCustomers = async (search?: string): Promise<Customer[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (search) {
    const searchLower = search.toLowerCase();
    return customers.filter(
      customer => 
        customer.name.toLowerCase().includes(searchLower) || 
        customer.email.toLowerCase().includes(searchLower)
    );
  }
  
  return customers;
};

export const fetchOrders = async (filters?: {
  search?: string;
  status?: string;
}): Promise<Order[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  let filteredOrders = [...orders];
  
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filteredOrders = filteredOrders.filter(
      order => 
        order.customerName.toLowerCase().includes(searchLower) || 
        order.id.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters?.status && filters.status !== 'all') {
    filteredOrders = filteredOrders.filter(
      order => order.status === filters.status
    );
  }
  
  return filteredOrders;
};

export const fetchDashboardStats = async (): Promise<{
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  recentOrders: Order[];
  salesByCategory: {category: string; sales: number}[];
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalCustomers = customers.length;
  const totalProducts = products.length;
  
  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
    
  const salesByCategory: {category: string; sales: number}[] = [];
  const categoryMap = new Map<string, number>();
  
  orders.forEach(order => {
    order.items.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (product) {
        const category = product.category;
        const currentTotal = categoryMap.get(category) || 0;
        categoryMap.set(category, currentTotal + (item.price * item.quantity));
      }
    });
  });
  
  categoryMap.forEach((sales, category) => {
    salesByCategory.push({category, sales});
  });
  
  return {
    totalSales,
    totalOrders,
    totalCustomers,
    totalProducts,
    recentOrders,
    salesByCategory
  };
};
