import React, { useState } from "react";

function TodoForm(props) {
   const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                onChange= {handleSubmit} 
                type='text'
                placeholder="Add a todo..."
                value= {input}
                name='text'
                className="todo-input">
            </input>
            <button className="todo-button">Add todo</button>                    
        </form>
    );  
}

export default TodoForm;