import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-green-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Our Impact</h2>
          <p className="mt-3 text-lg text-green-100">
            Together, we're making a difference one recyclable at a time.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">10K+</p>
            <p className="mt-2 text-green-100">Users</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
            <p className="mt-2 text-green-100">Locations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">5M+</p>
            <p className="mt-2 text-green-100">Recyclables</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">₹2M+</p>
            <p className="mt-2 text-green-100">Rewards Earned</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;