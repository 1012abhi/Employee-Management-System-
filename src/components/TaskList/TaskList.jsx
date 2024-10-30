import React, {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContextProvider';
import { CheckCircle, Clock } from 'lucide-react';

function TaskList() {
  // const [tasks, setTasks] = useState([]);
  const {loggedInUser} = useContext(AuthContext)

  // console.log(loggedInUser);
  
    // const totalTasks = tasks.length;
    // const completedTasks = tasks.filter(task => task.completed).length;
    // const pendingTasks = totalTasks - completedTasks;

    const getPriorityColor = (priority) => {
      switch (priority) {
          case 'high':
              return 'bg-red-100 text-red-800';
          case 'medium':
              return 'bg-yellow-100 text-yellow-800';
          case 'low':
              return 'bg-green-100 text-green-800';
          default:
          return 'bg-gray-100 text-gray-800';
    }

  };


  return (
    <div className="p-4 bg-gradient-to-br from-purple-50 min-h-screen">
    <div id='tasklist' className="bg-white shadow-lg rounded-xl mt-14 h-96 overflow-auto border border-indigo-200">
      <div className="flex justify-center px-6 py-4 border-b border-indigo-200 bg-gradient-to-r from-indigo-500 to-purple-600">
        <h2 className="text-lg font-semibold text-white">Task List</h2>
      </div>
      <ul className="divide-y divide-indigo-100 overflow-auto">
        {loggedInUser.tasks.map((task, id) => (
          <li key={id} className="px-6 py-4 hover:bg-indigo-50 transition duration-150 ease-in-out">
            <div className="flex items-center justify-start">
              <div className="flex-1">
                {/* <h1 className="font-semibold text-xs inline-flex bg-red-400 text-red-900 rounded px-2 py-1">{task.category}</h1> */}
                <h3 className="text-lg font-medium text-indigo-700">{task.taskTitle}</h3>
                <p className="mt-1 text-sm text-gray-600">{task.taskDescription}</p>
              </div>
              <div className="flex items-center space-x-4">
                
                <div className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  task.active
                    ? "bg-green-100 text-green-800"
                    : task.completed
                    ? "bg-blue-100 text-blue-800"
                    : task.newTask
                    ? "bg-yellow-100 text-yellow-800"
                    : task.failed
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {task.active ? ("Active"): (task.completed) ? ('Completed') : (task.newTask) ? ('NewTask') : (task.failed) ? ('Failed') : ('')}
                  
                </div>
                
                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                {task.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Clock className="h-6 w-6 text-indigo-400" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default TaskList