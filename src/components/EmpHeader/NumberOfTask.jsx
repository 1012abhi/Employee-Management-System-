import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../context/AuthContextProvider'

function NumberOfTask() {
  const {loggedInUser} = useContext(AuthContext)

  return (
  
    <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
            </div>
    </div>
    
  )
}

export default NumberOfTask