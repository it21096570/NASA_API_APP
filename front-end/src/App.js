import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Home.jsx';
import NasaPhoto from './componets/NasaPhoto.jsx';
import Login from './componets/Login.jsx';
import Register from './componets/Register.jsx';
import NasaWeather from './componets/NasaWeather.jsx';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nasaphoto" element={<NasaPhoto />} />
          <Route path="/nasaweather" element={<NasaWeather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
