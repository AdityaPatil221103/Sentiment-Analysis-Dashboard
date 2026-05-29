import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState("take a shower", "walk a dog");
    const [newTask, setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value);

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input 
                type='text'
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
            <button 
                className='add-button'
                onClick={addTask}>
                    Add
            </button>
       
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key = {index}>
                    <span className='text'>{task}</span>
                    <button
                        className='delete-button'
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className='delete-button'
                        onClick={() => moveTaskUp(index)}>
                        ☝️
                    </button>
                    <button
                        className='delete-button'
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
            )}
        </ol>

    </div>);
}
export default ToDoList;