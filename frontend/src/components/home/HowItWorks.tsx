import React from 'react';
import { MapPin, Camera, Recycle, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-10 w-10 text-green-600" />,
      title: 'Find a Location',
      description: 'Locate a Recyclopia machine near you using our interactive map.'
    },
    {
      icon: <Camera className="h-10 w-10 text-green-600" />,
      title: 'Scan & Identify',
      description: 'Use our AI detection to identify the type of recyclable material.'
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-600" />,
      title: 'Deposit Recyclables',
      description: 'Place your recyclable items in the appropriate compartment of the machine.'
    },
    {
      icon: <Gift className="h-10 w-10 text-green-600" />,
      title: 'Earn Rewards',
      description: 'Collect points for each deposit and redeem them for rewards or cash.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            A simple 4-step process to recycle and earn rewards with Recyclopia.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="mt-10 lg:mt-0">
                <div className="relative">
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-16 border-t-2 border-dashed border-green-300 -translate-y-1/2" />
                  )}
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mx-auto">
                    {step.icon}
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default HowItWorks;