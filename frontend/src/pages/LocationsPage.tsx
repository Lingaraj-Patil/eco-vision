import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Search, Phone, Clock, ExternalLink } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  materials: string[];
  coordinates: [number, number];
}

const mockCenters: RecyclingCenter[] = [
  {
    id: '1',
    name: 'Hunsemaranalli Recycling Center',
    address: 'Hunsemaranalli',
    phone: '(555) 123-4567',
    hours: 'Mon-Sat: 8AM-6PM',
    materials: ['Plastic', 'Paper', 'Glass', 'Electronics'],
    coordinates: [12.5818, 77.3537],
  },
  {
    id: '2',
    name: 'Baglur Recycling Hub',
    address: 'Baglur',
    phone: '(555) 987-6543',
    hours: 'Mon-Sun: 7AM-8PM',
    materials: ['Metal', 'Paper', 'Glass', 'Batteries'],
    coordinates: [12.5818, 77.3537],
  },
  {
    id: '2',
    name: 'Yelahanka Recycling Hub',
    address: 'Yelahanka',
    phone: '(555) 957-6543',
    hours: 'Mon-Sun: 7AM-8PM',
    materials: ['Metal', 'Paper', 'Glass', 'Batteries'],
    coordinates: [12.5818, 77.3537],
  },
];

const LocationPage = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [selectedCenter, setSelectedCenter] = useState<RecyclingCenter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([12.5818, 77.3537], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);

      // Add markers for each recycling center
      mockCenters.forEach(center => {
        L.marker(center.coordinates)
          .addTo(mapRef.current!)
          .bindPopup(center.name)
          .on('click', () => setSelectedCenter(center));
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const filteredCenters = mockCenters.filter(center =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Recycling Centers Near You
          </h1>
          <p className="text-gray-600">
            Locate the nearest recycling centers and learn what materials they accept
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-4">
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search recycling centers..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredCenters.map(center => (
                <div
                  key={center.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedCenter?.id === center.id
                      ? 'bg-green-50 border-2 border-green-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setSelectedCenter(center);
                    mapRef.current?.setView(center.coordinates, 14);
                  }}
                >
                  <h3 className="font-medium text-gray-900">{center.name}</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mt-1 mr-2" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{center.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div id="map" className="h-[500px]"></div>
              
              {selectedCenter && (
                <div className="p-4 border-t">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedCenter.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        {selectedCenter.address}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Phone className="h-5 w-5 mr-2" />
                        {selectedCenter.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        {selectedCenter.hours}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Accepted Materials</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCenter.materials.map(material => (
                          <span
                            key={material}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${selectedCenter.coordinates[0]},${selectedCenter.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      Get Directions
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;