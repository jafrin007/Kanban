// import React from 'react';
// import styled from 'styled-components';
// import { Droppable, Draggable } from 'react-beautiful-dnd';
// import Task from './Task';
// import AddTask from './AddTask';

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 10px;
// `;
// const Title = styled.h3`
//   padding: 8px;
// `;

// const TaskList = styled.div`
//   padding: 8px;
// `;

// function Column(props) {

//     function deleteColumn(columnId, index) {
//         const columnTasks = props.state.columns[columnId].taskIds;
    
//         const finalTasks = columnTasks.reduce((previousValue, currentValue) => {
//             const {[currentValue]: oldTask, ...newTasks} = previousValue;
//             return newTasks;
//         }, props.state.tasks);
        
//         const columns = props.state.columns;
//         const {[columnId]: oldColumn, ...newColumns} = columns; 
    
//         const newColumnOrder = Array.from(props.state.columnOrder);
//         newColumnOrder.splice(index, 1);
    
//         props.setState({
//             tasks: {
//                 ...finalTasks
//             },
//             columns: {
//                 ...newColumns
//             },
//             columnOrder: newColumnOrder
//         });
//     }

//     return (
//         <Draggable draggableId={props.column.id} index={props.index}>
//             {provided => (
//                 <Container {...provided.draggableProps} ref={provided.innerRef}>
//                     <Title {...provided.dragHandleProps}>
//                         {props.column.title}
//                         <span onClick={() => deleteColumn(props.column.id, props.index)}> X ❌</span>
//                     </Title>
//                     <Droppable droppableId={props.column.id} type="task">
//                         {provided => (
//                             <TaskList {...provided.droppableProps} ref={provided.innerRef}>
//                                 {
//                                     props.tasks.map((task, index) => 
//                                         (<Task key={task.id} task={task} index={index} columnId={props.column.id} state={props.state} setState={props.setState} />)
//                                     )
//                                 }
//                                 {provided.placeholder}
//                             </TaskList>
//                         )}
//                     </Droppable>
//                     <AddTask columnId={props.column.id} state={props.state} setState={props.setState} />
//                 </Container>
//             )}
//         </Draggable>
//     )
// }

// export default Column;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Droppable, Draggable } from 'react-beautiful-dnd';
// import Task from './Task';
// import AddTask from './AddTask';

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 10px;
// `;
// const Title = styled.h3`
//   padding: 8px;
// `;

// const TaskList = styled.div`
//   padding: 8px;
// `;

// function Column(props) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [newTitle, setNewTitle] = useState(props.column.title);

//     function handleTitleChange(event) {
//         setNewTitle(event.target.value);
//     }

//     function handleTitleSubmit() {
//         props.updateColumnTitle(props.column.id, newTitle);
//         setIsEditing(false);
//     }

//     function deleteColumn() {
//         props.deleteColumn(props.column.id);
//     }

//     function deleteTask(taskId) {
//         props.deleteTask(taskId, props.column.id);
//     }

//     return (
//         <Draggable draggableId={props.column.id} index={props.index}>
//             {provided => (
//                 <Container {...provided.draggableProps} ref={provided.innerRef}>
//                     <Title {...provided.dragHandleProps}>
//                         {isEditing ? (
//                             <div>
//                                 <input 
//                                     type="text" 
//                                     value={newTitle} 
//                                     onChange={handleTitleChange}
//                                 />
//                                 <button onClick={handleTitleSubmit}>Save</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 {props.column.title}
//                                 <button onClick={() => setIsEditing(true)}>Edit</button>
//                                 <button onClick={deleteColumn}>Delete</button>
//                             </div>
//                         )}
//                     </Title>
//                     <Droppable droppableId={props.column.id} type="task">
//                         {provided => (
//                             <TaskList {...provided.droppableProps} ref={provided.innerRef}>
//                                 {
//                                     props.tasks.map((task, index) => (
//                                         <Task 
//                                             key={task.id} 
//                                             task={task} 
//                                             index={index} 
//                                             columnId={props.column.id} 
//                                             state={props.state} 
//                                             setState={props.setState} 
//                                             updateTaskContent={props.updateTaskContent}
//                                             deleteTask={deleteTask}
//                                         />
//                                     ))
//                                 }
//                                 {provided.placeholder}
//                             </TaskList>
//                         )}
//                     </Droppable>
//                     <AddTask columnId={props.column.id} state={props.state} setState={props.setState} />
//                 </Container>
//             )}
//         </Draggable>
//     );
// }

// export default Column;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Droppable, Draggable } from 'react-beautiful-dnd';
// import Task from './Task';
// import AddTask from './AddTask';

// const Container = styled.div`
//   margin: 8px;
//   border-radius: 20px;
//   width: 250px;
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   background-color: #f4f7f6;
//   border: 3px solid ${(props) => props.color || 'transparent'};
 

// `;

// const Title = styled.h3`
//   padding: 8px;
//   color: white;
//   font-size: 18px;
//   text-align: center;
//   border-top-left-radius: 16px;
//   border-top-right-radius: 16px;
//   margin: 0;
//   background-color: ${(props) => props.color};
// `;

// const TaskList = styled.div`
//   padding: 8px;
//   min-height: 100px;
//   background-color: ${(props) => (props.isDraggingOver ? '#f0f8ff' : '#f4f7f6')};
//   flex-grow: 1;
//   border-radius: 16px;
// `;

// const ColumnButton = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   margin-left: 5px;
// `;

// const colors = ['#ec7263', '#719192', '#ff9933', '#3399ff']; // Define your colors here

// function Column(props) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(props.column.title);

//   function handleTitleChange(event) {
//     setNewTitle(event.target.value);
//   }

//   function handleTitleSubmit() {
//     props.updateColumnTitle(props.column.id, newTitle);
//     setIsEditing(false);
//   }

//   function deleteColumn() {
//     props.deleteColumn(props.column.id);
//   }

//   const color = colors[props.index % colors.length]; // Assign color based on column index

//   return (
//     <Draggable draggableId={props.column.id} index={props.index}>
//       {(provided) => (
//         <Container {...provided.draggableProps} ref={provided.innerRef} color={color}>
//           <Title {...provided.dragHandleProps} color={color}>
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={newTitle}
//                 onChange={handleTitleChange}
//                 onBlur={handleTitleSubmit}
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter') handleTitleSubmit();
//                 }}
//                 autoFocus
//               />
//             ) : (
//               <>
//                 {props.column.title}
//                 <div>
//                   <ColumnButton onClick={() => setIsEditing(true)}>✏️</ColumnButton>
//                   <ColumnButton onClick={deleteColumn}>❌</ColumnButton>
//                 </div>
//               </>
//             )}
//           </Title>
//           <Droppable droppableId={props.column.id} type="task">
//             {(provided, snapshot) => (
//               <TaskList {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
//                 {props.tasks.map((task, index) => (
//                   <Task
//                     key={task.id}
//                     task={task}
//                     index={index}
//                     columnId={props.column.id}
//                     state={props.state}
//                     setState={props.setState}
//                     updateTaskContent={props.updateTaskContent} // Pass updateTaskContent here
//                     color={color} // Pass color to Task component
//                     deleteTask={props.deleteTask} // Pass deleteTask function to Task component
//                   />
//                 ))}
//                 {provided.placeholder}
//               </TaskList>
//             )}
//           </Droppable>
//           <AddTask columnId={props.column.id} state={props.state} setState={props.setState} />
//         </Container>
//       )}
//     </Draggable>
//   );
// }

// export default Column;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import AddTask from './AddTask';

const Container = styled.div`
  margin: 8px;
  border-radius: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #f4f7f6;
  border: 3px solid ${(props) => props.color || 'transparent'};
`;

const Title = styled.h3`
  padding: 8px;
  color: white;
  font-size: 18px;
  text-align: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin: 0;
  background-color: ${(props) => props.color};
`;

const TaskList = styled.div`
  padding: 8px;
  min-height: 100px;
  background-color: ${(props) => (props.isDraggingOver ? '#f0f8ff' : '#f4f7f6')};
  flex-grow: 1;
  border-radius: 16px;
`;

const ColumnButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;

const colors = ['#ec7263', '#719192', '#ff9933', '#3399ff']; // Define your colors here

function Column(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.column.title);

  function handleTitleChange(event) {
    setNewTitle(event.target.value);
  }

  function handleTitleSubmit() {
    props.updateColumnTitle(props.column.id, newTitle);
    setIsEditing(false);
  }

  function deleteColumn() {
    const columnTasks = props.state.columns[props.column.id].taskIds;

    const finalTasks = columnTasks.reduce((previousValue, currentValue) => {
      const { [currentValue]: oldTask, ...newTasks } = previousValue;
      return newTasks;
    }, props.state.tasks);

    const columns = props.state.columns;
    const { [props.column.id]: oldColumn, ...newColumns } = columns;

    const newColumnOrder = Array.from(props.state.columnOrder);
    newColumnOrder.splice(props.index, 1);

    props.setState({
      tasks: {
        ...finalTasks
      },
      columns: {
        ...newColumns
      },
      columnOrder: newColumnOrder
    });
  }

  const color = colors[props.index % colors.length]; // Assign color based on column index

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef} color={color}>
          <Title {...provided.dragHandleProps} color={color}>
            {isEditing ? (
              <input
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                onBlur={handleTitleSubmit}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleTitleSubmit();
                }}
                autoFocus
              />
            ) : (
              <>
                {props.column.title}
                <div>
                  <ColumnButton onClick={() => setIsEditing(true)}>✏️</ColumnButton>
                  <ColumnButton onClick={deleteColumn}>❌</ColumnButton>
                </div>
              </>
            )}
          </Title>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                {props.tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    columnId={props.column.id}
                    state={props.state}
                    setState={props.setState}
                    updateTaskContent={props.updateTaskContent} // Pass updateTaskContent here
                    color={color} // Pass color to Task component
                    deleteTask={props.deleteTask} // Pass deleteTask function to Task component
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <AddTask columnId={props.column.id} state={props.state} setState={props.setState} />
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
