'use client'
import { useState } from 'react';

export default function MyButt(){
	const [num1, setNum1] = useState('');
  	const [num2, setNum2] = useState('');
  	const [result, setResult] = useState(null);
  	const [error, setError] = useState(null);

	const handleAdd = async () => {
	    	const n1 = parseInt(num1, 10);
	    	const n2 = parseInt(num2, 10);

		if (isNaN(n1) || isNaN(n2)) {
		   alert('Please enter valid integers');
		   return;
		}

		try {
		      	const res = await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ x: n1, y: n2 }),
		      	});

		      	const data = await res.json();

		      	if (!res.ok) {
				setError(data.error || 'Something went wrong');
		      	} else {
				setResult(data.result);
		      	}
		} catch (err) {
		      		setError('Backend error');
	    	}
  	};
	   
	
	  
	  return (
	  	<div>
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
 

