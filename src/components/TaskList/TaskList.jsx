import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

function TaskList() {
  const { loggedInUser, updateNewTask } = useContext(AuthContext);
  // const [tasks, setTasks] = useState(loggedInUser.taskSummary.newTask);
  const [tasks, setTasks] = useState(loggedInUser.tasks);
  const [isClicked, setIsClicked] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // const acceptTask = (taskId) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === taskId
  //         ? { ...task, active: true, newTask: false }
  //         : task
  //     )
  //   );

  //   // Update task counts in context if needed
  //   loggedInUser.taskSummary.newTask -= 1;
  //   loggedInUser.taskSummary.active += 1;
  // };
  // updateNewTask(acceptTask)
  const acceptTask = (taskId) => {
  
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, active: true, newTask: false } : task
    );

    // setTasks(updatedTasks);
    loggedInUser.taskSummary.newTask -= 1;
    loggedInUser.taskSummary.active += 1;

    // Call updateNewTask to sync with context
    updateNewTask(updatedTasks);
  };

  const CompletedTask = (taskId) => {
    console.log(taskId)
    const updatedTask = tasks.map((task) => 
      task.id === taskId ? { ...task, completed: true } : task 
  )
  
  loggedInUser.taskSummary.completed += 1;
  updateNewTask(updatedTask)
  }

  const FailedTask = (taskId) => {
    
    const updatedTask = tasks.map((task) => 
      task.id === taskId ? { ...task, failed: true } : task 
      )
      loggedInUser.taskSummary.failed += 1;
      updateNewTask(updatedTask)
  }

  const getStatusIcon = (task) => {
    if (task.completed)
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    if (task.failed) return <XCircle className="h-6 w-6 text-red-500" />;
    if (task.active) return <Clock className="h-6 w-6 text-blue-500" />;
    if (task.newTask)
      return <AlertCircle className="h-6 w-6 text-yellow-500" />;
    return null;
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
        <h2 className="text-xl font-semibold text-white">Task List</h2>
      </div>
      <div className="divide-y divide-gray-200 max-h-[600px] overflow-auto">
        {loggedInUser.tasks.map((task, index) => (
          <div
            key={index}
            className="p-6 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 truncate">
                  {task.taskTitle}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {task.taskDescription}
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                      task.active
                        ? "bg-blue-100 text-blue-800"
                        : task.completed
                        ? "bg-green-100 text-green-800"
                        : task.newTask
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {task.active
                      ? "Active"
                      : task.completed
                      ? "Completed"
                      : task.newTask
                      ? "New"
                      : "Failed"}
                  </span>
                </div>
              </div>
              <div className="ml-4 flex items-center space-x-4">
                {task.newTask &&
                  (!isClicked ? (
                    <button
                      onClick={() => {
                        acceptTask(index, "active");
                        setIsClicked(true);
                      }}
                      className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Accept
                    </button>
                  ) : (<>
                    <button
                      onClick={() => CompletedTask(index)}
                      className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => FailedTask(index, 'failed')}
                      className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Mark Failed
                    </button>
                  </>))
                  
                }

                {task.active && (
                  <>
                    <button
                      onClick={() => CompletedTask(index)}
                      className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => FailedTask(index, 'failed')}
                      className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Mark Failed
                    </button>
                  </>
                )}
                {getStatusIcon(task)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
