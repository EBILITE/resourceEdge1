
import './App.css';
import Dashboard from './pages/dashboard';
import Landing from './pages/webpage';
import Reset from './pages/resetpage';
import SignIn from './pages/signIn';
import {
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return <div className="App">

    <Routes>
        <Route path="/login" exact element={<SignIn />} />
        <Route path="/reset" exact element={<Reset />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/" exact element={<Landing />} />
    </Routes>
  </div>
}

export default App;
