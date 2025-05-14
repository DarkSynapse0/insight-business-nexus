
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart,
  Settings,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/',
    },
    {
      title: 'Products',
      icon: Package,
      path: '/products',
    },
    {
      title: 'Customers',
      icon: Users,
      path: '/customers',
    },
    {
      title: 'Orders',
      icon: ShoppingCart,
      path: '/orders',
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings',
    }
  ];

  return (
    <>
      <div 
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-gray-900 text-white transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64",
          "md:relative",
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && (
            <h1 className="text-xl font-bold">Business Hub</h1>
          )}
          <button 
            onClick={toggleSidebar}
            className={cn(
              "p-2 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white",
              collapsed ? "mx-auto" : ""
            )}
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center p-3 rounded-md transition-colors",
                    location.pathname === item.path 
                      ? "bg-blue-700 text-white" 
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                    collapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <item.icon size={20} />
                  {!collapsed && <span className="ml-3">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "justify-start"
          )}>
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
              A
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="font-medium">Admin User</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden",
          collapsed ? "hidden" : "block"
        )}
        onClick={toggleSidebar}
      />
    </>
  );
};

export default Sidebar;
