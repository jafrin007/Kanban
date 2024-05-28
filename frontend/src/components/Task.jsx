// import React from "react";
// import { Draggable } from 'react-beautiful-dnd';
// import styled from 'styled-components';

// const Container = styled.div`
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   padding: 8px;
//   margin-bottom: 8px;
//   background-color: white;
// `;

// function Task(props) {

//     function deleteTask(columnId, index, taskId) {
//         const column = props.state.columns[columnId];
//         const newTaskIds = Array.from(column.taskIds);
//         newTaskIds.splice(index, 1);
    
//         const tasks = props.state.tasks;
//         const {[taskId]: oldTask, ...newTasks} = tasks;
    
//         props.setState({
//             ...props.state,
//             tasks: {
//                 ...newTasks
//             },
//             columns: {
//                 ...props.state.columns,
//                 [columnId]: {
//                     ...column,
//                     taskIds: newTaskIds
//                 }
//             }
//         });
//     }

//     return (
//         <Draggable draggableId={props.task.id} index={props.index}>
//             {provided => (
//                 <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                     {props.task.content}
//                     <span onClick={() => deleteTask(props.columnId, props.index, props.task.id)}> X❌</span>
//                 </Container>
//             )}
//         </Draggable>
//     )
// }

// export default Task;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Draggable } from 'react-beautiful-dnd';

// const Container = styled.div`
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   padding: 8px;
//   margin-bottom: 8px;
//   background-color: white;
// `;

// function Task(props) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [newContent, setNewContent] = useState(props.task.content);

//     function handleContentChange(event) {
//         setNewContent(event.target.value);
//     }

//     function handleContentSubmit() {
//         props.updateTaskContent(props.task.id, newContent);
//         setIsEditing(false);
//     }

//     function deleteTask() {
//         props.deleteTask(props.task.id, props.columnId);
//     }

//     return (
//         <Draggable draggableId={props.task.id} index={props.index}>
//             {provided => (
//                 <Container
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     ref={provided.innerRef}
//                 >
//                     {isEditing ? (
//                         <div>
//                             <input 
//                                 type="text" 
//                                 value={newContent} 
//                                 onChange={handleContentChange}
//                             />
//                             <button onClick={handleContentSubmit}>Save</button>
//                         </div>
//                     ) : (
//                         <div>
//                             {props.task.content}
//                             <button onClick={() => setIsEditing(true)}>Edit</button>
//                             <button onClick={deleteTask}>Delete</button>
//                         </div>
//                     )}
//                 </Container>
//             )}
//         </Draggable>
//     );
// }

// export default Task;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(props.task.content);

    function handleContentChange(event) {
        setNewContent(event.target.value);
    }

    function handleContentSubmit() {
        props.updateTaskContent(props.task.id, newContent);
        setIsEditing(false);
    }

    function deleteTask(taskId, columnId, index) {
        const column = props.state.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(index, 1);
    
        const {[taskId]: oldTask, ...newTasks} = props.state.tasks;
    
        props.setState({
            ...props.state,
            tasks: {
                ...newTasks
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
        <Draggable draggableId={props.task.id} index={props.index}>
        {provided => (
            <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={newContent} 
                        onChange={handleContentChange}
                        onBlur={handleContentSubmit}
                        onKeyPress={(e) => { if (e.key === 'Enter') handleContentSubmit(); }}
                        autoFocus 
                    />
                ) : (
                    <>
                        {props.task.content}
                    </>
                )}
                <IconsContainer>
                    <TaskButton onClick={() => setIsEditing(true)}>✏️</TaskButton>
                    <TaskButton onClick={() => deleteTask(props.task.id, props.columnId, props.index)}>❌</TaskButton>
                </IconsContainer>
            </Container>
        )}
    </Draggable>
    );
}

export default Task;

