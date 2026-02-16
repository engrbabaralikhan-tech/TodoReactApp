import logo from './logo.svg';
import './App.css';
import { TodoPage } from './Pages/TodoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Show } from './Pages/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
