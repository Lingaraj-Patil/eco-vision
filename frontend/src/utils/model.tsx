import React, { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const Model = () => {
  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel(
          'https://huggingface.co/Suparnnayak/waste-sorter-tfjs/resolve/main/model.json'
        );
        console.log('✅ Model loaded:', model);
      } catch (error) {
        console.error('❌ Failed to load model:', error);
      }
    };

    loadModel();
  }, []);

  return (
    <div>
      <h1>TensorFlow.js Model in React</h1>
    </div>
  );
};

export default Model;