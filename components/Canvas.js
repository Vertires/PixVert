// /components/Canvas.js

import { useEffect, useRef, useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseApp } from '../firebase/firebase'; // Import your firebaseApp initialization

const db = getFirestore(firebaseApp);

const Canvas = () => {
  const canvasRef = useRef(null);
  const [pixels, setPixels] = useState([]);
  const [color, setColor] = useState('#000000'); // Default color is black

  // Fetch pixel data from Firestore when the component mounts
  useEffect(() => {
    const fetchPixels = async () => {
      const snapshot = await db.collection('pixels').get();
      const pixelData = snapshot.docs.map(doc => doc.data());
      setPixels(pixelData);
    };

    fetchPixels();
  }, []);

  // Handle the drawing
  const draw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Draw the pixel
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 10); // Draw 10x10 pixels

    // Save the pixel to Firestore
    addDoc(collection(db, 'pixels'), {
      x,
      y,
      color,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: '1px solid black' }}
        onMouseMove={(e) => e.buttons === 1 && draw(e)} // Draw when mouse is held down
      ></canvas>
      <div>
        <label htmlFor="color">Choose color:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Canvas;
