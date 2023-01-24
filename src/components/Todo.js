import { MdDeleteForever } from 'react-icons/md'

const Todo = ({ id, text, date, handleDeleteTodo }) => {
    return (
        <div className='todo'>
            <span>{text}</span>
            <div className="todo-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon'
                    size='1.3em'
                    onClick={() => handleDeleteTodo(id)} />
            </div>
        </div>
    )
}

export default Todo