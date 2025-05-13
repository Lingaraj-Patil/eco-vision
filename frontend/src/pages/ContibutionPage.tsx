import React, { useState } from 'react';
import { BarChart, Calendar, TrendingUp, TrendingDown, FileText, ArrowUp, ArrowDown, RefreshCw } from 'lucide-react';

// Mock contribution data
const mockContributions = {
  totalPoints: 1450,
  totalRecycled: 87,
  recentActivity: [
    { id: 1, date: '2023-06-10', location: 'Koramangala Center', type: 'Plastic', amount: 2.3, points: 46 },
    { id: 2, date: '2023-06-08', location: 'HSR Layout Center', type: 'Paper', amount: 3.1, points: 31 },
    { id: 3, date: '2023-06-05', location: 'Indiranagar Hub', type: 'Metal', amount: 1.2, points: 60 },
    { id: 4, date: '2023-06-01', location: 'Koramangala Center', type: 'Plastic', amount: 1.8, points: 36 },
    { id: 5, date: '2023-05-28', location: 'Whitefield Station', type: 'E-waste', amount: 0.5, points: 75 }
  ],
  monthlyStats: [
    { month: 'Jan', plastic: 5, paper: 3, metal: 2, eWaste: 0 },
    { month: 'Feb', plastic: 6, paper: 4, metal: 1, eWaste: 0 },
    { month: 'Mar', plastic: 8, paper: 5, metal: 3, eWaste: 1 },
    { month: 'Apr', plastic: 10, paper: 7, metal: 4, eWaste: 0 },
    { month: 'May', plastic: 12, paper: 8, metal: 3, eWaste: 1 },
    { month: 'Jun', plastic: 15, paper: 9, metal: 5, eWaste: 2 }
  ],
  impactStats: {
    treesSaved: 12,
    waterSaved: 3600, // liters
    co2Reduced: 120, // kg
    energySaved: 480 // kWh
  }
};

const ContributionPage = () => {
  const [viewMode, setViewMode] = useState('overview');

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Summary Cards */}
      <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Points</p>
              <p className="text-2xl font-bold text-gray-900">{mockContributions.totalPoints}</p>
            </div>
            <div className="p-2 bg-green-100 rounded-md">
              <BarChart className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <ArrowUp className="h-3 w-3 mr-1" />
            <span>12% increase from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">Items Recycled</p>
              <p className="text-2xl font-bold text-gray-900">{mockContributions.totalRecycled}</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-md">
              <RefreshCw className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-blue-600">
            <ArrowUp className="h-3 w-3 mr-1" />
            <span>8% increase from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">CO2 Reduced</p>
              <p className="text-2xl font-bold text-gray-900">{mockContributions.impactStats.co2Reduced} kg</p>
            </div>
            <div className="p-2 bg-teal-100 rounded-md">
              <TrendingDown className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-teal-600">
            <span>Equivalent to planting 6 trees</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">Water Saved</p>
              <p className="text-2xl font-bold text-gray-900">{mockContributions.impactStats.waterSaved} L</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-md">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-purple-600">
            <span>Equivalent to 24 showers</span>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-green-600 hover:text-green-800">View All</button>
        </div>
        <div className="space-y-4">
          {mockContributions.recentActivity.map(activity => (
            <div key={activity.id} className="flex items-start p-2 hover:bg-gray-50 rounded-md transition-colors">
              <div className={`p-2 rounded-md ${
                activity.type === 'Plastic' ? 'bg-blue-100' : 
                activity.type === 'Paper' ? 'bg-yellow-100' : 
                activity.type === 'Metal' ? 'bg-gray-100' : 'bg-purple-100'
              }`}>
                <FileText className={`h-5 w-5 ${
                  activity.type === 'Plastic' ? 'text-blue-600' : 
                  activity.type === 'Paper' ? 'text-yellow-600' : 
                  activity.type === 'Metal' ? 'text-gray-600' : 'text-purple-600'
                }`} />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.amount} kg of {activity.type}
                  </p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.location}</p>
              </div>
              <div className="ml-2 text-sm font-medium text-green-600">
                +{activity.points} pts
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Monthly Progress</h3>
          <select className="text-sm border-gray-300 rounded-md">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-64 bg-gray-50 rounded-md relative">
          {/* Placeholder for chart - would be replaced with Chart.js or similar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-center px-4">
              Monthly recycling progress chart would be displayed here.<br/>
              <span className="text-sm">(Bar chart showing different material types per month)</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Environmental Impact */}
      <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-sm p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">Your Environmental Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-75">Trees Saved</p>
            <p className="text-2xl font-bold">{mockContributions.impactStats.treesSaved}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-75">Water Saved</p>
            <p className="text-2xl font-bold">{mockContributions.impactStats.waterSaved} L</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-75">CO2 Reduced</p>
            <p className="text-2xl font-bold">{mockContributions.impactStats.co2Reduced} kg</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm opacity-75">Energy Saved</p>
            <p className="text-2xl font-bold">{mockContributions.impactStats.energySaved} kWh</p>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-80">
          Your recycling efforts have made a significant positive impact on the environment. 
          Keep going to achieve even more!
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Contribution</h1>
            <p className="mt-1 text-gray-500">
              Track your recycling activity and environmental impact.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button 
              className={`px-4 py-2 text-sm rounded-md ${
                viewMode === 'overview' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md ${
                viewMode === 'history' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('history')}
            >
              History
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md ${
                viewMode === 'impact' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('impact')}
            >
              Impact
            </button>
          </div>
        </div>
        
        {renderOverview()}
      </div>
    </div>
  );
};

export default ContributionPage;