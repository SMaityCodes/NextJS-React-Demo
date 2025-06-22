// app/api/compute/route.js

export async function POST(request) {
  const body = await request.json();
  const { x, y } = body;

  if (typeof x !== 'number' || typeof y !== 'number') {
    return new Response(JSON.stringify({ error: 'Invalid input' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = x + y; // Or any backend logic you want

  return new Response(JSON.stringify({ result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

