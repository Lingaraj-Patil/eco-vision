import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, BarChart2, Recycle, Camera } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import StatsSection from '../components/home/StatsSection';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: 'Find Recycling Locations',
      description: 'Locate nearby Recyclopia machines and deposit centers throughout Bangalore.',
      link: '/locations'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Leaderboard',
      description: 'Compete with others and see who is making the biggest environmental impact.',
      link: '/leaderboard'
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
      title: 'Track Contributions',
      description: 'Monitor your recycling activities and environmental impact over time.',
      link: '/contribution'
    },
    {
      icon: <Camera className="h-8 w-8 text-purple-600" />,
      title: 'Waste Detection',
      description: 'Use AI to identify waste materials and learn proper disposal methods.',
      link: '/detection'
    },
    {
      icon: <Recycle className="h-8 w-8 text-teal-600" />,
      title: 'Earn Rewards',
      description: 'Redeem points for cash or eco-friendly products as you recycle.',
      link: '/rewards'
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Features</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              Discover how EcoVision helps you make a positive environmental impact while earning rewards.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection />
      
      <HowItWorks />
      
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Join the Recyclopia Movement</h2>
          <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
            Start recycling today and make a positive impact on our environment while earning rewards.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/locations" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-green-50 transition">
              Find Locations
            </Link>
            <Link to="/detection" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition">
              Try Waste Detection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;