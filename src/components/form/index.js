
import { createTodo } from "../../redux/feature/todo-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './style.css'

const AddForm = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { desc, dob } = e.target;
    const newTodo = {
      title: desc.value,
      deadline: dob.value.toString(),
      completed: dob.value,
    };
    dispatch(createTodo(newTodo));
    navigate('/')
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <div className="form__div">
        <label>title</label>
        <input type="text" name="desc" placeholder="enter new task" />
      </div>
     <div className="form__div">
     <label>status</label>
     <select name="dob">
      <option value={false}>todo</option>
      <option value={true}>completed</option>
     </select>
     </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
