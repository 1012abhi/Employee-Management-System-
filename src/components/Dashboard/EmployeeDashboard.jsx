import React, { useContext, useState } from 'react';
import Header from '../EmpHeader/Header';
import NumberOfTask from '../EmpHeader/NumberOfTask';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthContextProvider';


export default function EmployeeDashboard() {
// console.log(data);

return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                
                <Header />
                <NumberOfTask />
                <TaskList />

            </div>
        </div>
    );
}