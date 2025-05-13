import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const WasteClassifierHuggingFace = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel(
          'https://huggingface.co/Suparnnayak/waste-sorter-tfjs/resolve/main/model.json'
        );
        setModel(loadedModel);
        console.log('✅ Model loaded from Hugging Face');
      } catch (error) {
        console.error('❌ Failed to load model:', error);
      }
    };

    loadModel();
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) {
      alert('Please drop a valid image file!');
      return;
    }

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);

    const img = new Image();
    img.src = imageURL;
    img.onload = async () => {
      // Make sure model is loaded
      if (!model) return;

      const tensor = tf.browser
        .fromPixels(img)
        .resizeNearestNeighbor([64, 64]) // model expects 64x64
        .toFloat()
        .div(255.0)                      // normalize image
        .expandDims();

      const predictionTensor = model.predict(tensor);
      const result = await predictionTensor.data();
      console.log('Prediction result:', result);

      // Assuming binary classification: [dry, wet]
      const label = result[0] > result[1] ? 'Dry Waste' : 'Wet Waste';
      setPrediction(label);
    };
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>♻ Waste Sorter (Hugging Face Model)</h2>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: '3px dashed #aaa',
          borderRadius: '10px',
          padding: '40px',
          marginBottom: '20px',
          background: '#f9f9f9',
        }}
      >
        <p>👉 Drag and drop an image here</p>
        <p>(Dry or Wet Waste)</p>
      </div>

      {imagePreview && (
        <div>
          <img
            src={imagePreview}
            alt="Dropped"
            style={{ width: '200px', marginBottom: '10px', borderRadius: '8px' }}
          />
          <p><strong>Prediction:</strong> {prediction}</p>
        </div>
      )}
    </div>
  );
};

export default WasteClassifierHuggingFace;