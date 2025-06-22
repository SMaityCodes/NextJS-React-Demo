'use client'
import { useState } from 'react';

export default function AddTwoNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const int1 = parseInt(num1, 10);
    const int2 = parseInt(num2, 10);

    if (isNaN(int1) || isNaN(int2)) {
      alert('Please enter valid integers');
      return;
    }

    setResult(int1 + int2);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Client Side Adder</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="border rounded px-3 py-2 w-full mb-2"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="border rounded px-3 py-2 w-full mb-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      >
        Add
      </button>

      {result !== null && (
        <p className="mt-4 text-lg font-medium text-green-700">Result: {result}</p>
      )}
    </div>
  );
}
