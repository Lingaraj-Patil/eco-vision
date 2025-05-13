import React, { useState } from 'react';
import { Trophy, Medal, Filter, ChevronUp, ChevronDown } from 'lucide-react';

const LeaderboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [sortBy, setSortBy] = useState('points');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Mock data for leaderboard
  const leaderboardData = [
    { id: 1, name: 'Aditya Sharma', points: 5820, contributions: 189, plasticKg: 85, paperKg: 45, metalKg: 32, avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Meera Patel', points: 4750, contributions: 142, plasticKg: 62, paperKg: 53, metalKg: 19, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Rohit Agarwal', points: 3890, contributions: 121, plasticKg: 48, paperKg: 38, metalKg: 29, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Nisha Reddy', points: 3600, contributions: 110, plasticKg: 41, paperKg: 32, metalKg: 27, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Karan Singh', points: 3200, contributions: 98, plasticKg: 37, paperKg: 28, metalKg: 24, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Deepika Menon', points: 2950, contributions: 89, plasticKg: 34, paperKg: 26, metalKg: 21, avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 7, name: 'Arjun Kumar', points: 2780, contributions: 84, plasticKg: 32, paperKg: 24, metalKg: 19, avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 8, name: 'Sneha Verma', points: 2500, contributions: 76, plasticKg: 29, paperKg: 22, metalKg: 17, avatar: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 9, name: 'Rahul Joshi', points: 2320, contributions: 71, plasticKg: 27, paperKg: 20, metalKg: 15, avatar: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 10, name: 'Ananya Desai', points: 2100, contributions: 65, plasticKg: 24, paperKg: 18, metalKg: 14, avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];
  
  // Apply filters and sorting
  const filteredData = leaderboardData
    .sort((a, b) => {
      const factor = sortOrder === 'asc' ? 1 : -1;
      if (sortBy === 'points') return factor * (a.points - b.points);
      if (sortBy === 'contributions') return factor * (a.contributions - b.contributions);
      if (sortBy === 'plastic') return factor * (a.plasticKg - b.plasticKg);
      if (sortBy === 'paper') return factor * (a.paperKg - b.paperKg);
      if (sortBy === 'metal') return factor * (a.metalKg - b.metalKg);
      return 0;
    });
  
  const toggleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };
  
  const SortIcon = ({ column }) => {
    if (sortBy !== column) return null;
    return sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Leaderboard</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Check out our top contributors making a positive environmental impact.
          </p>
        </div>
        
        {/* Top 3 Podium */}
        <div className="mt-12 flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="relative">
              <img 
                src={filteredData[1]?.avatar} 
                alt={filteredData[1]?.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-gray-300 rounded-full p-1">
                <Medal className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="h-32 w-20 bg-gray-200 mt-4 rounded-t-lg flex items-center justify-center">
              <span className="font-bold text-xl text-gray-700">2</span>
            </div>
            <p className="mt-2 font-medium text-gray-900">{filteredData[1]?.name}</p>
            <p className="text-sm text-green-600">{filteredData[1]?.points} points</p>
          </div>
          
          {/* 1st Place */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
              <img 
                src={filteredData[0]?.avatar} 
                alt={filteredData[0]?.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400"
              />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                <Medal className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="h-40 w-24 bg-yellow-100 mt-4 rounded-t-lg flex items-center justify-center">
              <span className="font-bold text-2xl text-yellow-700">1</span>
            </div>
            <p className="mt-2 font-medium text-gray-900">{filteredData[0]?.name}</p>
            <p className="text-sm text-green-600">{filteredData[0]?.points} points</p>
          </div>
          
          {/* 3rd Place */}
          <div className="order-3 flex flex-col items-center">
            <div className="relative">
              <img 
                src={filteredData[2]?.avatar} 
                alt={filteredData[2]?.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-amber-700"
              />
              <div className="absolute -bottom-2 -right-2 bg-amber-700 rounded-full p-1">
                <Medal className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="h-24 w-16 bg-amber-100 mt-4 rounded-t-lg flex items-center justify-center">
              <span className="font-bold text-lg text-amber-700">3</span>
            </div>
            <p className="mt-2 font-medium text-gray-900">{filteredData[2]?.name}</p>
            <p className="text-sm text-green-600">{filteredData[2]?.points} points</p>
          </div>
        </div>
        
        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <div>
            <label htmlFor="timeFilter" className="block text-sm font-medium text-gray-700">Time Period</label>
            <select
              id="timeFilter"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="allTime">All Time</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="materialFilter" className="block text-sm font-medium text-gray-700">Material Type</label>
            <select
              id="materialFilter"
              value={materialFilter}
              onChange={(e) => setMaterialFilter(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="all">All Materials</option>
              <option value="plastic">Plastic</option>
              <option value="paper">Paper</option>
              <option value="metal">Metal</option>
            </select>
          </div>
        </div>
        
        {/* Leaderboard Table */}
        <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => toggleSort('points')}
                  >
                    <div className="flex items-center">
                      Points
                      <SortIcon column="points" />
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => toggleSort('contributions')}
                  >
                    <div className="flex items-center">
                      Contributions
                      <SortIcon column="contributions" />
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                    onClick={() => toggleSort('plastic')}
                  >
                    <div className="flex items-center">
                      Plastic (kg)
                      <SortIcon column="plastic" />
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                    onClick={() => toggleSort('paper')}
                  >
                    <div className="flex items-center">
                      Paper (kg)
                      <SortIcon column="paper" />
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden md:table-cell"
                    onClick={() => toggleSort('metal')}
                  >
                    <div className="flex items-center">
                      Metal (kg)
                      <SortIcon column="metal" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((user, index) => (
                  <tr key={user.id} className={index < 3 ? 'bg-green-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img 
                            className="h-10 w-10 rounded-full object-cover" 
                            src={user.avatar} 
                            alt={user.name} 
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.points}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.contributions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                      {user.plasticKg}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                      {user.paperKg}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                      {user.metalKg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;