'use client';
import { useEffect, useRef, useState } from 'react';

export default function WasmAddPage() {
  const wasmInstanceRef = useRef(null);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        const AddModuleFactory = (await import('@/public/add.js')).default;
        const instance = await AddModuleFactory({
          locateFile: (path) => (path.endsWith('.wasm') ? '/add.wasm' : path),
        });
        wasmInstanceRef.current = instance;
      } catch (err) {
        console.error('❌ Failed to load WASM module:', err);
      }
    };

    loadWasm();
  }, []);

  const handleAddClick = () => {
    const instance = wasmInstanceRef.current;
    if (instance) {
      const x = parseInt(a, 10);
      const y = parseInt(b, 10);
      if (isNaN(x) || isNaN(y)) {
        alert('Please enter valid numbers');
        return;
      }
      const sum = instance._add(x, y);
      setResult(sum);
    } else {
      console.error('WASM module not loaded yet');
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Add Two Numbers (WASM)</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 rounded ml-2"
      />
      <button
        onClick={handleAddClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
      {result !== null && <p className="mt-4">Result: {result}</p>}
    </div>
  );
}

