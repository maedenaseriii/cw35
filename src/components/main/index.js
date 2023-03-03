import React, { useEffect, useState } from "react";
import TodoCart from "../todoCart";
import "./style.css";
import {useSelector,useDispatch} from 'react-redux'
import { fetchTodos } from "../../redux/feature/todo-slice";

const Main = () => {
  const { todosList, loading } = useSelector((state) => state.todosList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const [empty, setEmpty] = useState(false);
  return (
    <div>
      <div className="main">
        <p>tasks</p>
        <p>status</p>
        <p>action</p>
      </div>

      {todosList.map((todo) => (
        <TodoCart className="main__todo" key={todo.id} todo={todo} />
      ))}

      {/* {!empty?<h3 className="main__empty">no matching item found</h3>: <TodoCart/>} */}
    </div>
  );
};

export default Main;
