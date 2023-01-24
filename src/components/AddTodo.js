import React, { useState } from 'react'

const AddTodo = ({ handleAddTodo }) => {
    const [todoText, setTodoText] = useState('');
    const characterLimit = 200; /* Descides max characters which kan be typed*/

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) { /* TO stopp the user from entering more than the limitcharacters*/
            setTodoText(event.target.value);
        }
    }

    const handleSaveClick = () => { /*Checking if the user is typing, with trim fuction which delete the space at the beginning and the end*/
        if (todoText.trim().length > 0) {
            handleAddTodo(todoText);
            setTodoText('');
        }

    }
    return (
        <div className='todo new'>
            <textarea placeholder='Type to add a todo....'
                cols="10"
                rows="8"
                value={todoText}
                onChange={handleChange}>
            </textarea>
            <div className='todo-footer'>
                <small>{characterLimit - todoText.length} Remaining</small>
                <button className='save'
                    onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddTodo