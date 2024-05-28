import React, { useState } from 'react';
import styled from 'styled-components';

const TaskButton = styled.button`
    margin: 8px;
    padding: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width:80px;
    
`;

const TaskInput = styled.input`
    margin: 8px;
    padding: 8px;
    width: 180px;
    border: 1px solid lightgrey;
    border-radius: 16px;
`;

function AddTask(props) {
    const [showNewTaskButton, setShowNewTaskButton] = useState(true);
    const [value, setValue] = useState("");

    function onNewTaskButtonClick() {
        setShowNewTaskButton(false);
    }

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    function onNewTaskInputComplete(event) {
        if (event.key === 'Enter' || event.type === 'blur') {
            setShowNewTaskButton(true);
            addNewTask(props.columnId, value);
            setValue("");
        }
    }

    function addNewTask(columnId, content) {
        const newTaskId = 'task-' + Math.floor(Math.random() * 100000);
    
        const column = props.state.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.push(newTaskId);
    
        const newTask = {
            id: newTaskId,
            content: content,
        }
    
        props.setState({...props.state,
            tasks: {
                ...props.state.tasks,
                [newTaskId]: newTask
            },
            columns: {
                ...props.state.columns,
                [columnId]: {
                    ...props.state.columns[columnId],
                    taskIds: newTaskIds
                }
            }
        });
    }

    return (
        <div>
            {
                showNewTaskButton ?
                <TaskButton onClick={onNewTaskButtonClick}>New</TaskButton>:
                <TaskInput 
                    type="text" 
                    value={value} 
                    onChange={handleInputChange} 
                    onBlur={onNewTaskInputComplete} 
                    onKeyPress={onNewTaskInputComplete} 
                    autoFocus 
                />
            }
        </div>
    )
}

export default AddTask

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const TaskContainer = styled.div`
//     margin: 8px;
//     padding: 16px;
//     background-image: url('/board.jpg'); /* Add background image */
//     background-size: cover; /* Cover the entire container */
//     background-position: center; /* Center the image */
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     height: max-height;
// `;

// const TaskButton = styled.button`
//     margin: 8px;
//     padding: 8px;
//     background-color: #4CAF50;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;

//     &:hover {
//         background-color: #45a049;
//     }
// `;

// const TaskInput = styled.input`
//     margin: 8px;
//     padding: 8px;
//     width: 180px;
//     border: 1px solid lightgrey;
//     border-radius: 4px;
// `;

// function AddTask(props) {
//     const [showNewTaskButton, setShowNewTaskButton] = useState(true);
//     const [value, setValue] = useState("");

//     function onNewTaskButtonClick() {
//         setShowNewTaskButton(false);
//     }

//     function handleInputChange(event) {
//         setValue(event.target.value);
//     }

//     function onNewTaskInputComplete(event) {
//         if (event.key === 'Enter' || event.type === 'blur') {
//             setShowNewTaskButton(true);
//             addNewTask(props.columnId, value);
//             setValue("");
//         }
//     }

//     function addNewTask(columnId, content) {
//         const newTaskId = 'task-' + Math.floor(Math.random() * 100000);
    
//         const column = props.state.columns[columnId];
//         const newTaskIds = Array.from(column.taskIds);
//         newTaskIds.push(newTaskId);
    
//         const newTask = {
//             id: newTaskId,
//             content: content,
//         }
    
//         props.setState({
//             ...props.state,
//             tasks: {
//                 ...props.state.tasks,
//                 [newTaskId]: newTask
//             },
//             columns: {
//                 ...props.state.columns,
//                 [columnId]: {
//                     ...props.state.columns[columnId],
//                     taskIds: newTaskIds
//                 }
//             }
//         });
//     }

//     return (
//         <TaskContainer>
//             {
//                 showNewTaskButton ?
//                 <TaskButton onClick={onNewTaskButtonClick}>New</TaskButton>:
//                 <TaskInput 
//                     type="text" 
//                     value={value} 
//                     onChange={handleInputChange} 
//                     onBlur={onNewTaskInputComplete} 
//                     onKeyPress={onNewTaskInputComplete} 
//                     autoFocus 
//                 />
//             }
//         </TaskContainer>
//     )
// }

// export default AddTask;
