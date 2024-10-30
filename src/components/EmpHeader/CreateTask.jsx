import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../context/AuthContextProvider';

function CreateTask() {
    // const [taskData, setTaskData] = useState({
    //     title: '',
    //     description: '',
    //     assignedTo: '',
    //     dueDate: '',
    //     category: ''
    // })
    const [taskTitle, setTitle] = useState('')
    const [taskDescription, setDescription] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    
    const [newTask, setNewTask] = useState({})
    const {authData} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Task Data:', taskData);
        
        setNewTask({taskTitle,taskDescription,dueDate,category,active:false,completed:false,failed:false,newTask:true})
        console.log('task:',newTask);
        
        authData.employees.forEach(function (element) {
            
            if (element.firstName === assignedTo){
                element.tasks.push(newTask)
            }
            // console.log('tasks', element.tasks);
            localStorage.setItem('employees', JSON.stringify(authData.employees));
            element.taskSummary.newTask = element.taskSummary.newTask+1
        })
        // console.log('ele', authData.);
        
        
        // console.log('employees name:', employees.tasks);
    };
    
return (
    <div className=" mx-auto mt-10">
        <form onSubmit={handleSubmit} className="bg-zinc-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="text-2xl font-bold mb-6 text-center col-span-full">Assign Task to Employee</h2>
            
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Task Title
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter task title"
                name="title"
                value={taskTitle}
                onChange={(e)=> (setTitle(e.target.value))}
                required
            />
            </div>
            
            <div className="col-span-full">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Task Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Enter task description"
                        name="description"
                        value={taskDescription}
                        onChange={(e)=> (setDescription(e.target.value))}
                        required
                    />
                </div>
            </div>
            
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignedTo">
                    Assigned To
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="assignedTo"
                    type="text"
                    placeholder="Enter employee name"
                    name="assignedTo"
                    value={assignedTo}
                    onChange={(e)=> (setAssignedTo(e.target.value))}
                    required
                />
            </div>
            
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
                    Due Date
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="dueDate"
                    type="date"
                    name="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>
            
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    Task Category
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Customer Support">Customer Support</option>
                </select>
            </div>
            
            <div className="flex items-center justify-center col-span-full">
                <button
                    className=" bg-zinc-800 hover:bg-zinc-600 text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Assign Task
                </button>
            </div>
        </form>
    </div>  
    )
}

export default CreateTask