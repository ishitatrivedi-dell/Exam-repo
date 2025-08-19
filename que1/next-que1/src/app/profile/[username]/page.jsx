"use client";
import React from 'react';
import { useParams } from 'next/navigation';
const page = () => {

    const {username} = useParams();
  return (
    <div>
    {username}  
    </div>
  );
}

export default page;
