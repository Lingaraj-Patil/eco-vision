import React, { useState } from 'react';
import { Gift, Search, Filter, Tag, ShoppingBag, Clock, CheckCircle } from 'lucide-react';

// Define types for rewards
interface Reward {
  id: number;
  name: string;
  description: string;
  image: string;
  points: number;
  category: string;
  available: boolean;
  featured?: boolean;
}

const RewardsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  // Mock data for rewards
  const rewards: Reward[] = [
    {
      id: 1, 
      name: 'Eco-Friendly Water Bottle',
      description: 'Reusable 750ml stainless steel water bottle, keeping drinks cold for 24 hours or hot for 12 hours.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 450, 
      category: 'household', 
      available: true, 
      featured: true
    },
    {
      id: 2, 
      name: 'Bamboo Cutlery Set',
      description: 'Portable bamboo utensil set including fork, knife, spoon, and chopsticks in a canvas pouch.',
      image: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      points: 350, 
      category: 'household', 
      available: true
    },
    {
      id: 3, 
      name: 'Organic Cotton Tote Bag',
      description: 'Eco-friendly tote bag made from 100% organic cotton. Perfect for shopping and everyday use.',
      image: 'https://images.pexels.com/photos/5324818/pexels-photo-5324818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 200, 
      category: 'fashion', 
      available: true, 
      featured: true
    },
    {
      id: 4, 
      name: 'Solar Power Bank',
      description: '10000mAh solar power bank with dual USB ports, perfect for charging on the go without electricity.',
      image: 'https://images.pexels.com/photos/6794106/pexels-photo-6794106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 700, 
      category: 'electronics', 
      available: true
    },
    {
      id: 5, 
      name: 'Cash Redemption ₹100',
      description: 'Convert your points to cash deposited directly to your bank account.',
      image: 'https://images.pexels.com/photos/164474/pexels-photo-164474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 500, 
      category: 'cash', 
      available: true
    },
    {
      id: 6, 
      name: 'Recyclable Notebook',
      description: 'A5 notebook made from recycled paper with seed-infused cover that can be planted.',
      image: 'https://images.pexels.com/photos/6431292/pexels-photo-6431292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      points: 150, 
      category: 'stationery', 
      available: true
    },
    {
      id: 7, 
      name: 'Eco Yoga Mat',
      description: 'Yoga mat made from natural rubber and recycled materials. Non-slip and biodegradable.',
      image: 'https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 600, 
      category: 'fitness', 
      available: true, 
      featured: true
    },
    {
      id: 8, 
      name: 'LED Desk Lamp',
      description: 'Energy-efficient LED desk lamp with adjustable brightness and temperature settings.',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      points: 550, 
      category: 'electronics', 
      available: false
    }
  ];
  
  // Filter and sort rewards
  const filteredRewards = rewards
    .filter(reward => 
      (categoryFilter === 'all' || reward.category === categoryFilter) &&
      (reward.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       reward.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      } else if (sortBy === 'points-low') {
        return a.points - b.points;
      } else if (sortBy === 'points-high') {
        return b.points - a.points;
      }
      return 0;
    });
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'household', name: 'Household' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'stationery', name: 'Stationery' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'cash', name: 'Cash Rewards' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Rewards</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Redeem your points for eco-friendly products and cash rewards.
          </p>
        </div>
        
        {/* User Points Summary */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-sm p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm opacity-80">Available Points</p>
                <p className="text-3xl font-bold">1,450</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-3 text-center">
                <p className="text-sm opacity-80">Redeemed</p>
                <p className="text-xl font-semibold">4 Items</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-3 text-center">
                <p className="text-sm opacity-80">Total Saved</p>
                <p className="text-xl font-semibold">₹650</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="w-full md:w-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search rewards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative inline-block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-9 pr-10 py-2 text-sm border-gray-300 rounded-md"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div className="relative inline-block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-9 pr-10 py-2 text-sm border-gray-300 rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Rewards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRewards.map(reward => (
            <div 
              key={reward.id} 
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md ${
                !reward.available ? 'opacity-60' : ''
              }`}
            >
              <div className="relative h-48">
                <img 
                  src={reward.image} 
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
                {reward.featured && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-green-800 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {reward.points} points
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{reward.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{reward.description}</p>
                <div className="mt-3 flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    {reward.category === 'household' && <ShoppingBag className="h-4 w-4 mr-1" />}
                    {reward.category === 'electronics' && <div className="i-lucide-cpu h-4 w-4 mr-1"></div>}
                    {reward.category === 'fashion' && <div className="i-lucide-shirt h-4 w-4 mr-1"></div>}
                    {reward.category === 'cash' && <div className="i-lucide-banknote h-4 w-4 mr-1"></div>}
                    {reward.category === 'stationery' && <div className="i-lucide-pencil h-4 w-4 mr-1"></div>}
                    {reward.category === 'fitness' && <div className="i-lucide-dumbbell h-4 w-4 mr-1"></div>}
                    <span className="capitalize">{reward.category}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    {reward.available ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-green-600">In Stock</span>
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span>Coming Soon</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <button 
                    className={`w-full py-2 rounded-md transition-colors ${
                      reward.available 
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!reward.available}
                  >
                    {reward.available ? 'Redeem' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredRewards.length === 0 && (
          <div className="mt-8 text-center p-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">No rewards found matching your criteria.</p>
          </div>
        )}
        
        {/* How It Works Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">How to Redeem Rewards</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-800 text-xl font-bold mb-4">1</div>
              <h3 className="font-medium text-gray-900 mb-2">Browse & Select</h3>
              <p className="text-gray-600 text-sm">Browse through our catalog of eco-friendly products and select the ones you want.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-800 text-xl font-bold mb-4">2</div>
              <h3 className="font-medium text-gray-900 mb-2">Redeem Points</h3>
              <p className="text-gray-600 text-sm">Use your accumulated points to redeem the selected products or cash rewards.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-800 text-xl font-bold mb-4">3</div>
              <h3 className="font-medium text-gray-900 mb-2">Collect Rewards</h3>
              <p className="text-gray-600 text-sm">Collect your rewards from the nearest Recyclopia center or have them delivered to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;