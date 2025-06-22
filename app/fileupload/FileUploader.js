'use client'


import { useRef, useState } from 'react';

export default function FileUpload() {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState(null);

  const handleButtonClick = () => {
    inputRef.current.click(); // Open file picker
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };

    reader.readAsText(file); // Or readAsArrayBuffer, etc.
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-300 space-y-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-center">Upload a File</h2>

        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Choose File
        </button>
      </div>

   
    
      {fileName && (
        <div className="text-sm text-gray-700">
          <strong>Selected File:</strong> {fileName}
        </div>
      )}  
      
      

      {fileContent && (
        <div className="mt-2">
          <strong className="block mb-1">File Preview:</strong>
          <pre className="p-2 bg-gray-100 rounded max-h-64 overflow-auto whitespace-pre-wrap text-sm">
            {fileContent.slice(0, 100)}
          </pre>
        </div>
      )}
      
      
      
    </div>
  );
}

