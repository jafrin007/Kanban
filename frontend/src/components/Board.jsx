// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import styled from 'styled-components';
// import Column from './Column';
// import AddColumn from './AddColumn';

// const Container = styled.div`
//   display: flex;
// `;

// function Board(props) {
//     const initialData = {tasks: {}, columns: {}, columnOrder: []};
//     const [state, setState] = useState(initialData);

//     useEffect(() => {
//         fetchBoard().then(board => setState(board));
//     }, [props.token]);

//     useEffect(() => {
//         if (state !== initialData) {
//             saveBoard();
//         }
//     }, [state]);

//     async function saveBoard() {
//         const response = await fetch("/board", {
//             method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization" : "Bearer " + props.token
//                 },
//             body: JSON.stringify(state)
//         });
//         const data = await response.json();
//     }

//     async function fetchBoard() {
//         const response = await fetch('/board', {headers: {"Authorization" : "Bearer " + props.token}});
//         const data = await response.json();
//         return data.board;
//     }

//     function onDragEnd(result) {
//         const { destination, source, draggableId, type } = result;

//         if (!destination) {
//             return;
//         }
        
//         if (destination.droppableId === source.droppableId && destination.index === source.index) {
//             return;
//         }

//         if (type === 'column') {
//             const newColumnOrder = Array.from(state.columnOrder);
//             newColumnOrder.splice(source.index, 1);
//             newColumnOrder.splice(destination.index, 0, draggableId);
      
//             setState({
//                 ...state,
//                 columnOrder: newColumnOrder,
//             });
//             return;
//         }

//         const start = state.columns[source.droppableId]; 
//         const finish = state.columns[destination.droppableId]; 

//         if (start === finish) {
//             const newTaskIds = Array.from(start.taskIds);
//             newTaskIds.splice(source.index, 1);
//             newTaskIds.splice(destination.index, 0, draggableId);
      
//             const newColumn = {
//                 ...start,
//                 taskIds: newTaskIds,
//             }
      
//             setState({...state, 
//                 columns: {
//                 ...state.columns,
//                 [newColumn.id]: newColumn}
//             });
//             return;
//         }

//         const startTaskIds = Array.from(start.taskIds);
//         startTaskIds.splice(source.index, 1);
//         const newStart = {
//             ...start,
//             taskIds: startTaskIds,
//         }
    
//         const finishTaskIds = Array.from(finish.taskIds);
//         finishTaskIds.splice(destination.index, 0, draggableId);
//         const newFinish = {
//             ...finish,
//             taskIds: finishTaskIds,
//         }
    
//         setState({...state, 
//             columns: {
//                 ...state.columns,
//                 [newStart.id]: newStart,
//                 [newFinish.id]: newFinish,
//             }
//         });
//     }

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <AddColumn state={state} setState={setState} />
//             <Droppable droppableId="all-columns" direction="horizontal" type="column">
//                 {provided => (
//                     <Container {...provided.droppableProps} ref={provided.innerRef}>
//                         {
//                             state.columnOrder.map((columnId, index) => {
//                                 const column = state.columns[columnId];
//                                 const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
//                                 return <Column key={column.id} column={column} tasks={tasks} index={index} state={state} setState={setState} />;
//                             })
//                         }
//                         {provided.placeholder}
//                     </Container>
//                 )}
//             </Droppable>
//         </DragDropContext>
//     )
// }



// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import Column from './Column';
// import AddColumn from './AddColumn';
// import styled from 'styled-components';

// const BoardContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 16px;
// `;

// function Board(props) {
//     const initialData = {tasks: {}, columns: {}, columnOrder: []};
//     const [state, setState] = useState(initialData);

//     useEffect(() => {
//         fetchBoard().then(board => setState(board));
//     }, [props.token]);

//     useEffect(() => {
//         if (state !== initialData) {
//             saveBoard();
//         }
//     }, [state]);

//     async function saveBoard() {
//         const response = await fetch("/board", {
//             method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization" : "Bearer " + props.token
//                 },
//             body: JSON.stringify(state)
//         });
//         const data = await response.json();
//     }

//     async function fetchBoard() {
//         const response = await fetch('/board', {headers: {"Authorization" : "Bearer " + props.token}});
//         const data = await response.json();
//         return data.board;
//     }

//     function onDragEnd(result) {
//         const { destination, source, draggableId, type } = result;

//         if (!destination) {
//             return;
//         }

//         if (destination.droppableId === source.droppableId && destination.index === source.index) {
//             return;
//         }

//         if (type === 'column') {
//             const newColumnOrder = Array.from(state.columnOrder);
//             newColumnOrder.splice(source.index, 1);
//             newColumnOrder.splice(destination.index, 0, draggableId);

//             setState({
//                 ...state,
//                 columnOrder: newColumnOrder
//             });
//             return;
//         }

//         const start = state.columns[source.droppableId];
//         const finish = state.columns[destination.droppableId];

//         if (start === finish) {
//             const newTaskIds = Array.from(start.taskIds);
//             newTaskIds.splice(source.index, 1);
//             newTaskIds.splice(destination.index, 0, draggableId);

//             const newColumn = {
//                 ...start,
//                 taskIds: newTaskIds
//             };

//             setState({
//                 ...state,
//                 columns: {
//                     ...state.columns,
//                     [newColumn.id]: newColumn
//                 }
//             });
//             return;
//         }

//         const startTaskIds = Array.from(start.taskIds);
//         startTaskIds.splice(source.index, 1);
//         const newStart = {
//             ...start,
//             taskIds: startTaskIds
//         };

//         const finishTaskIds = Array.from(finish.taskIds);
//         finishTaskIds.splice(destination.index, 0, draggableId);
//         const newFinish = {
//             ...finish,
//             taskIds: finishTaskIds
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [newStart.id]: newStart,
//                 [newFinish.id]: newFinish
//             }
//         });

//         // After updating state, save board data to the server
//         saveBoard();
//     }

//     function updateColumnTitle(columnId, newTitle) {
//         const column = state.columns[columnId];
//         const updatedColumn = {
//             ...column,
//             title: newTitle
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [columnId]: updatedColumn
//             }
//         });
//     }

//     function updateTaskContent(taskId, newContent) {
//         const task = state.tasks[taskId];
//         const updatedTask = {
//             ...task,
//             content: newContent
//         };

//         setState({
//             ...state,
//             tasks: {
//                 ...state.tasks,
//                 [taskId]: updatedTask
//             }
//         });
//     }

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <BoardContainer>
//                 <AddColumn state={state} setState={setState} />
//                 <Droppable droppableId="all-columns" direction="horizontal" type="column">
//                     {provided => (
//                         <div
//                             {...provided.droppableProps}
//                             ref={provided.innerRef}
//                             style={{ display: 'flex' }}
//                         >
//                             {
//                                 state.columnOrder.map((columnId, index) => {
//                                     const column = state.columns[columnId];
//                                     const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

//                                     return (
//                                         <Column 
//                                             key={column.id} 
//                                             column={column} 
//                                             tasks={tasks} 
//                                             index={index} 
//                                             state={state} 
//                                             setState={setState}
//                                             updateColumnTitle={updateColumnTitle}
//                                             updateTaskContent={updateTaskContent}
//                                         />
//                                     );
//                                 })
//                             }
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </BoardContainer>
//         </DragDropContext>
//     );
// }

// export default Board;



// import React, { useState, useEffect } from 'react';

// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import Column from './Column';
// import AddColumn from './AddColumn';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';

// const BoardContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center; /* Align columns horizontally at center */
//     padding: 16px;
//     background-color: #f0f0f0; /* Light gray background */
//     min-height: 100vh; /* Ensure the board takes up the full height of the viewport */
//     max-width:100vw;
// `;

// const MainTitle = styled.h1`
//     text-align: center;
//     margin-top: 16px;
//     margin-bottom: 24px;
//     color: #333; /* Dark gray */
// `;

// const LogoutButton = styled.button`
//     position: absolute;
//     top: 16px;
//     right: 16px;
//     padding: 8px 16px;
//     background-color: #f44336; /* Red */
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//     text-align: center;
//     text-decoration: none;

//     &:hover {
//         background-color: #d32f2f; /* Darker red */
//     }
// `;



// function Board(props) {
//     const initialData = {tasks: {}, columns: {}, columnOrder: []};
//     const [state, setState] = useState(initialData);
//     const history = useHistory();

//     useEffect(() => {
//         fetchBoard().then(board => setState(board));
//     }, [props.token]);

//     useEffect(() => {
//         if (state !== initialData) {
//             saveBoard();
//         }
//     }, [state]);

//     async function saveBoard() {
//         const response = await fetch("/board", {
//             method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization" : "Bearer " + props.token
//                 },
//             body: JSON.stringify(state)
//         });
//         const data = await response.json();
//     }

//     async function fetchBoard() {
//         const response = await fetch('/board', {headers: {"Authorization" : "Bearer " + props.token}});
//         const data = await response.json();
//         return data.board;
//     }

//     function onDragEnd(result) {
//         const { destination, source, draggableId, type } = result;

//         if (!destination) {
//             return;
//         }

//         if (destination.droppableId === source.droppableId && destination.index === source.index) {
//             return;
//         }

//         if (type === 'column') {
//             const newColumnOrder = Array.from(state.columnOrder);
//             newColumnOrder.splice(source.index, 1);
//             newColumnOrder.splice(destination.index, 0, draggableId);

//             setState({
//                 ...state,
//                 columnOrder: newColumnOrder
//             });
//             return;
//         }

//         const start = state.columns[source.droppableId];
//         const finish = state.columns[destination.droppableId];

//         if (start === finish) {
//             const newTaskIds = Array.from(start.taskIds);
//             newTaskIds.splice(source.index, 1);
//             newTaskIds.splice(destination.index, 0, draggableId);

//             const newColumn = {
//                 ...start,
//                 taskIds: newTaskIds
//             };

//             setState({
//                 ...state,
//                 columns: {
//                     ...state.columns,
//                     [newColumn.id]: newColumn
//                 }
//             });
//             return;
//         }

//         const startTaskIds = Array.from(start.taskIds);
//         startTaskIds.splice(source.index, 1);
//         const newStart = {
//             ...start,
//             taskIds: startTaskIds
//         };

//         const finishTaskIds = Array.from(finish.taskIds);
//         finishTaskIds.splice(destination.index, 0, draggableId);
//         const newFinish = {
//             ...finish,
//             taskIds: finishTaskIds
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [newStart.id]: newStart,
//                 [newFinish.id]: newFinish
//             }
//         });

//         // After updating state, save board data to the server
//         saveBoard();
//     }

//     function updateColumnTitle(columnId, newTitle) {
//         const column = state.columns[columnId];
//         const updatedColumn = {
//             ...column,
//             title: newTitle
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [columnId]: updatedColumn
//             }
//         });
//     }

//     function updateTaskContent(taskId, newContent) {
//         const task = state.tasks[taskId];
//         const updatedTask = {
//             ...task,
//             content: newContent
//         };

//         setState({
//             ...state,
//             tasks: {
//                 ...state.tasks,
//                 [taskId]: updatedTask
//             }
//         });
//     }

//     function handleLogout() {
//         // Clear token from state
//         props.setToken(null);
//         // Clear token from localStorage
//         localStorage.removeItem('token');
//         // Redirect to login page
//         history.push("/login");
//     }

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <BoardContainer>
//                 {/* <button onClick={handleLogout}>Logout</button> */}
//                 <MainTitle>KANBAN BOARD</MainTitle>
//                 <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//                 <AddColumn state={state} setState={setState} />
//                 <Droppable style={{"height":"100vh"}} droppableId="all-columns" type="column">
//                     {provided => (
//                         <div
//                             {...provided.droppableProps}
//                             ref={provided.innerRef}
//                             style={{ display: 'flex' }}
//                         >
//                             {
//                                 state.columnOrder.map((columnId, index) => {
//                                     const column = state.columns[columnId];
//                                     const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

//                                     return (
//                                         <Column 
//                                             key={column.id} 
//                                             column={column} 
//                                             tasks={tasks} 
//                                             index={index} 
//                                             state={state} 
//                                             setState={setState}
//                                             updateColumnTitle={updateColumnTitle}
//                                             updateTaskContent={updateTaskContent}
//                                         />
//                                     );
//                                 })
//                             }
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </BoardContainer>
//         </DragDropContext>
//     );
// }

// export default Board;

// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import Column from './Column';
// import AddColumn from './AddColumn';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';

// const BoardContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center; /* Align columns horizontally at center */
//     padding: 16px;
//     background-color: #f0f0f0; /* Light gray background */
//     min-height: 100vh; /* Ensure the board takes up the full height of the viewport */
//     max-width: 100vw;
// `;

// const ColumnsContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap; 
//     justify-content: center;
//     width: 80vw;
   
// `;

// const MainTitle = styled.h1`
//     text-align: center;
//     margin-top: 16px;
//     margin-bottom: 24px;
//     color: #333; /* Dark gray */
// `;

// const LogoutButton = styled.button`
//     position: absolute;
//     top: 16px;
//     right: 16px;
//     padding: 8px 16px;
//     background-color: #f95959; /* Red */
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//     text-align: center;
//     text-decoration: none;

//     &:hover {
//         background-color: #d32f2f; /* Darker red */
//     }
// `;

// function Board(props) {
//     const initialData = {tasks: {}, columns: {}, columnOrder: []};
//     const [state, setState] = useState(initialData);
//     const history = useHistory();

//     useEffect(() => {
//         fetchBoard().then(board => setState(board));
//     }, [props.token]);

//     useEffect(() => {
//         if (state !== initialData) {
//             saveBoard();
//         }
//     }, [state]);

//     async function saveBoard() {
//         const response = await fetch("/board", {
//             method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization" : "Bearer " + props.token
//                 },
//             body: JSON.stringify(state)
//         });
//         const data = await response.json();
//     }

//     async function fetchBoard() {
//         const response = await fetch('/board', {headers: {"Authorization" : "Bearer " + props.token}});
//         const data = await response.json();
//         return data.board;
//     }

//     function onDragEnd(result) {
//         const { destination, source, draggableId, type } = result;

//         if (!destination) {
//             return;
//         }

//         if (destination.droppableId === source.droppableId && destination.index === source.index) {
//             return;
//         }

//         if (type === 'column') {
//             const newColumnOrder = Array.from(state.columnOrder);
//             newColumnOrder.splice(source.index, 1);
//             newColumnOrder.splice(destination.index, 0, draggableId);

//             setState({
//                 ...state,
//                 columnOrder: newColumnOrder
//             });
//             return;
//         }

//         const start = state.columns[source.droppableId];
//         const finish = state.columns[destination.droppableId];

//         if (start === finish) {
//             const newTaskIds = Array.from(start.taskIds);
//             newTaskIds.splice(source.index, 1);
//             newTaskIds.splice(destination.index, 0, draggableId);

//             const newColumn = {
//                 ...start,
//                 taskIds: newTaskIds
//             };

//             setState({
//                 ...state,
//                 columns: {
//                     ...state.columns,
//                     [newColumn.id]: newColumn
//                 }
//             });
//             return;
//         }

//         const startTaskIds = Array.from(start.taskIds);
//         startTaskIds.splice(source.index, 1);
//         const newStart = {
//             ...start,
//             taskIds: startTaskIds
//         };

//         const finishTaskIds = Array.from(finish.taskIds);
//         finishTaskIds.splice(destination.index, 0, draggableId);
//         const newFinish = {
//             ...finish,
//             taskIds: finishTaskIds
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [newStart.id]: newStart,
//                 [newFinish.id]: newFinish
//             }
//         });

//         // After updating state, save board data to the server
//         saveBoard();
//     }

//     function updateColumnTitle(columnId, newTitle) {
//         const column = state.columns[columnId];
//         const updatedColumn = {
//             ...column,
//             title: newTitle
//         };

//         setState({
//             ...state,
//             columns: {
//                 ...state.columns,
//                 [columnId]: updatedColumn
//             }
//         });
//     }

//     function updateTaskContent(taskId, newContent) {
//         const task = state.tasks[taskId];
//         const updatedTask = {
//             ...task,
//             content: newContent
//         };

//         setState({
//             ...state,
//             tasks: {
//                 ...state.tasks,
//                 [taskId]: updatedTask
//             }
//         });
//     }

//     function handleLogout() {
//         // Clear token from state
//         props.setToken(null);
//         // Clear token from localStorage
//         localStorage.removeItem('token');
//         // Redirect to login page
//         history.push("/");
//     }

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <BoardContainer>
//                 {/* <button onClick={handleLogout}>Logout</button> */}
//                 <MainTitle>KANBAN BOARD</MainTitle>
//                 <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//                 <AddColumn state={state} setState={setState} />
//                 <Droppable droppableId="all-columns" type="column">
//                     {provided => (
//                         <ColumnsContainer
//                             {...provided.droppableProps}
//                             ref={provided.innerRef}
//                         >
//                             {
//                                 state.columnOrder.map((columnId, index) => {
//                                     const column = state.columns[columnId];
//                                     const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

//                                     return (
//                                         <Column 
//                                             key={column.id} 
//                                             column={column} 
//                                             tasks={tasks} 
//                                             index={index} 
//                                             state={state} 
//                                             setState={setState}
//                                             updateColumnTitle={updateColumnTitle}
//                                             updateTaskContent={updateTaskContent}
//                                         />
//                                     );
//                                 })
//                             }
//                             {provided.placeholder}
//                         </ColumnsContainer>
//                     )}
//                 </Droppable>
//             </BoardContainer>
//         </DragDropContext>
//     );
// }

// export default Board;


import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import AddColumn from './AddColumn';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Align columns horizontally at center */
    padding: 16px;
    background-color: #f0f0f0; /* Light gray background */
    min-height: 100vh; /* Ensure the board takes up the full height of the viewport */
    max-width: 100vw;
`;

const ColumnsContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    width: 80vw;
`;

const MainTitle = styled.h1`
    text-align: center;
    margin-top: 16px;
    margin-bottom: 24px;
    color: #333; /* Dark gray */
`;

const LogoutButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 8px 16px;
    background-color: #f95959; /* Red */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: #d32f2f; /* Darker red */
    }
`;

function Board(props) {
    const initialData = { tasks: {}, columns: {}, columnOrder: [] };
    const [state, setState] = useState(initialData);
    const history = useHistory();

    useEffect(() => {
        fetchBoard().then(board => setState(board));
    }, [props.token]);

    useEffect(() => {
        if (state !== initialData) {
            saveBoard();
        }
    }, [state]);

    async function saveBoard() {
        await fetch("/board", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + props.token
            },
            body: JSON.stringify(state)
        });
    }

    async function fetchBoard() {
        const response = await fetch('/board', { headers: { "Authorization": "Bearer " + props.token } });
        const data = await response.json();
        return data.board;
    }

    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            setState({
                ...state,
                columnOrder: newColumnOrder
            });
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            setState({
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn
                }
            });
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        setState({
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        });

        // After updating state, save board data to the server
        saveBoard();
    }

    function updateColumnTitle(columnId, newTitle) {
        const column = state.columns[columnId];
        const updatedColumn = {
            ...column,
            title: newTitle
        };

        setState({
            ...state,
            columns: {
                ...state.columns,
                [columnId]: updatedColumn
            }
        });
    }

    function updateTaskContent(taskId, newContent) {
        const task = state.tasks[taskId];
        const updatedTask = {
            ...task,
            content: newContent
        };

        setState({
            ...state,
            tasks: {
                ...state.tasks,
                [taskId]: updatedTask
            }
        });
    }

    function deleteTask(taskId, columnId) {
        const newTasks = { ...state.tasks };
        delete newTasks[taskId];

        const column = state.columns[columnId];
        const newTaskIds = column.taskIds.filter(id => id !== taskId);
        const newColumn = { ...column, taskIds: newTaskIds };

        setState({
            ...state,
            tasks: newTasks,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            }
        });
    }

    function deleteColumn(columnId, index) {
        const columnTasks = state.columns[columnId].taskIds;

        const finalTasks = columnTasks.reduce((previousValue, currentValue) => {
            const { [currentValue]: oldTask, ...newTasks } = previousValue;
            return newTasks;
        }, state.tasks);

        const columns = state.columns;
        const { [columnId]: oldColumn, ...newColumns } = columns;

        const newColumnOrder = Array.from(state.columnOrder);
        newColumnOrder.splice(index, 1);

        setState({
            tasks: {
                ...finalTasks
            },
            columns: {
                ...newColumns
            },
            columnOrder: newColumnOrder
        });
    }

    function handleLogout() {
        // Clear token from state
        props.setToken(null);
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Redirect to login page
        history.push("/");
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <BoardContainer>
                <MainTitle>KANBAN BOARD</MainTitle>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                <AddColumn state={state} setState={setState} />
                <Droppable droppableId="all-columns" type="column">
                    {provided => (
                        <ColumnsContainer
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {
                                state.columnOrder.map((columnId, index) => {
                                    const column = state.columns[columnId];
                                    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                                    return (
                                        <Column 
                                            key={column.id} 
                                            column={column} 
                                            tasks={tasks} 
                                            index={index} 
                                            state={state} 
                                            setState={setState}
                                            updateColumnTitle={updateColumnTitle}
                                            updateTaskContent={updateTaskContent}
                                            deleteTask={deleteTask}
                                            deleteColumn={deleteColumn}
                                        />
                                    );
                                })
                            }
                            {provided.placeholder}
                        </ColumnsContainer>
                    )}
                </Droppable>
            </BoardContainer>
        </DragDropContext>
    );
}

export default Board;
