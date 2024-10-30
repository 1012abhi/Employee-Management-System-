// localStorage.clear()
// setLocalStorage()
const employees = [
    {
        "id": 1,
        "firstName": "Rajesh",
        "email": "employee@exm.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare report",
                "taskDescription": "Prepare the quarterly sales report.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-15",
                "category": "Reporting",
                "priority": "High"
            },
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Attend the meeting with the client for project feedback.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-16",
                "category": "Meeting",
                "priority": "Medium"
            },
            {
                "taskTitle": "Code review",
                "taskDescription": "Review the new code changes and provide feedback.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-17",
                "category": "Development",
                "priority": "Low"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Anjali",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write documentation",
                "taskDescription": "Write project documentation for new release.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-13",
                "category": "Documentation",
                "priority": "High"
            },
            {
                "taskTitle": "Testing",
                "taskDescription": "Perform tests on the newly developed module.",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskDate": "2024-10-12",
                "category": "QA",
                "priority": "Medium"
            },
            {
                "taskTitle": "Code deployment",
                "taskDescription": "Deploy the code to the production environment.",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-18",
                "category": "Deployment",
                "priority": "High"
            },
            {
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in the bug tracking system.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskDate": "2024-10-14",
                "category": "Development",
                "priority": "Low"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Marketing campaign",
                "taskDescription": "Prepare the marketing campaign for the new product.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-11",
                "category": "Marketing",
                "priority": "High"
            },
            {
                "taskTitle": "Data analysis",
                "taskDescription": "Analyze customer data from the last quarter.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-16",
                "category": "Data Analysis",
                "priority": "Medium"
            },
            {
                "taskTitle": "Team meeting",
                "taskDescription": "Schedule a meeting with the team to discuss project updates.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskDate": "2024-10-17",
                "category": "Meeting",
                "priority": "Low"
            }
        ],
        "taskSummary": {
            "active": 1,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Pooja",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Research new tools",
                "taskDescription": "Investigate new project management tools.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-18",
                "category": "Research",
                "priority": "Medium"
            },
            {
                "taskTitle": "System upgrade",
                "taskDescription": "Upgrade the internal systems to the latest version.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-19",
                "category": "Development",
                "priority": "High"
            },
            {
                "taskTitle": "Client follow-up",
                "taskDescription": "Follow up with the client regarding the latest deliverables.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskDate": "2024-10-16",
                "category": "Client Relations",
                "priority": "Low"
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Suresh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Website redesign",
                "taskDescription": "Work on redesigning the company website.",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-12",
                "category": "Development",
                "priority": "Medium"
            },
            {
                "taskTitle": "Performance review",
                "taskDescription": "Conduct performance reviews for the team.",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskDate": "2024-10-15",
                "category": "HR",
                "priority": "High"
            },
            {
                "taskTitle": "New project proposal",
                "taskDescription": "Submit a proposal for the new project to the management.",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false,
                "taskDate": "2024-10-14",
                "category": "Business Development",
                "priority": "Low"
            }
        ],
        "taskSummary": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = {
    "id": 1,
    "firstName": "Manager",
    "email": "admin1@aa.com",
    "password": "123",
    "tasks": [
    {
        "taskTitle": "Manage users",
        "taskDescription": "Oversee and manage all users on the system.",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
    },
    {
        "taskTitle": "System maintenance",
        "taskDescription": "Schedule regular system maintenance and backups.",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
    },
    {
        "taskTitle": "Security audit",
        "taskDescription": "Conduct a security audit on all system processes.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
    }
    ]
}

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    
    // console.log("Admin set:", JSON.stringify(admin));
    // console.log("Employees set:", JSON.stringify(employees));
    
} 

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log('employees',employees);
    // console.log('admin',admin);

    return {employees,admin}
    
} 


