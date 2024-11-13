import React, { useContext, useState } from 'react';
import Header from '../EmpHeader/Header';
import NumberOfTask from '../EmpHeader/NumberOfTask';
import TaskList from '../TaskList/TaskList';


export default function EmployeeDashboard() {
// console.log(data);

return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
    <div className="max-w-7xl mx-auto space-y-6">
      <Header />
      <NumberOfTask />
      <TaskList />
    </div>
  </div>
    );
}