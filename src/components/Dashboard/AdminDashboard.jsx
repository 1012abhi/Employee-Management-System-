import React, { useState } from 'react';
import Header from '../EmpHeader/Header';
import CreateTask from '../EmpHeader/CreateTask';
import AllTask from '../EmpHeader/AllTask';

export default function AdminDashboard() {
  
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className=' max-w-7xl mx-auto'>
        <Header />      
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
}