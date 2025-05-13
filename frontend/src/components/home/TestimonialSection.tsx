import React from 'react';

const testimonials = [
  {
    content: "Recyclopia has completely changed how I think about recycling. The rewards are great, but knowing I'm making a positive impact is even better!",
    author: "Aarav Sharma",
    role: "Environmental Activist",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content: "The app makes it so easy to find recycling points and track my contributions. I've redeemed points for several eco-friendly products already!",
    author: "Priya Patel",
    role: "College Student",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content: "As a business owner, partnering with Recyclopia has helped us achieve our sustainability goals while engaging with environmentally conscious customers.",
    author: "Rajesh Kumar",
    role: "Local Business Owner",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Join thousands of satisfied users making a difference with Recyclopia.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-gray-800">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;