import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { Camera, RefreshCw, Info } from 'lucide-react';

const RecycleClassifierPage = () => {
  const webcamRef = useRef<Webcam>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [prediction, setPrediction] = useState<string>('');
  const [isCapturing, setIsCapturing] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = ['Plastic', 'Glass', 'Paper', 'Metal', 'Organic', 'Non-recyclable'];

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      // In a real application, you would load your trained model here
      // const loadedModel = await tf.loadLayersModel('path/to/your/model.json');
      // setModel(loadedModel);
      setLoading(false);
    } catch (error) {
      console.error('Error loading model:', error);
      setLoading(false);
    }
  };

  const captureImage = async () => {
    if (!webcamRef.current) return;

    setIsCapturing(true);
    const imageSrc = webcamRef.current.getScreenshot();
    
    if (imageSrc) {
      // In a real application, you would process the image and make predictions here
      // For demo purposes, we'll just simulate a random prediction
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      setPrediction(randomCategory);
    }
    
    setIsCapturing(false);
  };

  const resetPrediction = () => {
    setPrediction('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recycling Item Classifier
          </h1>
          <p className="text-gray-600">
            Point your camera at an item to identify if and how it can be recycled
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-video">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
              </div>
            ) : (
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="p-6">
            {prediction ? (
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-medium bg-green-100 text-green-800">
                    {prediction}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  This item appears to be {prediction.toLowerCase()}. Here's how to recycle it properly.
                </p>
                <button
                  onClick={resetPrediction}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Scan Another Item
                </button>
              </div>
            ) : (
              <div className="text-center">
                <button
                  onClick={captureImage}
                  disabled={isCapturing || loading}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Camera className="h-6 w-6 mr-2" />
                  {isCapturing ? 'Analyzing...' : 'Scan Item'}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-500 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-blue-900">Tips for Better Results</h3>
              <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
                <li>Ensure good lighting conditions</li>
                <li>Center the item in the frame</li>
                <li>Hold the camera steady</li>
                <li>Remove any background clutter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleClassifierPage;