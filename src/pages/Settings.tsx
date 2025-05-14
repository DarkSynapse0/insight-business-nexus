
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import DashboardHeader from '@/components/DashboardHeader';
import { toast } from 'sonner';

const Settings = () => {
  const [generalForm, setGeneralForm] = useState({
    businessName: 'Business Hub',
    email: 'contact@businesshub.com',
    phone: '(555) 123-4567',
    address: '123 Business St, City, State 12345'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    inventoryAlerts: true,
    marketingEmails: false
  });

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      toast.success('Settings updated successfully');
    }, 500);
  };

  const handleNotificationChange = (key: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key]
    });
    toast.success('Notification preference updated');
  };

  return (
    <div className="p-6">
      <DashboardHeader 
        title="Settings" 
        subtitle="Manage your account and preferences"
      />
      
      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your business information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGeneralSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={generalForm.businessName}
                      onChange={(e) => setGeneralForm({...generalForm, businessName: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={generalForm.email}
                      onChange={(e) => setGeneralForm({...generalForm, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={generalForm.phone}
                      onChange={(e) => setGeneralForm({...generalForm, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input
                      id="address"
                      value={generalForm.address}
                      onChange={(e) => setGeneralForm({...generalForm, address: e.target.value})}
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Control how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive email notifications</p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={() => handleNotificationChange('emailNotifications')}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order Updates</p>
                    <p className="text-sm text-gray-500">Get notified when orders change status</p>
                  </div>
                  <Switch
                    checked={notificationSettings.orderUpdates}
                    onCheckedChange={() => handleNotificationChange('orderUpdates')}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Inventory Alerts</p>
                    <p className="text-sm text-gray-500">Get notified when inventory is low</p>
                  </div>
                  <Switch
                    checked={notificationSettings.inventoryAlerts}
                    onCheckedChange={() => handleNotificationChange('inventoryAlerts')}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                  </div>
                  <Switch
                    checked={notificationSettings.marketingEmails}
                    onCheckedChange={() => handleNotificationChange('marketingEmails')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Manage your API keys for external integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex mt-1.5">
                    <Input
                      id="apiKey"
                      value="sk_test_••••••••••••••••••••••••"
                      readOnly
                      className="flex-1 font-mono text-sm"
                    />
                    <Button variant="outline" className="ml-2">
                      Copy
                    </Button>
                    <Button variant="outline" className="ml-2">
                      Regenerate
                    </Button>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-500">
                    This key gives access to your API endpoints
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <div className="flex mt-1.5">
                    <Input
                      id="webhookUrl"
                      placeholder="https://your-website.com/api/webhook"
                      className="flex-1"
                    />
                    <Button className="ml-2">
                      Save
                    </Button>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-500">
                    Receive real-time updates for orders and inventory changes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
