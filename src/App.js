import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditForm from "./components/edit";
import AddForm from "./components/form";
import Header from "./components/header";
import Main from "./components/main";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/form" element={<AddForm/>}/>
            <Route path="/edit" element={<EditForm/>}/>
        </Routes>
       
      </div>
    </Provider>
  );
}

export default App;
