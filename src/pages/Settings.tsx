
import React, { useState } from "react";
import { Settings as SettingsIcon, User, Bell, Shield, Database, HelpCircle, DownloadCloud, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "security":
        return <SecuritySettings />;
      case "data":
        return <DataSettings />;
      case "help":
        return <HelpSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <DashboardLayout 
      title="Settings" 
      subtitle="Configure your system preferences"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="md:col-span-1 overflow-hidden">
          <div className="p-1">
            <nav className="space-y-1">
              {[
                { id: "account", label: "Account", icon: <User size={18} /> },
                { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
                { id: "security", label: "Security", icon: <Shield size={18} /> },
                { id: "data", label: "Data Management", icon: <Database size={18} /> },
                { id: "help", label: "Help & Support", icon: <HelpCircle size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                    activeTab === tab.id
                      ? "bg-[#1e1e20] text-white"
                      : "text-gray-400 hover:bg-[#1e1e20]/50 hover:text-gray-300"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
            
            <div className="mt-6 px-3 pt-4 border-t border-[#222224]">
              <Button variant="outline" className="w-full justify-start" leftIcon={<DownloadCloud size={18} />}>
                <span className="text-sm">Export Data</span>
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Settings Content */}
        <div className="md:col-span-3">
          <Card glassmorphism glowColor="blue" className="h-full">
            <div className="p-6">
              {renderTabContent()}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Account Settings Tab
const AccountSettings = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <SettingsIcon className="h-5 w-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Account Settings</h2>
      </div>
      
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile Information</h3>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
              <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#1e1e20] border border-[#333336] flex items-center justify-center">
                <span className="text-xs">+</span>
              </button>
            </div>
            <div>
              <h4 className="font-medium">Admin User</h4>
              <p className="text-sm text-gray-400">Pro Account</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue="Admin User" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="admin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="admin@winmix.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Administrator" disabled />
            </div>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        {/* Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select id="language" className="w-full py-2 px-3 bg-[#1e1e20] border border-[#333336] rounded-md text-white">
                <option value="en">English</option>
                <option value="hu">Magyar</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select id="timezone" className="w-full py-2 px-3 bg-[#1e1e20] border border-[#333336] rounded-md text-white">
                <option value="utc">UTC (GMT+0)</option>
                <option value="cet">CET (GMT+1)</option>
                <option value="cest">CEST (GMT+2)</option>
                <option value="est">EST (GMT-5)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <div className="flex gap-2">
              <button className="flex-1 py-2 border border-blue-500 rounded-lg bg-[#1e1e20] text-sm font-medium">Dark (Default)</button>
              <button className="flex-1 py-2 border border-[#333336] rounded-lg bg-transparent text-sm font-medium text-gray-400 hover:text-white hover:border-white/20 transition-colors">System</button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="glass" className="px-6">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

// Notification Settings Tab
const NotificationSettings = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Bell className="h-5 w-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Notification Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          
          <div className="space-y-3">
            {[
              { id: "matchReminders", label: "Match Reminders", description: "Get notified before matches start" },
              { id: "resultsUpdates", label: "Results Updates", description: "Receive updates when match results are posted" },
              { id: "systemUpdates", label: "System Updates", description: "Important system updates and maintenance notices" },
              { id: "newFeatures", label: "New Features", description: "Be the first to know about new features" }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2">
                <div>
                  <h4 className="text-sm font-medium">{item.label}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={item.id !== "newFeatures"} />
                  <div className="w-11 h-6 bg-[#222224] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          
          <div className="space-y-3">
            {[
              { id: "liveScores", label: "Live Scores", description: "Real-time updates for ongoing matches" },
              { id: "predictionResults", label: "Prediction Results", description: "Find out how your predictions performed" },
              { id: "mentions", label: "Mentions", description: "When someone mentions you in comments" }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2">
                <div>
                  <h4 className="text-sm font-medium">{item.label}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#222224] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="glass" className="px-6">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

// Security Settings Tab
const SecuritySettings = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Shield className="h-5 w-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Security Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Password</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="outline">Change Password</Button>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          
          <div className="p-4 border border-[#222224] rounded-lg bg-[#1e1e20]/50">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                <p className="text-xs text-gray-400 mt-1">Add an extra layer of security to your account</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#222224] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Management</h3>
          
          <div className="space-y-3">
            <div className="p-3 border border-[#222224] rounded-lg flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-medium">Current Session</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Chrome on Windows • IP: 192.168.1.1</p>
              </div>
              <Button variant="outline" size="sm" disabled>Active</Button>
            </div>
            
            <div className="p-3 border border-[#222224] rounded-lg flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  <span className="text-sm font-medium">Mobile App</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">iOS • Last active: 2 hours ago</p>
              </div>
              <Button variant="outline" size="sm">Revoke</Button>
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="destructive">Logout of All Sessions</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data Management Tab
const DataSettings = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Database className="h-5 w-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Data Management</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Import & Export</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-[#222224] rounded-lg">
              <h4 className="text-sm font-medium mb-2">Export Data</h4>
              <p className="text-xs text-gray-400 mb-4">Download your league data in various formats</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" leftIcon={<DownloadCloud size={14} />}>
                  Export as CSV
                </Button>
                <Button variant="outline" size="sm" className="w-full" leftIcon={<DownloadCloud size={14} />}>
                  Export as JSON
                </Button>
                <Button variant="outline" size="sm" className="w-full" leftIcon={<DownloadCloud size={14} />}>
                  Export as XLSX
                </Button>
              </div>
            </div>
            
            <div className="p-4 border border-[#222224] rounded-lg">
              <h4 className="text-sm font-medium mb-2">Import Data</h4>
              <p className="text-xs text-gray-400 mb-4">Upload data from external sources</p>
              <div className="border-2 border-dashed border-[#333336] rounded-lg p-6 text-center">
                <DownloadCloud className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Drag and drop files here</p>
                <p className="text-xs text-gray-500 mt-1">or</p>
                <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Data Backup</h3>
          
          <div className="p-4 border border-[#222224] rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Automatic Backups</h4>
                <p className="text-xs text-gray-400">Backup your data daily</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-[#222224] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Backup Retention</h4>
                <p className="text-xs text-gray-400">How long to keep backups</p>
              </div>
              <select className="bg-[#1e1e20] border border-[#333336] rounded-md text-sm p-1">
                <option value="7">7 days</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
              </select>
            </div>
            
            <Button variant="glass" size="sm" className="w-full" leftIcon={<Database size={14} />}>
              Create Manual Backup Now
            </Button>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-red-500">Danger Zone</h3>
          
          <div className="p-4 border border-red-900/30 rounded-lg bg-red-900/10 space-y-4">
            <div>
              <h4 className="text-sm font-medium">Reset System Data</h4>
              <p className="text-xs text-gray-400 mt-1">This will reset all data to default values. This action is irreversible.</p>
              <Button variant="destructive" size="sm" className="mt-2">Reset Data</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Help & Support Tab
const HelpSettings = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Help & Support</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Documentation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Getting Started", description: "Learn the basics of the platform", icon: <ChevronRight size={16} /> },
              { title: "League Management", description: "How to manage leagues and tournaments", icon: <ChevronRight size={16} /> },
              { title: "Teams & Players", description: "Setting up teams and managing players", icon: <ChevronRight size={16} /> },
              { title: "Statistics & Analytics", description: "Understanding data and reports", icon: <ChevronRight size={16} /> }
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="p-4 border border-[#222224] rounded-lg hover:bg-[#1e1e20]/50 hover:border-white/20 transition-colors flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                </div>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Support</h3>
          
          <div className="p-4 border border-[#222224] rounded-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What do you need help with?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full py-2 px-3 bg-[#1e1e20] border border-[#333336] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Describe your issue in detail..."
                ></textarea>
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency</Label>
                <select id="urgency" className="w-full py-2 px-3 bg-[#1e1e20] border border-[#333336] rounded-md text-white">
                  <option value="low">Low - General Inquiry</option>
                  <option value="medium">Medium - Need Assistance</option>
                  <option value="high">High - Technical Issue</option>
                  <option value="urgent">Urgent - System Down</option>
                </select>
              </div>
              <Button variant="glass">Submit Support Request</Button>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-[#222224]"></div>
        
        <div className="p-4 border border-[#222224] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-medium">System Information</h4>
            <p className="text-xs text-gray-400 mt-1">WINMIX Version 2.3.5 • Last Updated: 2025-05-01</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<ChevronRight size={14} />}>
            Check for Updates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
