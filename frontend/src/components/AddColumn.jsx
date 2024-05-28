// import React, { useState } from "react";

// function AddColumn(props) {
//     const [showNewColumnButton, setShowNewColumnButton] = useState(true);
//     const [value, setValue] = useState("");

//     function handleInputChange(event) {
//         setValue(event.target.value);
//     }

//     function onNewColumnButtonClick() {
//         setShowNewColumnButton(false);
//     }

//     function onNewColumnInputComplete() {
//         setShowNewColumnButton(true);
//         addNewColumn(value);
//         setValue("");
//     }

//     function addNewColumn(title) {
//         const newColumnOrder = Array.from(props.state.columnOrder);
//         const newColumnId = 'column-' + Math.floor(Math.random() * 100000);
//         newColumnOrder.push(newColumnId);
    
//         const newColumn = {
//             id: newColumnId,
//             title: title,
//             taskIds: [],
//         };
    
//         props.setState({
//             ...props.state,
//             columnOrder: newColumnOrder,
//             columns: {
//                 ...props.state.columns,
//                 [newColumnId]: newColumn
//             }
//         });
//     }

//     return (
//         <div>
//             {
//                 showNewColumnButton ?
//                 <button onClick={onNewColumnButtonClick}>New Column</button> :
//                 <input type="text" value={value} onChange={handleInputChange} onBlur={onNewColumnInputComplete} />
//             }
//         </div>
//     )
// }

// export default AddColumn;



import React, { useState } from "react";
import styled from "styled-components";

const ColumnButton = styled.button`
    margin: 8px;
    padding: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const ColumnInput = styled.input`
    margin: 8px;
    padding: 8px;
    width: 180px;
    border: 1px solid lightgrey;
    border-radius: 16px;
`;

function AddColumn(props) {
    const [showNewColumnButton, setShowNewColumnButton] = useState(true);
    const [value, setValue] = useState("");

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    function onNewColumnButtonClick() {
        setShowNewColumnButton(false);
    }

    function onNewColumnInputComplete(event) {
        if (event.key === 'Enter' || event.type === 'blur') {
            setShowNewColumnButton(true);
            addNewColumn(value);
            setValue("");
        }
    }

    function addNewColumn(title) {
        const newColumnOrder = Array.from(props.state.columnOrder);
        const newColumnId = 'column-' + Math.floor(Math.random() * 100000);
        newColumnOrder.push(newColumnId);
    
        const newColumn = {
            id: newColumnId,
            title: title,
            taskIds: [],
        };
    
        props.setState({
            ...props.state,
            columnOrder: newColumnOrder,
            columns: {
                ...props.state.columns,
                [newColumnId]: newColumn
            }
        });
    }

    return (
        <div>
            {
                showNewColumnButton ?
                <ColumnButton onClick={onNewColumnButtonClick}>New Task</ColumnButton> :
                <ColumnInput 
                    type="text" 
                    value={value} 
                    onChange={handleInputChange} 
                    onBlur={onNewColumnInputComplete} 
                    onKeyPress={onNewColumnInputComplete} 
                    autoFocus 
                />
            }
        </div>
    )
}

export default AddColumn;
