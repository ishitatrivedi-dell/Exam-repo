import axios from 'axios';
export async function GET(request, { params }) {
const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  const id = parseInt(params.id);
    const item = response.data; 
  const items = item.find((s) => s.id === id);

  if (!items) {
    return new Response(JSON.stringify({ error: "items not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(items), {
    status: 200,
  }); 
}