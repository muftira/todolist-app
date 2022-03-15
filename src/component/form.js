import React, { useState } from "react";
import ListItems from "./listItems";

function Form() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState({ action: false });
  const data = {
    id: Math.random(),
    text: input,
    isChecked: false,
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, data]);

    setInput("");
  };

  const handleDataupdate = (e, id) => {
    e.preventDefault();
    const updatedTodos = todos;
    setTodos(
      updatedTodos.map((todo) =>
        todo.id === id ? { ...todo, text: input } : todo
      )
    );
    setUpdate({ action: false });
    setInput("");
  };

  const getDataUpdate = (e, list) => {
    e.preventDefault();
    const updateData = {
      action: true,
      ...list,
    };

    setInput(list.text);
    setUpdate(updateData);
  };

  const handleCancel = () => {
      const cancelData = {
          action: false
      }
      setUpdate(cancelData)
  }

  console.log("update", update);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
      <div className="mt-60 md:h-36 md:w-96 h-36 w-72 rounded-xl bg-white flex justify-center   shadow-2xl shadow-slate-600">
        <div className="mt-4">
          <h2 className="font-bold flex justify-center text-lg">TO DO LIST</h2>
          <form
            onSubmit={
              update.action
                ? (e) => handleDataupdate(e, update.id)
                : (e) => handleSubmit(e)
            }
          >
            <input
              type="text"
              placeholder="type here . . ."
              className=" md:w-60 md:h-9 w-40 h-9 mt-2 border-2 rounded-md border-slate-400 placeholder-slate-300 px-2 py-1"
              onChange={handleChange}
              value={input}
            />
            <div className="flex justify-center items-start mt-2">
              <button className="h-9 - w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold ">
                {update.action ? "Update" : "Add"}
              </button>
              {update.action ? <button className="h-9 - w-20 rounded-md ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold "
              onClick={() => handleCancel()}
              >
                Cancel
              </button> : null}
              
            </div>
          </form>
        </div>
      </div>
      <div className="mt-7">
        <ListItems
          todos={todos}
          setTodos={setTodos}
          getDataUpdate={getDataUpdate}
          setInput={setInput}
          data={data}
        />
      </div>
    </div>
  );
}

export default Form;
