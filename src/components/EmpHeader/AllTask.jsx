import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, AuthProvider } from '../../context/AuthContextProvider'

function AllTask() {
  // const [taskData , setTaskData] = useState({})
  const {authData} = useContext(AuthContext)
  // console.log(authData.employees);
  const [employees, setEmployees] = useState(authData.employees);

  // Trigger component rerender when authData changes
  useEffect(() => {
    setEmployees(authData.employees);
  }, [authData]);
  
  return (
    <div className='text-lg font-medium bg-zinc-200 mt-5 p-5 w-full mb-10 '>
        <div className='bg-red-400 mb-2 px-4 py-4 flex justify-between rounded-md'>
          <h2 className='w-1/5'>Employee Name</h2>
          <h3 className='w-1/5'>New Task</h3>
          <h5 className='w-1/5'>Active Task</h5>
          <h5 className='w-1/5'>Completed</h5>
          <h5 className='w-1/5'>Failed</h5>
        </div>

      <div className=''>
        {employees.map((ele, id) => (
          <div key={id} className='border-2 border-red-400 mb-2 px-4 py-4 flex justify-between rounded-md'>
            <h2 className='w-1/5'>{ele.firstName}</h2>
            <h3 className='w-1/5'>{ele.taskSummary.newTask}</h3>
            <h5 className='w-1/5'>{ele.taskSummary.active}</h5>
            <h5 className='w-1/5'>{ele.taskSummary.completed}</h5>
            <h5 className='w-1/5'>{ele.taskSummary.failed}</h5>
          </div>
        ))}
      </div>


    </div>
  )
}

export default AllTask