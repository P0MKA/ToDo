import './App.css';
import { useState, useEffect } from "react";
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';
import ToDoList from './components/ToDoList';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import NotFound404 from "./components/not-found";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { USERS_API, TODO_API, PROJECTS_API } from "./core/consts";
import { fetchData } from "./core/actions"



function App() {
  // const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchData(PROJECTS_API, setProjects);
    fetchData(TODO_API, setTodo);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectList items={projects} />} />
          <Route path="todo" element={<ToDoList items={todo} />} />
          <Route path="project/:id" element={<ProjectDetail items={projects} />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
