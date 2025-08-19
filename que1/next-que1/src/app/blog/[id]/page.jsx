"use client";
import React from 'react';
import { useParams } from 'next/navigation';
const page = () => {
    const {id} = useParams();
  return (
    <div>
      {id ? `Blog ID: ${101}` : "no id provided"}
    </div>
  );
}

export default page;
