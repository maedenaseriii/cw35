import { createTodo, updateTodo } from "../../redux/feature/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputState from "../hooks/use-input";
import { useEffect, useState } from "react";

const EditForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState(false);
  const selector = useSelector((state) => state.todosList.selectedTodo);
  useEffect(() => {
    setInputValue(selector.title);
    setSelect(selector.completed);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSelectChange = (e) => {
    const target=e.target.value
    setSelect( target.toLowerCase() == 'true' ? true : false)
    };

  console.log(selector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTodo = {
      id:selector.id,
      title: inputValue,
      completed: select,
    };
    dispatch(updateTodo(editedTodo));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>edit Todo</h2>
      <div className="form__div">
        <label>title</label>
        <input
          type="text"
          name="desc"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__div">
        <label>status</label>
        <select name="dob" value={select} onChange={handleSelectChange}>
          <option value={false}>todo</option>
          <option value={true}>completed</option>
        </select>
      </div>
      <button type="submit">save</button>
    </form>
  );
};

export default EditForm;
