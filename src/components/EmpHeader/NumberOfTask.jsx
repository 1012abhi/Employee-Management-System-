import React, { useContext, useEffect, useState } from 'react'
import { AuthContext} from '../../context/AuthContextProvider'
import { ClipboardList, PlayCircle, CheckCircle2, XCircle } from 'lucide-react';

function NumberOfTask() {
  const {loggedInUser} = useContext(AuthContext)
  const [newTask , setNewTask ] = useState(loggedInUser.taskSummary.newTask)
  const [active , setActive ] = useState(loggedInUser.taskSummary.active)
  
  console.log('loggedInUser',loggedInUser);
  
  useEffect(() => {
    setNewTask(loggedInUser.taskSummary.newTask)
    setActive(loggedInUser.taskSummary.active)
    // console.log(loggedInUser.taskSummary.newTask);
  }, [loggedInUser])
  
  console.log('new',newTask);
  console.log('active',active);
  // console.log('number', number)
  const cards = [
    {
      title: 'New Tasks',
      value: loggedInUser.taskSummary.newTask,
      icon: ClipboardList,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Active Tasks',
      value: loggedInUser.taskSummary.active,
      icon: PlayCircle,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      title: 'Completed Tasks',
      value: loggedInUser.taskSummary.completed,
      icon: CheckCircle2,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      title: 'Failed Tasks',
      value: loggedInUser.taskSummary.failed,
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50'
    }
  ];
  return (
  
    <div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
              <div className={`${card.bg} p-3 rounded-full`}>
                <Icon className={`w-6 h-6 ${card.color}`} />
              </div>
            </div>
            <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
          </div>
        );
      })}
    </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">New Task</h2>
                    <p className="text-3xl font-bold">{loggedInUser.taskSummary.newTask}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Active Task</h2>
                    <p className="text-3xl font-bold">{loggedInUser.taskSummary.active}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
                    <p className="text-3xl font-bold">{loggedInUser.taskSummary.completed}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Failed Tasks</h2>
                    <p className="text-3xl font-bold">{loggedInUser.taskSummary.failed}</p>
                </div>
            </div> */}
    </div>
    
  )
}

export default NumberOfTask