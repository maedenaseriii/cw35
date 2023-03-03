import React, { useEffect, useState } from "react";
import "./style.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  setSelectTodo,
  updateTodo,
} from "../../redux/feature/todo-slice";
import { Link } from "react-router-dom";

const TodoCart = ({ todo }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const selector = useSelector((state) => state.todosList.selectedTodo);
  useEffect(() => {
    console.log(todo.completed);
    setCheckBoxValue(todo.completed.toString() == "true" ? true : false);
  }, []);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };
  const editHandler = () => {
    dispatch(setSelectTodo(todo));
  };
  const setUpdte = (callBack) => {
    setSelectTodo(todo);
    callBack();
  };
  function checkBoxHandler() {
    setCheckBoxValue((prev) => !prev);
    const editedTodo = {
      id: selector.id,
      title: selector.title,
      completed: checkBoxValue,
    };
    dispatch(updateTodo(editedTodo));
  }
  useEffect(() => {
    console.log(checkBoxValue);
  }, [checkBoxValue]);
  return (
    <div className="todo">
      <div className="todo__title">{todo.title}</div>
      <input
        type="checkbox"
        checked={checkBoxValue}
        onChange={() => {
          setUpdte(checkBoxHandler);
        }}
      />
      <div className="todo__btn">
        <button onClick={deleteHandler}>
          <AiFillDelete />
        </button>
        <Link to="/edit">
          <button onClick={editHandler}>
            <AiFillEdit />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TodoCart;
