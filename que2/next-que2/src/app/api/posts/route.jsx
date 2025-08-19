import axios from 'axios';
import { NextResponse as nextResponse } from 'next/server';

export async function GET(request,res) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const items = response.data.slice(0,5);
  return nextResponse.json(items);
}