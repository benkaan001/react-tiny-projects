import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  // alert
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, 'List cleared!', 'danger');
    setList([]);
  };

  const removeTodo = (id) => {
    showAlert(true, 'Item removed!', 'danger');
    const newTodoList = list.filter((item) => item.id !== id);
    setList(newTodoList);
  };

  const editTodo = (id) => {
    const editedTodo = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editedTodo.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'please enter value', 'danger');
    } else if (name && isEditing) {
      // edit logic
      const editedTodo = list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(editedTodo);
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'edit successful!', 'success');
    } else {
      // show alert
      showAlert(true, 'todo added successfully!', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='todo-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>todo-buddy</h3>
        <div className='form-control'>
          <input
            type='text'
            className='todo'
            placeholder='e.g. finish portfolio'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='todo-container'>
          <List items={list} removeTodo={removeTodo} editTodo={editTodo} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
