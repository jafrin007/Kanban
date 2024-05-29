import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 8px solid ${(props) => props.color};
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
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

  function deleteTask() {
    props.deleteTask(props.task.id, props.columnId);
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} color={props.color}>
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
            <TaskButton onClick={deleteTask}>❌</TaskButton>
          </IconsContainer>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;

