import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Upload, Camera, Trash2, Image, AlertTriangle, MapPin, ChevronRight } from 'lucide-react';

const DetectionPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  // Load the TensorFlow.js model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel(
          'https://huggingface.co/Suparnnayak/waste-sorter-tfjs/resolve/main/model.json'
        );
        setModel(loadedModel);
        console.log('✅ Model loaded successfully');
      } catch (error) {
        console.error('❌ Failed to load model:', error);
      }
    };
    loadModel();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);

      // Reset result
      setResult(null);
      setConfidence(null);
    }
  };

  const handleDetect = async () => {
    if (!file || !model) return;

    setLoading(true);

    try {
      // Create an image element to preprocess the uploaded image
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = async () => {
        // Preprocess the image to match the model's input shape
        const tensor = tf.browser
          .fromPixels(img)
          .resizeNearestNeighbor([224, 224]) // Resize to 224x224 (model's expected input size)
          .toFloat()
          .div(255.0) // Normalize pixel values to [0, 1]
          .expandDims(); // Add batch dimension

        // Run the model's prediction
        const predictions = model.predict(tensor) as tf.Tensor;
        const predictionArray = predictions.dataSync(); // Get prediction probabilities        
        console.log('array',predictionArray);
        const maxIndex = predictionArray.indexOf(Math.max(...predictionArray)); // Get the index of the highest probability

        // Map the index to class labels (update these labels based on your model's classes)
        const labels = ['Plastic', 'Paper', 'Metal', 'Glass', 'Organic', 'E-Waste', 'Unknown'];
        setResult(labels[maxIndex]);
        console.log(maxIndex);
        console.log(predictionArray);
        setConfidence(predictionArray[maxIndex] * 100);

        // Clean up
        tensor.dispose();
      };
    } catch (error) {
      console.error('❌ Error during detection:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setConfidence(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Waste Material Detection</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Upload a photo of waste material and our AI will identify it and suggest proper disposal methods.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {/* Upload area */}
              {!preview ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-green-500 transition-colors"
                  onClick={triggerFileInput}
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <p className="mt-4 text-lg font-medium text-gray-900">Upload an image</p>
                  <p className="mt-2 text-sm text-gray-500">Click or drag and drop</p>
                  <p className="mt-1 text-xs text-gray-400">PNG, JPG up to 10MB</p>
                </div>
              ) : (
                <div>
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-80 rounded-lg mx-auto"
                    />
                    <button
                      onClick={handleReset}
                      className="absolute top-2 right-2 bg-red-100 p-2 rounded-full text-red-600 hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  {!result && !loading && (
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={handleDetect}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                      >
                        <Camera className="h-5 w-5 mr-2" />
                        Detect Material
                      </button>
                    </div>
                  )}

                  {loading && (
                    <div className="mt-6 text-center">
                      <div className="animate-spin h-8 w-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto"></div>
                      <p className="mt-2 text-gray-600">Analyzing image...</p>
                    </div>
                  )}
                </div>
              )}

              {/* Detection Results */}
              {result && (
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Detection Results</h3>
                  <p className="text-lg text-gray-800">
                    Detected Material: <span className="font-bold">{result}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Confidence: <span className="font-bold">{confidence?.toFixed(2)}%</span>
                  </p>
                  {/* Display 100 points if the result is "Plastic" */}
                  {result === 'Plastic' && (
                    <p className="mt-4 text-lg text-green-600 font-bold">
                      🎉 You earned 10 points! Go to a nearby EcoVision center to claim it.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionPage;