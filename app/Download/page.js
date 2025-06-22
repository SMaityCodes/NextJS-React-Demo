'use client';

import { useState } from 'react';
import './page.css'; // import CSS styles

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleSum = () => {
    const result = num1 + num2;
    setSum(result);

    const blob = new Blob([`The sum of ${num1} and ${num2} is ${result}`], {
      type: 'text/plain',
    });

    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'sum_result.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className="container">
      <h1 className="heading">Sum Calculator</h1>

      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
          placeholder="First number"
          className="input-box"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
          placeholder="Second number"
          className="input-box"
        />
      </div>

      <button className="button blue" onClick={handleSum}>
        Calculate Sum
      </button>

      {sum !== null && (
        <>
          <div className="result">Sum: <strong>{sum}</strong></div>
          <button className="button green" onClick={handleDownload}>
            Download Result
          </button>
        </>
      )}
    </main>
  );
}

