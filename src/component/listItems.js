import React from "react";

function ListItems({ todos, setTodos, getDataUpdate }) {
  const handleDelete = (e, id) => {
    e.preventDefault();
    const hapus = todos.filter((list, i) => i !== id);
    setTodos(hapus);
  };

  // const handleUpdate = (index) => {
  //   const id = todos.map((todo) =>
  //     todo.id === index ? { ...todo, isChecked: !todo.isChecked } : todo
  //   );

  //   const update = todos.map((todo) => (todo.id === index ? todo : ""));
  //   setTodos(id);
  //   setInput(update);

    
  // };
  
  return (
    <div className="md:w-96 md:h-26 w-72 h-26 bg-white flex justify-center rounded-lg shadow-2xl shadow-slate-800">
      <ul>
        {todos.map((list, index) => (
          <li className="flex items-center ">
              <div className="md:w-52 md:h-9 w-28 h-9 flex items-center">
              {list.text}{" "}
              </div>
            
            <div>
                <button className='ml-4  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold' onClick={(e) => getDataUpdate(e, list)}>Update</button>{" "}
                <button className='ml-4  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg bg-clip-text font-bold' onClick={(e) => handleDelete(e, index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
