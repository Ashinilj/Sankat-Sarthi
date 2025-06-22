"use client";
import React from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import {
  Settings,
  Lock,
  Palette,
  Globe,
  Download,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // adjust this path if needed

const SettingsPanel = () => {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-500" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-500">
                  Receive email alerts for new cases
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">SMS Alerts</h4>
                <p className="text-sm text-gray-500">
                  Emergency SMS notifications
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-Approval</h4>
                <p className="text-sm text-gray-500">
                  Automatically approve verified cases
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lock className="w-5 h-5 mr-2 text-red-500" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-500">
                  Add extra security to your account
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Session Timeout</h4>
                <p className="text-sm text-gray-500">
                  Auto logout after inactivity
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* System Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Palette className="w-5 h-5 mr-2 text-purple-500" />
              System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>Auto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>English</option>
                <option>Hindi</option>
                <option>Regional Languages</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>IST (UTC+5:30)</option>
                <option>UTC</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-500" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export All Data
            </Button>
            <Button variant="outline" className="w-full">
              Backup Settings
            </Button>
            <Button variant="outline" className="w-full">
              Clear Cache
            </Button>
            <Separator />
            <Button variant="destructive" className="w-full">
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-red-500">
              Logout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Click below to securely log out of your account.
            </p>
            <Button
              variant="destructive"
              className="w-full"
              onClick={async () => {
                await auth.signOut();
                router.push("/login");
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default SettingsPanel;